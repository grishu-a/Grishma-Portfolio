import { profile, recommendations } from "@/lib/data";
import { ExternalLinkIcon } from "./icons";
import Reveal from "./Reveal";

function initials(name: string) {
  const parts = name.split(" ");
  return `${parts[0][0]}${parts[parts.length - 1][0]}`;
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
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {recommendations.map((rec, index) => (
          <Reveal
            key={rec.name}
            delay={(index % 2) * 100}
            className="card-surface flex flex-col p-6"
          >
            <figure className="flex h-full flex-col">
              <span
                className="gradient-text font-serif text-5xl leading-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-sm leading-relaxed">
                {rec.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span
                  className={`icon-badge h-10 w-10 shrink-0 text-xs font-semibold ${
                    ["", "icon-badge-b", "icon-badge-c"][index % 3]
                  }`}
                  aria-hidden="true"
                >
                  {initials(rec.name)}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold leading-snug">{rec.name}</p>
                  <p className="text-xs text-muted">{rec.title}</p>
                  <p className="mt-0.5 font-mono text-[11px] text-muted">
                    {rec.relationship} · {rec.source}
                  </p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-6">
        <a
          href={`${profile.socials.linkedin}/details/recommendations/`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          View all recommendations on LinkedIn
          <ExternalLinkIcon className="h-3.5 w-3.5" />
        </a>
      </Reveal>
    </section>
  );
}
