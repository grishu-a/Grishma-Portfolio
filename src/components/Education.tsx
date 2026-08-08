import { education } from "@/lib/data";
import { GraduationCapIcon } from "./icons";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="eyebrow">05 · Education</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {education.map((item) => (
          <div key={item.school} className="card-surface flex items-start gap-4 p-5">
            <span className="icon-badge h-10 w-10">
              <GraduationCapIcon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-semibold">{item.school}</h3>
              <p className="mt-1 text-sm text-muted">{item.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
