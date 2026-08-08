import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="eyebrow">05 · Education</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {education.map((item) => (
          <div
            key={item.school}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <h3 className="font-semibold">{item.school}</h3>
            <p className="mt-1 text-sm text-muted">{item.degree}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
