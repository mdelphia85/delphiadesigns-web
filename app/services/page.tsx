"use client";

import { useState } from "react";

export default function ServicesPage() {
  const services = [
    {
      key: "software",
      title: "Custom Software Development",
      text: `Tailored desktop and enterprise software built around your workflow.
We design tools that solve real problems without unnecessary complexity —
built as consumers, for consumers.`,
      color: "bg-blue-900/40 text-blue-300 border-blue-500/40",
    },
    {
      key: "businessSoftware",
      title: "Business-Specific Custom Software",
      text: `Software built specifically for your business operations, workflows, and industry needs.
We eliminate bottlenecks, reduce manual work, and streamline daily operations —
built as consumers, for consumers.`,
      color: "bg-orange-900/40 text-orange-300 border-orange-500/40",
    },
    {
      key: "websites",
      title: "Website Development",
      text: `Modern, responsive websites designed for performance, clarity, and scalability.
No bloated templates — just clean, efficient builds that load fast and work everywhere.`,
      color: "bg-purple-900/40 text-purple-300 border-purple-500/40",
    },
    {
      key: "mobile",
      title: "Mobile Applications",
      text: `Cross-platform mobile apps built for real users.
We focus on speed, usability, and seamless experiences across both iOS and Android.`,
      color: "bg-green-900/40 text-green-300 border-green-500/40",
    },
    {
      key: "brand",
      title: "Brand Identity & Design",
      text: `Logos, visual identity systems, and user interfaces that strengthen your brand.
Clean, modern, intentional — no generic templates or recycled assets.`,
      color: "bg-red-900/40 text-red-300 border-red-500/40",
    },
    {
      key: "automation",
      title: "Business Automation",
      text: `Streamline repetitive tasks and connect your systems to save time.
We build automation that actually works — not fragile, over-engineered corporate solutions.`,
      color: "bg-yellow-900/40 text-yellow-300 border-yellow-500/40",
    },
    {
      key: "ai",
      title: "AI Integration (Coming Soon)",
      text: `Intelligent tools that enhance productivity and decision-making.
Built with real-world use in mind — not hype.`,
      color: "bg-teal-900/40 text-teal-300 border-teal-500/40",
    },
  ];

  const [selected, setSelected] = useState(services[0]);

  return (
    <section className="min-h-screen px-6 pt-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 text-blue-300">Services</h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT SIDE — UNIQUE COLOR SERVICE LIST */}
        <div className="flex flex-col gap-4">
          {services.map((service) => (
            <button
              key={service.key}
              onClick={() => setSelected(service)}
              className={`text-left p-3 rounded-lg border transition ${
                selected.key === service.key
                  ? `${service.color} border`
                  : "bg-black/40 text-gray-300 border-gray-700"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE — SELECTED SERVICE */}
        <div className="md:col-span-2 bg-black/40 rounded-xl p-6">
          <h2 className={`text-2xl font-semibold mb-4 ${selected.color.split(" ")[1]}`}>
            {selected.title}
          </h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {selected.text}
          </p>
        </div>

      </div>
    </section>
  );
}
