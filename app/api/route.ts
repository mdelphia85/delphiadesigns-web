import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, message, website } = await request.json();

    // Honeypot: automated submissions filling this invisible field are ignored.
    if (typeof website === "string" && website.trim()) {
      return NextResponse.json({ success: true });
    }

    if (
      (website !== undefined && typeof website !== "string") ||
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
    const nameValue = name.trim();
    const emailValue = email.trim();
    const messageValue = message.trim();

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Delphia Designs <contact@delphiadesignsco.com>",
      to: [process.env.CONTACT_EMAIL || "delphiadesigns@gmail.com"],
      replyTo: emailValue,
      subject: `Website inquiry from ${nameValue.replace(/[\r\n]/g, " ")}`,
      text: `Name: ${nameValue}\nEmail: ${emailValue}\n\nMessage:\n${messageValue}`,
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