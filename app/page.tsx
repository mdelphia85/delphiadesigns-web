import Image from "next/image";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-start min-h-screen pt-20">

      {/* Welcome text */}
      <h1 className="text-4xl font-bold mb-4"
          style={{ color: "#C0D0FF" }}> {/* blue/silver */}
        Welcome to
      </h1>

      {/* Delphia Designs logo */}
      <Image
        src="/DelphiaDesigns.jpg"
        alt="Delphia Designs Logo"
        width={600}
        height={400}
        className="w-auto h-auto"
      />

    </section>
  );
}
