import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export default function NavMenu() {
  return (
    <header className="fixed top-3 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2">
      <nav aria-label="Main navigation" className="flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-black/85 px-3 py-2 shadow-[0_18px_45px_rgba(2,6,23,0.45)] backdrop-blur-sm">
        <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto whitespace-nowrap">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white sm:px-3 sm:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="shrink-0 rounded-xl bg-gradient-to-r from-sky-200 via-blue-300 to-slate-400 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:opacity-90 sm:text-sm"
        >
          Contact Me
        </Link>
      </nav>
    </header>
  );
}
