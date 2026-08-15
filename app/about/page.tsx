export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 pt-20 flex flex-col items-center">

      <h1 className="text-4xl font-bold mb-10 text-blue-300">About</h1>

      <div className="max-w-4xl bg-black/40 rounded-xl p-6">

        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
          Delphia Designs is a product-first studio focused on practical digital
          solutions. We build software, systems, and experiences that solve real
          problems — without the clutter, complexity, or wasted effort that often
          comes with generic technology.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
          The philosophy is simple: build what you would actually use. Every idea
          starts with real-world needs, not corporate theory. That means cleaner
          experiences, better workflows, and products designed to work the way
          people actually live and operate.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg">
          Whether it’s custom software, business automation, web development, or
          product design, the goal is the same: create tools that are useful,
          reliable, and built to make work and life easier. Delphia Designs is
          about practical innovation — not noise, not hype, and not unnecessary
          complexity.
        </p>

      </div>
    </section>
  );
}
