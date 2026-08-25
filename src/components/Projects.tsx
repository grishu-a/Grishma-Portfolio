import Image from "next/image";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-24">
          <h2 className="eyebrow">03 · Projects</h2>
          <h3 className="mt-3 text-2xl font-bold tracking-tight">Selected Projects</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Product and fintech platforms I&apos;ve led end-to-end, from dispute
            resolution to cross-border payments.
          </p>
          <p className="mt-6 font-mono text-xs text-muted">
            {String(projects.length).padStart(2, "0")} projects
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={(index % 2) * 100}
              className="card-surface relative flex flex-col overflow-hidden p-6"
            >
              {project.image && (
                <>
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    aria-hidden="true"
                    className="object-cover opacity-[0.12] dark:opacity-[0.18]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/95 to-card/70" />
                </>
              )}
              <div className="relative flex flex-1 flex-col">
                <span
                  className={`icon-badge h-9 w-9 font-mono text-xs font-semibold ${
                    ["", "icon-badge-b", "icon-badge-c"][index % 3]
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-background px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
