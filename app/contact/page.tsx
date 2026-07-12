"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message submitted.");
  };

  return (
    <section className="min-h-screen px-6 pt-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10">Contact</h1>

      {/* Business Info */}
      <div className="mb-10 text-center">
        <p className="text-xl mb-2">
          Email: <span className="text-blue-300">delphiadesigns@gmail.com</span>
        </p>
        <p className="text-xl">
          Phone: <span className="text-blue-300">440-308-0123</span>
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-black/40 border border-gray-700 rounded-xl p-6"
      >
        <label className="block mb-4">
          <span className="text-lg">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full mt-2 p-2 rounded bg-gray-800 text-white"
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
            className="w-full mt-2 p-2 rounded bg-gray-800 text-white"
            required
          />
        </label>

        <label className="block mb-6">
          <span className="text-lg">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full mt-2 p-2 rounded bg-gray-800 text-white h-32"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
