import type { ReactNode } from "react";
import { experience, projects } from "@/lib/data";
import CompanyLogo from "./CompanyLogo";
import ProjectImage from "./ProjectImage";
import Reveal from "./Reveal";

// Bold metrics and project names so skimmers catch the key facts.
const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const highlightPattern = new RegExp(
  `(\\d+(?:\\.\\d+)?(?:%|M\\+|\\+)|${projects
    .map((project) => escapeRegExp(project.title))
    .join("|")})`,
);

function highlight(text: string): ReactNode[] {
  return text
    .split(highlightPattern)
    .map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="font-semibold text-foreground">
          {part}
        </strong>
      ) : (
        part
      ),
    );
}

const FULL_DETAIL_ROLES = 2;

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <Reveal>
        <h2 className="eyebrow">03 · Experience</h2>
        <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Experience</h3>
      </Reveal>
      <div className="mt-10 space-y-8 border-l border-border pl-6">
        {experience.map((job, index) => (
          <Reveal
            key={`${job.company}-${job.role}`}
            delay={index * 100}
            className="relative -mx-3 rounded-xl px-3 py-2 transition-colors hover:bg-card"
          >
            <span className="absolute -left-[31px] top-3 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent ring-4 ring-accent/15" />
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                {job.logo && (
                  <CompanyLogo src={job.logo} alt={`${job.company} logo`} size={36} />
                )}
                <h3 className="font-semibold">
                  {job.role} · <span className="text-muted">{job.company}</span>
                </h3>
              </div>
              <span className="font-mono text-xs text-muted">{job.period}</span>
            </div>
            {index < FULL_DETAIL_ROLES || job.bullets.length === 1 ? (
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-muted">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{highlight(bullet)}</li>
                ))}
              </ul>
            ) : (
              <details className="group mt-2 text-[15px] leading-relaxed text-muted">
                <summary className="cursor-pointer list-none pl-5">
                  {highlight(job.bullets[0])}{" "}
                  {job.bullets.length > 1 && (
                    <span className="font-medium text-accent group-open:hidden">Show more</span>
                  )}
                </summary>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {job.bullets.slice(1).map((bullet) => (
                    <li key={bullet}>{highlight(bullet)}</li>
                  ))}
                </ul>
              </details>
            )}
            {job.photo && (
              <figure className="mt-4 max-w-md">
                <ProjectImage
                  src={job.photo.src}
                  title={job.photo.caption}
                  className="aspect-[1000/853] rounded-xl border border-border"
                />
                <figcaption className="mt-2 text-xs text-muted">{job.photo.caption}</figcaption>
              </figure>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
