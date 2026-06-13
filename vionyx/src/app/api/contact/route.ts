import { NextRequest, NextResponse } from "next/server";
import { discoveryFormSchema } from "@/lib/schemas";
import { sendContactEmail } from "@/lib/email";

// In-memory simple rate limiting
const ipCache = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

export async function POST(req: NextRequest) {
  try {
    // 1. Rate limiting
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    const now = Date.now();
    const clientLimit = ipCache.get(ip);

    if (clientLimit) {
      if (now - clientLimit.lastReset < RATE_LIMIT_WINDOW) {
        if (clientLimit.count >= MAX_REQUESTS) {
          return NextResponse.json(
            { success: false, error: "Too many requests. Please try again in a minute." },
            { status: 429 }
          );
        }
        clientLimit.count += 1;
      } else {
        ipCache.set(ip, { count: 1, lastReset: now });
      }
    } else {
      ipCache.set(ip, { count: 1, lastReset: now });
    }

    // 2. Parse body
    const body = await req.json();

    // 3. Zod validation against the discovery form schema
    const validation = discoveryFormSchema.safeParse(body);
    if (!validation.success) {
      const errorMap = validation.error.flatten().fieldErrors;
      return NextResponse.json({ success: false, errors: errorMap }, { status: 400 });
    }

    const { name, email, company, website, message, service, budget, timeline, honeypot } = validation.data;

    // 4. Honeypot anti-spam check
    if (honeypot && honeypot.trim() !== "") {
      return NextResponse.json({ success: true, message: "Inquiry received successfully." });
    }

    // 5. Input sanitization
    const sanitize = (text: string) => text.replace(/<[^>]*>/g, "");
    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      company: company ? sanitize(company) : undefined,
      website: website ? sanitize(website) : undefined,
      message: [
        `Service: ${service}`,
        `Budget: ${budget}`,
        `Timeline: ${timeline}`,
        "",
        sanitize(message),
      ].join("\n"),
    };

    // 6. Send email
    const emailResponse = await sendContactEmail(sanitizedData);

    if (!emailResponse.success) {
      return NextResponse.json(
        { success: false, error: emailResponse.error || "Failed to dispatch email notification." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your project inquiry has been received! We'll be in touch within one business day.",
    });
  } catch (err: unknown) {
    console.error("[Contact API] Server Error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
