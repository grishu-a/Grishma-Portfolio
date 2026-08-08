import Link from "next/link";
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
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="#top" className="text-lg font-black tracking-tight lowercase">
          {profile.name.split(" ")[0]}
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="kicker text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="#contact" className="btn btn-solid">
          Get in touch
        </Link>
      </nav>
    </header>
  );
}
