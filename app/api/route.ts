import { NextResponse } from "next/server";
import { Resend } from "resend";

// Safe, read-only status for the contact page. No API keys or addresses
// are returned; actual delivery is still confirmed only by a successful POST.
export async function GET() {
  return NextResponse.json(
    { formAvailable: Boolean(process.env.RESEND_API_KEY?.trim()) },
    { headers: { "Cache-Control": "no-store" } }
  );
}

export async function POST(request: Request) {
  let name: unknown;
  let email: unknown;
  let message: unknown;
  let website: unknown;

  try {
    const payload = await request.json();
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
      throw new Error("Invalid payload");
    }
    ({ name, email, message, website } = payload);
  } catch {
    return NextResponse.json({ error: "Invalid message format." }, { status: 400 });
  }

  // Honeypot: do not contact the mail provider for automated submissions.
  if (typeof website === "string" && website.trim()) {
    return NextResponse.json({ success: true });
  }

  if (
    (website !== undefined && typeof website !== "string") ||
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    !message.trim() ||
    name.length > 150 ||
    email.length > 254 ||
    message.length > 10000
  ) {
    return NextResponse.json(
      { error: "Please enter valid contact information." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 }
    );
  }

  const nameValue = name.trim();
  const emailValue = email.trim();
  const messageValue = message.trim();

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Delphia Designs <contact@delphiadesignsco.com>",
      to: [process.env.CONTACT_EMAIL || "delphiadesigns@gmail.com"],
      replyTo: emailValue,
      subject: `Website inquiry from ${nameValue.replace(/[\r\n]/g, " ")}`,
      text: `Name: ${nameValue}\nEmail: ${emailValue}\n\nMessage:\n${messageValue}`,
    });

    if (error || !data?.id) {
      console.error("Contact email service rejected the message", error || "missing delivery identifier");
      return NextResponse.json(
        { error: "Unable to deliver your message." },
        { status: 502 }
      );
    }
    return NextResponse.json({ success: true });
  } catch {
    console.error("Contact email service request failed");
    return NextResponse.json(
      { error: "Email service is currently unavailable." },
      { status: 502 }
    );
  }
}
