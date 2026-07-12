"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Icon */}
      <div
        className="fixed top-4 left-4 z-50 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <Image
          src="/menu.png"
          alt="Menu"
          width={48}
          height={48}
        />
      </div>

      {/* Menu opening to the RIGHT */}
      <div
        className={`fixed top-4 left-20 bg-black/90 text-white p-4 rounded-lg shadow-xl
          transform transition-transform duration-300 z-40
          ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col gap-4 text-lg">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </div>
    </>
  );
}
