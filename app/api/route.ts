import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
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

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Delphia Designs <contact@delphiadesignsco.com>",
      to: [process.env.CONTACT_EMAIL || "delphiadesigns@gmail.com"],
      replyTo: email,
      subject: `Website inquiry from ${name.replace(/[\r\n]/g, " ")}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Contact email failed:", error);
      return NextResponse.json(
        { error: "Unable to deliver your message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to process your request." },
      { status: 400 }
    );
  }
}