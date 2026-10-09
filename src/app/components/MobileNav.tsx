"use client";

import Link from "next/link";
import { useState } from "react";

type NavLink = { href: string; label: string };

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5"
      >
        <span
          className={`h-px w-4 bg-neutral-100 transition duration-300 ${
            open ? "translate-y-[3px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-4 bg-neutral-100 transition duration-300 ${
            open ? "-translate-y-[3px] -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <div className="fixed inset-0 top-[57px] z-40 animate-[fade-in_0.2s_ease-out] bg-neutral-950/95 backdrop-blur">
          <nav className="flex flex-col items-center gap-6 pt-12 text-lg">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-neutral-200 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
