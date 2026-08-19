import { experience } from "@/lib/data";
import CompanyLogo from "./CompanyLogo";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <Reveal>
        <h2 className="eyebrow">04 · Experience</h2>
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
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
