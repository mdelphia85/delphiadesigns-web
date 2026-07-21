import "./global.css";
import type { ReactNode } from "react";
import NavMenu from "./components/NavMenu";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Delphia Designs",
  description: "Engineering • Development • Precision",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* Menu button + slide-out menu */}
        <NavMenu />

        {/* Page content */}
        <main className="pt-16">
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  );
}
