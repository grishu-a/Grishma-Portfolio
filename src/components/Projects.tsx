import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker text-accent">03 · Projects</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group flex flex-col border border-border p-6 transition-colors hover:border-accent sm:p-8"
            >
              <span className="kicker text-muted group-hover:text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-2xl font-black lowercase">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
