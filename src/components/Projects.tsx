import Link from "next/link";
import { projects } from "@/lib/data";
import { ArrowRightIcon } from "./icons";
import ProjectImage from "./ProjectImage";
import Reveal from "./Reveal";

const FEATURED_COUNT = 3;
const badgeVariants = ["", "icon-badge-b", "icon-badge-c"];

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Projects() {
  const featured = projects.slice(0, FEATURED_COUNT);
  const more = projects.slice(FEATURED_COUNT);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="eyebrow">02 · Projects</h2>
          <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Selected Projects
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Product and fintech platforms I&apos;ve led from initiation to deployment,
            from dispute resolution to cross-border payments.
          </p>
        </div>
        <p className="font-mono text-xs text-muted">
          {String(projects.length).padStart(2, "0")} projects
        </p>
      </Reveal>

      <div className="mt-10 space-y-8">
        {featured.map((project, index) => (
          <Reveal
            key={project.title}
            className={`card-surface flex flex-col overflow-hidden lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {project.screens ? (
              <div className="grid grid-cols-3 items-center gap-3 bg-gradient-to-br from-red-50 to-rose-100 p-5 sm:gap-4 sm:p-6 lg:w-[46%] lg:shrink-0 dark:from-red-950/40 dark:to-rose-900/30">
                {project.screens.map((screen) => (
                  <figure key={screen.src} className="flex flex-col items-center gap-2">
                    <ProjectImage
                      src={screen.src}
                      title={`${project.title} - ${screen.label}`}
                      position="top"
                      className="aspect-[440/900] rounded-xl shadow-md ring-1 ring-black/5"
                    />
                    <figcaption className="font-mono text-[11px] text-muted">{screen.label}</figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              project.image && (
                <div className="lg:w-[46%] lg:shrink-0">
                  <ProjectImage
                    src={project.image}
                    title={project.title}
                    position={project.imagePosition}
                    className="h-56 sm:h-64 lg:h-full lg:min-h-[320px]"
                  />
                </div>
              )
            )}
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span
                  className={`icon-badge h-9 w-9 font-mono text-xs font-semibold ${badgeVariants[index % 3]}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-muted">
                  Featured
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight">{project.title}</h3>
              {project.role && (
                <p className="mt-1 font-mono text-xs text-muted">{project.role}</p>
              )}
              {project.impact && (
                <p className="gradient-text mt-4 text-xl font-bold">{project.impact}</p>
              )}
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                {project.description}
              </p>
              <Tags tags={project.tags} />
              {project.caseStudy && (
                <Link
                  href={project.caseStudy}
                  className="btn-primary group mt-6 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Read case study
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {more.length > 0 && (
        <>
          <Reveal>
            <h4 className="mt-14 font-mono text-xs uppercase tracking-widest text-muted">
              More projects
            </h4>
          </Reveal>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((project, index) => (
              <Reveal
                key={project.title}
                delay={index * 100}
                className="card-surface flex flex-col overflow-hidden"
              >
                {/* Every card gets the same header height so the row lines up. */}
                {project.image ? (
                  <ProjectImage
                    src={project.image}
                    title={project.title}
                    position={project.imagePosition}
                    className="h-28"
                  />
                ) : (
                  <div
                    className={`icon-badge flex h-28 w-full items-end rounded-none p-5 ${
                      badgeVariants[(index + FEATURED_COUNT) % 3]
                    }`}
                    aria-hidden="true"
                  >
                    <span className="font-mono text-4xl font-bold opacity-40">
                      {String(index + FEATURED_COUNT + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  {project.image && (
                    <span
                      className={`icon-badge mb-3 h-8 w-8 font-mono text-[11px] font-semibold ${
                        badgeVariants[(index + FEATURED_COUNT) % 3]
                      }`}
                    >
                      {String(index + FEATURED_COUNT + 1).padStart(2, "0")}
                    </span>
                  )}
                  <h3 className="font-semibold">{project.title}</h3>
                  {project.role && (
                    <p className="mt-1 font-mono text-[11px] text-muted">{project.role}</p>
                  )}
                  <p className="mt-2 flex-1 text-sm text-muted">{project.description}</p>
                  <Tags tags={project.tags} />
                </div>
              </Reveal>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
