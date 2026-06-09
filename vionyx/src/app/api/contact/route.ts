import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";
import { sendContactEmail } from "@/lib/email";

// In-memory simple rate limiting for production-ready verification
const ipCache = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // Max 3 contact submissions per minute per IP

export async function POST(req: NextRequest) {
  try {
    // 1. Get client IP address for rate limiting
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

    // 2. Parse request body
    const body = await req.json();

    // 3. Server-side validation using Zod
    const validation = contactFormSchema.safeParse(body);
    if (!validation.success) {
      const errorMap = validation.error.flatten().fieldErrors;
      return NextResponse.json({ success: false, errors: errorMap }, { status: 400 });
    }

    const { name, email, phone, company, message, honeypot } = validation.data;

    // 4. Honeypot check (Spam Protection)
    if (honeypot && honeypot.trim() !== "") {
      // Silently return success to mislead spambot
      return NextResponse.json({ success: true, message: "Inquiry received successfully." });
    }

    // 5. Input sanitization (Simple HTML stripping to prevent XSS)
    const sanitize = (text: string) => text.replace(/<[^>]*>/g, "");
    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      phone: phone ? sanitize(phone) : undefined,
      company: company ? sanitize(company) : undefined,
      message: sanitize(message),
    };

    // 6. Send email via Resend / Console Simulation
    const emailResponse = await sendContactEmail(sanitizedData);

    if (!emailResponse.success) {
      return NextResponse.json(
        { success: false, error: emailResponse.error || "Failed to dispatch email notification." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (err: unknown) {
    console.error("[Contact API] Server Error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
