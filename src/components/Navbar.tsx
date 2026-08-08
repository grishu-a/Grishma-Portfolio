import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="#top" className="font-mono text-sm font-semibold tracking-tight">
          {profile.name}
        </Link>
        <div className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Get in touch
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
