import type { ComponentType } from "react";
import { skills } from "@/lib/data";
import { BankIcon, BriefcaseIcon, CheckIcon, UsersIcon, WrenchIcon } from "./icons";
import Reveal from "./Reveal";

const icons: Record<string, ComponentType<{ className?: string }>> = {
  "Product & Delivery": BriefcaseIcon,
  "Fintech & Payments": BankIcon,
  "Leadership & Communication": UsersIcon,
  "Tools & Technical": WrenchIcon,
};

const badgeVariants = ["", "icon-badge-b", "icon-badge-c"];

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/80 transition-colors hover:border-accent hover:text-accent"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Proof({ text }: { text: string }) {
  return (
    <p className="flex items-start gap-1.5 text-xs text-muted">
      <CheckIcon className="mt-px h-3.5 w-3.5 shrink-0 text-accent-3" />
      <span>
        <span className="font-semibold text-foreground/80">Proven in:</span> {text}
      </span>
    </p>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <Reveal>
        <h2 className="eyebrow">02 · Skills</h2>
        <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Skills &amp; Expertise
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          What I bring to a delivery team, and where I&apos;ve put it to work.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {skills.map((group, index) => {
          const Icon = icons[group.category] ?? BriefcaseIcon;
          const isTools = "groups" in group && group.groups;
          return (
            <Reveal
              key={group.category}
              delay={(index % 3) * 100}
              className={`card-surface flex flex-col gap-4 p-6 ${isTools ? "lg:col-span-3" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className={`icon-badge h-10 w-10 ${badgeVariants[index % 3]}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold">{group.category}</h3>
              </div>
              {"items" in group && group.items && (
                <div className="flex-1">
                  <Chips items={group.items} />
                </div>
              )}
              {"groups" in group && group.groups && (
                <div className="grid gap-5 sm:grid-cols-3">
                  {group.groups.map((sub) => (
                    <div key={sub.label}>
                      <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted">
                        {sub.label}
                      </p>
                      <Chips items={sub.items} />
                    </div>
                  ))}
                </div>
              )}
              <div className="border-t border-border pt-3">
                <Proof text={group.proof} />
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
