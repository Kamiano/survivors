import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Replace this string with your actual Audience ID from your Resend Dashboard 
// (Go to Audiences -> Settings to find your Audience ID)
const AUDIENCE_ID = "your-audience-id-here";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Add the subscriber to your Resend Audience List
    const { data, error } = await resend.contacts.create({
      email: email,
      audienceId: AUDIENCE_ID,
      unsubscribed: false, // Ensures they are active subscribers
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}