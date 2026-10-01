import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `Dispute Management System - Case study | ${profile.name}`,
  description:
    "How I led a new dispute management platform at Fonepay from initiation to deployment, replacing fully manual dispute handling with automation and cutting resolution time by 30%.",
};

const facts = [
  { label: "Role", value: "Led from initiation to deployment" },
  { label: "Company", value: "Fonepay, Nepal's leading payment network" },
  { label: "Worked with", value: "Operations, engineering & QA, partner banks & wallets, merchants" },
  { label: "Outcome", value: "30% faster dispute resolution" },
];

const steps = [
  {
    title: "Mapped the manual process",
    body: "Documented how customer and merchant disputes were actually being handled, step by step, to see where the time and effort went.",
  },
  {
    title: "Wrote the requirements",
    body: "Turned the target process into requirements, user stories and acceptance criteria the engineering team could build from.",
  },
  {
    title: "Ran delivery",
    body: "Managed the backlog and sprints, tracked progress and kept operations, engineering and QA aligned through the build.",
  },
  {
    title: "Coordinated UAT and go-live",
    body: "Ran user acceptance testing with the operations team and coordinated the release through to deployment.",
  },
];

const automation = [
  {
    title: "Automatic case creation & tracking",
    body: "Every dispute logged as a case with a clear status, instead of being tracked by hand.",
  },
  {
    title: "Routing to the right team",
    body: "Cases assigned automatically to the team or institution responsible for resolving them.",
  },
  {
    title: "Automatic notifications",
    body: "Customers, merchants and internal teams kept updated as a case moved forward.",
  },
  {
    title: "Reports & dashboards",
    body: "Visibility into open cases and resolution progress, so bottlenecks could be spotted and managed.",
  },
];

const challenges = [
  {
    title: "Agreeing on one workflow",
    body: "Different teams had their own ways of handling disputes. Mapping the existing process gave everyone a shared picture to agree a single end-to-end flow.",
  },
  {
    title: "Deciding what to automate",
    body: "Not every step could be automated at once, so the scope had to be prioritised with the operations team.",
  },
  {
    title: "Integrating with other systems",
    body: "Resolving a dispute depends on transaction data and on partner banks and wallets, so the platform had to work across systems, not in isolation.",
  },
  {
    title: "Adoption by the operations team",
    body: "The people who had handled disputes manually needed to trust and switch to the new platform - which is why UAT with them was central to go-live.",
  },
];

const skills = [
  "End-to-end delivery",
  "Process mapping (BPMN)",
  "Requirements & user stories",
  "Agile / Scrum delivery",
  "UAT & release management",
  "Stakeholder management",
  "Automation design",
];

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16">
      <p className="eyebrow">{number}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function DisputeManagementCaseStudy() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            Back to portfolio
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24 pt-14">
        <p className="eyebrow">Case study · Fonepay</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Dispute Management System
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Replacing fully manual dispute handling with a new, automated platform - and
          cutting resolution time by <span className="gradient-text font-bold">30%</span>.
        </p>

        <dl className="mt-10 grid gap-x-8 gap-y-5 border-y border-border py-6 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
          <Image
            src="/projects/dispute.jpeg"
            alt="Dispute Management System"
            fill
            priority
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover"
          />
        </div>

        <Section number="01 · The problem" title="Every dispute was handled by hand">
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p>
              Fonepay&apos;s network handles over 2 million payments a day. When something
              goes wrong - money leaves a customer&apos;s account but doesn&apos;t reach the
              recipient, or a payment goes to the wrong person - customers and merchants raise
              a dispute.
            </p>
            <p>
              Every one of those disputes, from customers and merchants alike, was handled
              manually. That meant heavy, repetitive effort for the operations team, limited
              visibility into where each case stood, and slower resolutions for the people
              waiting on their money.
            </p>
          </div>
        </Section>

        <Section number="02 · My role" title="From initiation to deployment">
          <p className="text-base leading-relaxed text-muted">
            The Dispute Management System was a completely new platform, and I led it through
            every stage - working across operations, engineering and QA, partner banks and
            wallets, and merchants.
          </p>
          <ol className="mt-8 space-y-6 border-l border-border pl-6">
            {steps.map((step, index) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[37px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-accent font-mono text-[10px] font-bold text-accent-foreground">
                  {index + 1}
                </span>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section number="03 · The solution" title="What the platform automated">
          <div className="grid gap-4 sm:grid-cols-2">
            {automation.map((item) => (
              <div key={item.title} className="card-surface p-5">
                <h3 className="flex items-start gap-2 font-semibold">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-3" />
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section number="04 · Challenges" title="What made it hard">
          <div className="space-y-5">
            {challenges.map((item) => (
              <div key={item.title} className="border-l-2 border-accent pl-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section number="05 · Outcome" title="Faster resolutions, far less manual work">
          <div className="card-surface flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
            <p className="gradient-text text-5xl font-bold">30%</p>
            <p className="text-base leading-relaxed text-muted">
              faster dispute resolution - with cases created, routed and communicated
              automatically, and dashboards giving the team visibility they never had when
              everything was manual.
            </p>
          </div>
        </Section>

        <Section number="06 · Skills demonstrated" title="What this project shows">
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/80"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Section>

        <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-border pt-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            More projects
          </Link>
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent("Opportunity for Grishma")}`}
            className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-accent-foreground"
          >
            Get in touch
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
