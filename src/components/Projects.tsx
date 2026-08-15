import { projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <h2 className="eyebrow">03 · Projects</h2>
      </Reveal>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={(index % 2) * 100}
            className="card-surface flex flex-col p-6"
          >
            <span className="icon-badge h-9 w-9 font-mono text-xs font-semibold">
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
