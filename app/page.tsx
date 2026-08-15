import Image from "next/image";

export default function HomePage() {
  return (
    <section className="hero-shell">
      <div className="hero-copy" aria-label="Delphia Designs hero statement">
        <span className="hero-welcome">Welcome to</span>
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
        <span className="hero-tagline hero-tagline-top">Consumer Built.</span>
        <span className="hero-tagline hero-tagline-mid">Consumer Driven.</span>
        <span className="hero-tagline hero-tagline-bottom">Made by the people who use it.</span>
      </div>
    </section>
  );
}

