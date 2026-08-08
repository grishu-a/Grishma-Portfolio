import Link from "next/link";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-3xl border border-border bg-card px-8 py-14 text-center">
        <h2 className="text-sm font-mono text-accent">06 · Contact</h2>
        <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s build something together
        </h3>
        <p className="mx-auto mt-4 max-w-md text-muted">
          I&apos;m open to new opportunities and interesting projects. Reach out and
          I&apos;ll get back to you.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Say hello
          </Link>
          <Link
            href={profile.socials.linkedin}
            className="rounded-full border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-background"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
