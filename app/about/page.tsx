export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 pt-20 flex flex-col items-center">

      <h1 className="text-4xl font-bold mb-10 text-blue-300">About Us</h1>

      <div className="max-w-4xl bg-black/40 rounded-xl p-6">

        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
          At Delphia Designs, we build as consumers, for consumers. Every product,
          service, and system we create comes from real-world experience — not
          corporate theory. We design solutions we would actually use, because
          we know what it feels like to deal with slow, bloated, overpriced, or
          poorly thought-out technology.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
          Our approach is simple: build tools that solve real problems, remove
          unnecessary complexity, and deliver performance without compromise.
          Whether it’s fitness technology, business automation, custom software,
          or full-scale web development, we focus on clarity, speed, and
          reliability.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg">
          We don’t build products to impress investors — we build them to serve
          people. If it doesn’t make life easier, faster, or better, we don’t
          ship it. That’s the Delphia Designs standard.
        </p>

      </div>
    </section>
  );
}
