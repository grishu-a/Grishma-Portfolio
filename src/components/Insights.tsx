import Link from "next/link";
import { insights } from "@/lib/data";
import { ArrowRightIcon } from "./icons";
import Reveal from "./Reveal";

export default function Insights() {
  const latest = insights[0];
  if (!latest) return null;

  return (
    <section id="insights" className="mx-auto max-w-5xl px-6 pb-20 sm:pb-24">
      <Reveal>
        <Link
          href={`/insights/${latest.slug}`}
          className="card-surface group relative block overflow-hidden p-6 sm:p-8"
        >
          <div
            className="blob -right-16 -top-16 h-48 w-48 bg-accent-2 opacity-20"
            aria-hidden="true"
          />
          <p className="eyebrow relative">Latest insight · Payments</p>
          <h3 className="relative mt-3 max-w-3xl text-xl font-bold leading-snug tracking-tight sm:text-2xl">
            {latest.title}
          </h3>
          <p className="relative mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            {latest.summary}
          </p>
          <div className="relative mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
              Read the article
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
            <span className="font-mono text-xs text-muted">
              {latest.date} · {latest.readTime} · 6 sources
            </span>
          </div>
        </Link>
      </Reveal>
    </section>
  );
}
