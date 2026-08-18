import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with the server-side API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // 1. Validation fallback
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required contact form details." },
        { status: 400 }
      );
    }

    // 2. Dispatch email via Resend API
    const { data, error } = await resend.emails.send({
      // NOTE: While in testing, Resend requires you to use 'onboarding@resend.dev'
      // Once your client verifies their domain (e.g., yourclient.com), 
      // you can change this to 'Contact Form <contact@yourclient.com>'
      from: "Survivors Organization Contact <onboarding@resend.dev>",
      to: ["carole@survivors.or.ke"], // Your client's target Gmail address
      replyTo: email,           // Allows your client to click "Reply" directly in Gmail to reply to the user
      subject: `[Contact Form Submission] ${subject}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #171717; max-w-xl; margin: 0 auto; border: 1px solid #e5e5e5; rounded-xl: 12px;">
          <h2 style="color: #E63946; font-size: 20px; font-weight: 700; border-bottom: 1px solid #e5e5e5; padding-bottom: 12px; margin-top: 0;">
            New Contact Form Message
          </h2>
          
          <table style="width: 100%; margin-top: 16px; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; font-size: 14px; color: #737373; width: 100px; font-weight: 600;">Sender:</td>
              <td style="padding: 6px 0; font-size: 14px; color: #171717;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-size: 14px; color: #737373; font-weight: 600;">Email:</td>
              <td style="padding: 6px 0; font-size: 14px; color: #171717;">
                <a href="mailto:${email}" style="color: #E63946; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-size: 14px; color: #737373; font-weight: 600;">Subject:</td>
              <td style="padding: 6px 0; font-size: 14px; color: #171717;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="font-size: 14px; color: #737373; font-weight: 600; margin-bottom: 8px;">Message Content:</p>
            <div style="background-color: #f5f5f5; padding: 16px; border-left: 4px solid #E63946; font-size: 14px; line-height: 1.6; border-radius: 4px; white-space: pre-wrap; color: #262626;">
              ${message}
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Execution Fault:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err: any) {
    console.error("Server API Route Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error occurred while routing email submission." },
      { status: 500 }
    );
  }
}