import Image from "next/image";

export default function HomePage() {
  return (
    <section className="hero-shell">
      <div className="hero-copy" aria-label="Delphia Designs hero statement">
        <span className="hero-welcome">Delphia Designs</span>
      </div>

      <div className="logo-wrap">
        <Image
          src="/DelphiaDesigns.jpg"
          alt="Delphia Designs Logo"
          width={600}
          height={400}
          className="hero-logo"
        />
      </div>

      <div className="hero-footer" aria-label="Delphia Designs tagline">
        <span className="hero-tagline hero-tagline-top">Built for real use.</span>
        <span className="hero-tagline hero-tagline-mid">Designed for real problems.</span>
        <span className="hero-tagline hero-tagline-bottom">Created by people who live in the product.</span>
      </div>
    </section>
  );
}

