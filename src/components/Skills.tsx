import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-card px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker text-accent">02 · Skills</p>
        <div className="mt-8 grid gap-px overflow-hidden border border-border sm:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="bg-background p-6 sm:p-8">
              <h3 className="text-xl font-black lowercase">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-border px-3 py-1 text-xs text-muted"
                  >
                    {item}
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
