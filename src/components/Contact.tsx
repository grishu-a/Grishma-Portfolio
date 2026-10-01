import { profile } from "@/lib/data";
import CopyEmail from "./CopyEmail";
import { ArrowRightIcon } from "./icons";
import Reveal from "./Reveal";

export default function Contact() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Opportunity for Grishma")}`;

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-14 text-center">
        <div
          className="blob left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 bg-accent [animation-delay:4s]"
          aria-hidden="true"
        />
        <div
          className="blob bottom-0 right-1/4 h-48 w-48 translate-y-1/2 bg-accent-3 [animation-delay:1s]"
          aria-hidden="true"
        />
        <div className="relative">
          <h2 className="eyebrow justify-center">08 · Contact</h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something together
          </h3>
          <p className="mx-auto mt-4 max-w-md text-muted">
            I&apos;m open to new opportunities and interesting projects. Reach out and
            I&apos;ll get back to you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={mailto}
              className="btn-primary group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Email me
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-background"
            >
              LinkedIn
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
          <CopyEmail email={profile.email} />
        </div>
      </Reveal>
    </section>
  );
}
