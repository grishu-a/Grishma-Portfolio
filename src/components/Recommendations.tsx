import type { ReactNode } from "react";
import { profile, recommendationQualities, recommendations } from "@/lib/data";
import { CheckIcon, ExternalLinkIcon } from "./icons";
import Reveal from "./Reveal";

function initials(name: string) {
  const parts = name.split(" ");
  return `${parts[0][0]}${parts[parts.length - 1][0]}`;
}

// Bold the recommender's key phrases so skimmers catch them; the wording stays verbatim.
function emphasise(quote: string, phrases: string[] = []): ReactNode[] {
  if (phrases.length === 0) return [quote];
  const escaped = phrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  return quote.split(new RegExp(`(${escaped.join("|")})`)).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export default function Recommendations() {
  return (
    <section id="recommendations" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <Reveal>
        <h2 className="eyebrow">04 · Recommendations</h2>
        <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          What people say
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Recommendations from the people I worked with at Fonepay.
        </p>
      </Reveal>

      <Reveal delay={80} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          What colleagues highlight
        </span>
        <ul className="flex flex-wrap gap-2">
          {recommendationQualities.map((quality) => (
            <li
              key={quality}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium"
            >
              <CheckIcon className="h-3 w-3 text-accent-3" />
              {quality}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {recommendations.map((rec, index) => (
          <Reveal
            key={rec.name}
            delay={(index % 2) * 100}
            className="card-surface flex flex-col p-6 sm:p-8"
          >
            <figure className="flex h-full flex-col">
              <span
                className="gradient-text font-serif text-6xl leading-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="mt-1 text-xl font-bold leading-snug tracking-tight">
                {rec.headline}
              </p>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {emphasise(rec.quote, rec.highlights)}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span
                  className={`icon-badge h-11 w-11 shrink-0 text-xs font-semibold ${
                    ["", "icon-badge-b", "icon-badge-c"][index % 3]
                  }`}
                  aria-hidden="true"
                >
                  {initials(rec.name)}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold leading-snug">{rec.name}</p>
                  <p className="text-xs text-muted">{rec.title}</p>
                  {rec.currentRole && <p className="text-xs text-muted">{rec.currentRole}</p>}
                  <p className="mt-1 font-mono text-[11px] text-muted">
                    {rec.relationship} · {rec.source}
                    {rec.date && ` · ${rec.date}`}
                  </p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm">
        <a
          href={`${profile.socials.linkedin}/details/recommendations/`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
        >
          View all recommendations on LinkedIn
          <ExternalLinkIcon className="h-3.5 w-3.5" />
        </a>
        <p className="text-muted">References available on request.</p>
      </Reveal>
    </section>
  );
}
