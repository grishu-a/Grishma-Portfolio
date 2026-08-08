import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="btn-primary flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-accent-foreground">
            {initials}
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight">
            {profile.name}
          </span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
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
            className="btn-primary hidden rounded-full px-4 py-1.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Get in touch
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
