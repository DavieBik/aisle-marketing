import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const { email } = (await request.json()) as { email?: string };
    if (!email?.trim() || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!resend) {
      console.info("[newsletter]", email);
      return NextResponse.json({ ok: true });
    }

    const audienceId = process.env.RESEND_NEWSLETTER_AUDIENCE_ID;
    if (audienceId) {
      await resend.contacts.create({
        email,
        audienceId,
        unsubscribed: false,
      });
    }

    await resend.emails.send({
      from: "The Aisle App <hello@theaisleapp.com>",
      to: email,
      subject: "Notes from The Aisle App",
      text: "Thank you for subscribing. We will send occasional notes on weddings, beautifully kept.",
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
