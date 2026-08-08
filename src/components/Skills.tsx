import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="eyebrow">02 · Skills</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <h3 className="text-sm font-semibold">{group.category}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
