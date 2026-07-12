import Image from "next/image";

export default function PortfolioPage() {
  return (
    <section className="min-h-screen px-6 pt-20 flex flex-col items-center">

      <h1 className="text-4xl font-bold mb-10">Portfolio</h1>

      <div className="w-full max-w-5xl">

        {/* DelphiaFit */}
        <div className="bg-black/40 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">DelphiaFit</h2>

          <Image
            src="/delphiafit.png"
            alt="DelphiaFit"
            width={400}
            height={400}
            className="w-full h-auto rounded-lg mb-4"
          />

          <p className="text-blue-300 text-lg mb-4">
            Website: <a href="https://delphiafit.com" target="_blank" rel="noopener noreferrer">
              delphiafit.com
            </a>
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            DelphiaFit is a streamlined fitness tracking platform built to
            simplify progress monitoring and workout planning. It was created
            to provide a clean, efficient alternative to bloated fitness apps,
            focusing on usability, speed, and clarity.
          </p>

          <p className="text-gray-300 leading-relaxed">
            The top 47 fitness apps each focus on specific metrics — meaning
            users often need multiple subscriptions to track everything they
            care about. With DelphiaFit, you get a single, all‑in‑one fitness
            website and app that covers every major metric in one place, with
            regular updates and improvements. DelphiaFit is built to be your
            complete fitness solution without the cost and complexity of
            juggling multiple apps.
          </p>
        </div>

      </div>
    </section>
  );
}
