"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type ContactForm = {
  name: string;
  email: string;
  message: string;
  website: string;
};

const INITIAL_FORM: ContactForm = { name: "", email: "", message: "", website: "" };
const CONTACT_ADDRESS = "delphiadesigns@gmail.com";

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (feedback) setFeedback(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;

    setSending(true);
    setFeedback(null);

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success !== true) {
        throw new Error("Contact delivery was not accepted.");
      }

      // Only report success when the backend email provider accepted the message.
      setForm(INITIAL_FORM);
      setFeedback({
        type: "success",
        text: "Your message was accepted for email delivery. Thank you for contacting Delphia Designs.",
      });
    } catch {
      // Keep the user's draft so a failed provider call does not lose the inquiry.
      setFeedback({
        type: "error",
        text: "The message could not be sent. Please email us directly at " + CONTACT_ADDRESS + ". Your draft is still here.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="min-h-screen px-6 pt-20 pb-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-5">Contact</h1>
      <p className="max-w-xl text-center text-gray-300 mb-8">
        Tell us about your website, software, integration, or automation project.
        We&apos;ll respond using the email address you provide.
      </p>

      <div className="mb-9 text-center">
        <p className="text-lg mb-2">
          Email:{" "}
          <a className="text-blue-300 hover:underline" href={`mailto:${CONTACT_ADDRESS}`}>
            {CONTACT_ADDRESS}
          </a>
        </p>
        <p className="text-lg">
          Phone:{" "}
          <a className="text-blue-300 hover:underline" href="tel:+14403080123">
            440-308-0123
          </a>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        aria-label="Contact Delphia Designs"
        className="w-full max-w-lg bg-black/40 border border-gray-700 rounded-xl p-6"
      >
        <label className="block mb-4">
          <span className="text-lg">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            maxLength={150}
            disabled={sending}
            className="w-full mt-2 p-2 rounded bg-gray-800 text-white disabled:opacity-60"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-lg">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            maxLength={254}
            disabled={sending}
            className="w-full mt-2 p-2 rounded bg-gray-800 text-white disabled:opacity-60"
            required
          />
        </label>

        {/* Invisible field to reduce basic automated spam; humans should leave it empty. */}
        <div aria-hidden="true" className="absolute -left-[9999px] w-1 h-1 overflow-hidden">
          <label htmlFor="contact-website">Website</label>
          <input
            type="text"
            id="contact-website"
            name="website"
            value={form.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <label className="block mb-6">
          <span className="text-lg">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            maxLength={10000}
            disabled={sending}
            className="w-full mt-2 p-2 rounded bg-gray-800 text-white h-32 disabled:opacity-60"
            placeholder="What would you like help building?"
            required
          />
        </label>

        <button
          type="submit"
          disabled={sending}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {sending ? "Sending..." : "Send Message"}
        </button>

        {feedback && (
          <p
            className={`mt-4 text-sm ${feedback.type === "success" ? "text-green-300" : "text-red-300"}`}
            role={feedback.type === "error" ? "alert" : "status"}
            aria-live="polite"
          >
            {feedback.text}
          </p>
        )}
      </form>
    </section>
  );
}
