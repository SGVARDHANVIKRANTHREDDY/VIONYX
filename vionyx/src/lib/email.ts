import { Resend } from "resend";
import { businessConfig } from "@/config/business";

const resendApiKey = process.env.RESEND_API_KEY;

// Create Resend client only if API key is provided
export const resend = resendApiKey ? new Resend(resendApiKey) : null;

interface EmailPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export async function sendContactEmail({ name, email, phone, company, message }: EmailPayload) {
  const emailHtml = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
      <h2 style="color: #000; border-bottom: 2px solid #primary; padding-bottom: 10px;">New Inquiry from ${businessConfig.name} Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 5px; color: #333;">${message}</p>
    </div>
  `;

  if (resend) {
    try {
      const { data, error } = await resend.emails.send({
        from: `${businessConfig.name} Portal <onboarding@resend.dev>`,
        to: [businessConfig.email],
        subject: `New Inquiry from ${name} - ${businessConfig.name}`,
        html: emailHtml,
        replyTo: email,
      });

      if (error) {
        throw new Error(error.message);
      }
      return { success: true, data };
    } catch (err: unknown) {
      console.error("[Email Helper] Resend Error:", err);
      return { success: false, error: err instanceof Error ? err.message : "An unknown error occurred" };
    }
  } else {
    // Fallback if RESEND_API_KEY is not defined (e.g. local environment)
    console.log(`
==================================================
[SIMULATED EMAIL DISPATCH]
To: ${businessConfig.email}
Subject: New Inquiry from ${name}
Content:
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}
Message: ${message}
==================================================
    `);
    return { success: true, simulated: true };
  }
}
