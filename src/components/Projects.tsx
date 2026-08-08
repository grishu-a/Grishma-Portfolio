import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="eyebrow">03 · Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
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
        ))}
      </div>
    </section>
  );
}
