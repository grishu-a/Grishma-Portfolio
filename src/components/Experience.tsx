import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-card px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker text-accent">04 · Experience</p>
        <div className="mt-8 divide-y divide-border border-t border-border">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.role}`}
              className="grid gap-3 py-8 sm:grid-cols-[1fr_2fr] sm:gap-8"
            >
              <div>
                <h3 className="text-xl font-black lowercase">{job.role}</h3>
                <p className="mt-1 text-sm text-accent">{job.company}</p>
                <p className="kicker mt-2 text-muted">{job.period}</p>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-muted">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="border-l-2 border-border pl-4">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
