import Link from "next/link";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
      <p className="eyebrow">Hi, I&apos;m {profile.name.split(" ")[0]}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
        {profile.role}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">{profile.tagline}</p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="#projects"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          View my work
        </Link>
        <Link
          href={profile.resumeUrl}
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
        >
          Download résumé
        </Link>
      </div>
    </section>
  );
}
