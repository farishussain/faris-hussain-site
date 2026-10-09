import Link from "next/link";
import MobileNav from "./MobileNav";

export type NavLink = { href: string; label: string };

export const NAV_LINKS: NavLink[] = [
  { href: "/#services", label: "Services" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/#skills", label: "Skills" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/#top" className="font-semibold tracking-tight">
          Faris Hussain
        </Link>
        <nav className="hidden gap-6 text-sm text-neutral-300 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-1 transition hover:text-white"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-sky-400 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:bg-sky-400 sm:inline-block"
        >
          Book a call
        </Link>
        <MobileNav links={NAV_LINKS} />
      </div>
    </header>
  );
}
