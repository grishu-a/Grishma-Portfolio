"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/data";
import { CloseIcon, MenuIcon } from "./icons";

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
  const [open, setOpen] = useState(false);

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="animate-slide-down sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="btn-primary flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-accent-foreground transition-transform hover:scale-105">
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
              className="nav-link text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="btn-primary hidden rounded-full px-4 py-1.5 text-sm font-medium text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 sm:inline-block"
          >
            Get in touch
          </Link>
          <ThemeToggle />
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-all hover:bg-card active:scale-90 lg:hidden"
          >
            {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </nav>
      <div
        className={`overflow-hidden border-t border-border transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-card hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
