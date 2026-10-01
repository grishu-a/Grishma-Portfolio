import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { profile } from "@/lib/data";
import Footer from "./Footer";
import { ArrowRightIcon, CheckIcon } from "./icons";
import ThemeToggle from "./ThemeToggle";

type Item = { title: string; body: string };

export function CaseStudyShell({
  eyebrow,
  title,
  lead,
  facts,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: ReactNode;
  facts: { label: string; value: string }[];
  image: { src: string; alt: string; position?: "top" };
  children: ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            Back to portfolio
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24 pt-14">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{lead}</p>

        <dl className="mt-10 grid gap-x-8 gap-y-5 border-y border-border py-6 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 768px) 720px, 100vw"
            className={`object-cover ${image.position === "top" ? "object-top" : ""}`}
          />
        </div>

        {children}

        <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-border pt-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            More projects
          </Link>
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent("Opportunity for Grishma")}`}
            className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-accent-foreground"
          >
            Get in touch
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-16">
      <p className="eyebrow">{number}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="space-y-4 text-base leading-relaxed text-muted">{children}</div>;
}

export function Steps({ steps }: { steps: Item[] }) {
  return (
    <ol className="mt-8 space-y-6 border-l border-border pl-6">
      {steps.map((step, index) => (
        <li key={step.title} className="relative">
          <span className="absolute -left-[37px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-accent font-mono text-[10px] font-bold text-accent-foreground">
            {index + 1}
          </span>
          <h3 className="font-semibold">{step.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function CheckCards({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.title} className="card-surface p-5">
          <h3 className="flex items-start gap-2 font-semibold">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-3" />
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export function Challenges({ items }: { items: Item[] }) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <div key={item.title} className="border-l-2 border-accent pl-5">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export function Highlight({ value, children }: { value: string; children: ReactNode }) {
  return (
    <div className="card-surface flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
      <p className="gradient-text shrink-0 text-5xl font-bold">{value}</p>
      <p className="text-base leading-relaxed text-muted">{children}</p>
    </div>
  );
}

export function SkillChips({ skills }: { skills: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li
          key={skill}
          className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/80"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
