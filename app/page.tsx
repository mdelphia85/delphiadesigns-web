import Image from "next/image";

export default function HomePage() {
  return (
    <section className="hero-shell">
      <div className="hero-copy" aria-label="Delphia Designs hero statement">
        <span className="hero-welcome">Welcome to</span>
        <span className="hero-line hero-line-left">Consumer Built.</span>
        <span className="hero-line hero-line-right">Consumer Driven.</span>
        <span className="hero-line hero-line-bottom">Made by the people who use it.</span>
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
    </section>
  );
}

