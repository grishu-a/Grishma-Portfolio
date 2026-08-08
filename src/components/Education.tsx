import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="border-t border-border px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker text-accent">05 · Education</p>
        <div className="mt-8 grid gap-px overflow-hidden border border-border sm:grid-cols-2">
          {education.map((item) => (
            <div key={item.school} className="bg-card p-6 sm:p-8">
              <h3 className="text-xl font-black lowercase">{item.school}</h3>
              <p className="mt-2 text-sm text-muted">{item.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
