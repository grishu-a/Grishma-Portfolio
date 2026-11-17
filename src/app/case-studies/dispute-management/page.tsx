import type { Metadata } from "next";
import {
  CaseStudyShell,
  Challenges,
  CheckCards,
  Comparison,
  Highlight,
  Prose,
  Section,
  SkillChips,
  Sources,
  Steps,
} from "@/components/CaseStudy";
import DisputeFlow from "@/components/DisputeFlow";
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

export default function DisputeManagementCaseStudy() {
  return (
    <CaseStudyShell
      eyebrow="Case study · Fonepay"
      title="Dispute Management System"
      lead={
        <>
          Replacing fully manual dispute handling with a new, automated platform - and
          cutting resolution time by <span className="gradient-text font-bold">30%</span>.
        </>
      }
      facts={facts}
      image={{ src: "/projects/dispute.jpeg", alt: "Dispute Management System", position: "left" }}
    >
      <Section number="01 · The problem" title="Every dispute was handled by hand">
        <Prose>
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
        </Prose>
      </Section>

      <Section number="02 · My role" title="From initiation to deployment">
        <Prose>
          <p>
            The Dispute Management System was a completely new platform, and I led it through
            every stage - working across operations, engineering and QA, partner banks and
            wallets, and merchants.
          </p>
        </Prose>
        <Steps steps={steps} />
      </Section>

      <Section number="03 · The solution" title="What the platform automated">
        <p className="mb-5 text-sm text-muted">Switch between before and after to see what changed.</p>
        <DisputeFlow />
        <div className="mt-8">
          <CheckCards items={automation} />
        </div>
      </Section>

      <Section number="04 · Challenges" title="What made it hard">
        <Challenges items={challenges} />
      </Section>

      <Section number="05 · Outcome" title="Faster resolutions, far less manual work">
        <Highlight value="30%">
          faster dispute resolution - with cases created, routed and communicated
          automatically, and dashboards giving the team visibility they never had when
          everything was manual.
        </Highlight>
      </Section>

      <Section number="06 · Why it matters in Australia" title="The same problem Australian complaint rules address">
        <Prose>
          <p>
            In Australia, handling customer complaints well isn&apos;t optional. Under ASIC&apos;s
            Regulatory Guide 271, in effect since 5 October 2021, financial firms must record every
            complaint they receive in an effective system that tracks the progress of each one, and
            respond to standard complaints within 30 calendar days. Complaints that aren&apos;t
            resolved can be taken to the Australian Financial Complaints Authority (AFCA).
          </p>
          <p>
            The Dispute Management System I delivered at Fonepay was built around the same needs -
            the kind of complaint and dispute handling that Australian banks, fintechs and payment
            providers rely on to meet these obligations.
          </p>
        </Prose>
        <Comparison
          leftLabel="What I delivered at Fonepay"
          rightLabel="What Australian firms must do (ASIC RG 271)"
          rows={[
            {
              left: "Every dispute logged automatically as a case with a clear status",
              right: "Record all complaints received in an effective complaints system",
            },
            {
              left: "Case tracking, routing and dashboards showing open cases and progress",
              right: "Keep track of the progress of each complaint",
            },
            {
              left: "Automatic routing and notifications, cutting resolution time by 30%",
              right: "Respond to standard complaints within 30 calendar days",
            },
          ]}
        />
        <Sources
          items={[
            {
              label: "ASIC Regulatory Guide 271: Internal dispute resolution",
              href: "https://download.asic.gov.au/media/3olo5aq5/rg271-published-2-september-2021.pdf",
            },
            {
              label: "ASIC: Dispute resolution and AFCA",
              href: "https://asic.gov.au/regulatory-resources/financial-services/dispute-resolution/",
            },
          ]}
        />
      </Section>

      <Section number="07 · Skills demonstrated" title="What this project shows">
        <SkillChips skills={skills} />
      </Section>
    </CaseStudyShell>
  );
}
