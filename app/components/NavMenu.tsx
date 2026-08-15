import Link from "next/link";

export default function NavMenu() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
      <nav className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-black/60 px-3 py-2 shadow-[0_18px_45px_rgba(2,6,23,0.45)] backdrop-blur-sm">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
        >
          Home
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-200 via-blue-300 to-slate-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-90"
        >
          Book a discovery call
        </Link>
      </nav>
    </header>
  );
}
