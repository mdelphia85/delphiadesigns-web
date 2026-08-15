import Image from "next/image";
import Link from "next/link";

const services = [
  "Website design and front-end development",
  "Custom software and internal tools",
  "Workflow automation and business systems",
  "Product thinking for founders and growing teams",
];

const outcomes = [
  {
    title: "Less friction",
    text: "Clean systems that remove repetitive work and clarify decisions.",
  },
  {
    title: "Better clarity",
    text: "A digital experience that explains your offer in a way people understand fast.",
  },
  {
    title: "More confidence",
    text: "Tools and experiences built around real use, not theory or generic templates.",
  },
];

const process = [
  {
    step: "01",
    title: "Understand the problem",
    text: "We start with how work actually happens and where friction is costing time or opportunities.",
  },
  {
    step: "02",
    title: "Design the right solution",
    text: "Then we shape a practical, usable approach that fits the business, not a bloated system no one wants.",
  },
  {
    step: "03",
    title: "Build and refine",
    text: "We turn the plan into something reliable, clear, and ready for real-world use.",
  },
];

export default function HomePage() {
  return (
    <>
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

      <section className="lead-section">
        <div className="lead-card">
          <p className="eyebrow">Custom software • websites • better systems</p>
          <h2>Tools and experiences that fit how real businesses actually operate.</h2>
          <p className="lead-copy">
            Delphia Designs helps founders and growing teams turn messy workflows, unclear digital experiences,
            and business bottlenecks into practical tools that work.
          </p>

          <div className="lead-actions">
            <Link href="/contact" className="primary-cta">
              Book a discovery call
            </Link>
            <Link href="/services" className="secondary-cta">
              Explore services
            </Link>
          </div>

          <div className="service-pills" aria-label="Core service list">
            {services.map((service) => (
              <span key={service} className="service-pill">
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="info-grid">
          <div className="info-card">
            <p className="section-kicker">Who it’s for</p>
            <h3>Built for teams that need clarity, speed, and less friction.</h3>
            <ul className="check-list">
              <li>Founders with an idea but no clear product path</li>
              <li>Small businesses dealing with messy workflows</li>
              <li>Growing teams that need systems that scale with them</li>
              <li>People who want digital tools that feel practical, not inflated</li>
            </ul>
          </div>

          <div className="info-card">
            <p className="section-kicker">What you can expect</p>
            <div className="outcome-grid">
              {outcomes.map((item) => (
                <div key={item.title} className="outcome-item">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading">
          <p className="section-kicker">How we work</p>
          <h3>A simple process designed to keep momentum high.</h3>
        </div>

        <div className="process-grid">
          {process.map((item) => (
            <div key={item.step} className="process-card">
              <span className="step-number">{item.step}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="service-section">
        <div className="section-heading centered">
          <p className="section-kicker">Common problems we solve</p>
          <h3>Real work, real constraints, real outcomes.</h3>
        </div>

        <div className="service-grid">
          <div className="service-card">
            <h4>Manual work slowing the team down</h4>
            <p>Automation, cleaner workflows, and simple systems that reduce wasted effort.</p>
          </div>
          <div className="service-card">
            <h4>Disconnected processes</h4>
            <p>Better tools and integrations to keep information moving without chaos.</p>
          </div>
          <div className="service-card">
            <h4>Web presence that does not convert</h4>
            <p>Design and front-end work built to communicate value and create action.</p>
          </div>
        </div>
      </section>

      <section className="cta-footer">
        <h3>Need a digital tool, website, or workflow that actually fits how you operate?</h3>
        <Link href="/contact" className="primary-cta large-cta">
          Start the conversation
        </Link>
      </section>
    </>
  );
}

