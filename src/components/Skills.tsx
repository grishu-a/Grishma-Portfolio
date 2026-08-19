import type { ComponentType } from "react";
import { skills } from "@/lib/data";
import { BankIcon, BriefcaseIcon, WrenchIcon } from "./icons";
import Reveal from "./Reveal";

const icons: Record<string, ComponentType<{ className?: string }>> = {
  "Product & Delivery": BriefcaseIcon,
  Fintech: BankIcon,
  "Tools & Systems": WrenchIcon,
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <Reveal>
        <h2 className="eyebrow">02 · Skills</h2>
        <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Skills &amp; Expertise
        </h3>
      </Reveal>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => {
          const Icon = icons[group.category] ?? BriefcaseIcon;
          return (
            <Reveal
              key={group.category}
              delay={index * 100}
              className="card-surface p-5"
            >
              <span className="icon-badge h-10 w-10">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold">{group.category}</h3>
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
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
