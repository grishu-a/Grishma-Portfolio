import type { Metadata } from "next";
import Image from "next/image";
import {
  CaseStudyShell,
  Challenges,
  CheckCards,
  Prose,
  Section,
  SkillChips,
  Steps,
} from "@/components/CaseStudy";
import { profile, recommendations } from "@/lib/data";

export const metadata: Metadata = {
  title: `Fonepay Circle - Case study | ${profile.name}`,
  description:
    "How I led Fonepay Circle, a brand-new way to send, request and split money in Nepal using just a mobile number - similar to Australia's PayID - from initiation to deployment.",
};

const facts = [
  { label: "Role", value: "Led from initiation to deployment" },
  { label: "Company", value: "Fonepay, Nepal's leading payment network" },
  { label: "Worked with", value: "Design, engineering & QA, partner banks & wallets" },
  { label: "Outcome", value: "Higher transaction success rates and user adoption" },
];

const screens = [
  { src: "/hero/circle-2.webp", alt: "Send money to a mobile number", caption: "Send" },
  { src: "/hero/circle-4.webp", alt: "Request a payment", caption: "Request" },
  { src: "/hero/circle-3.webp", alt: "Split a bill across a group", caption: "Split" },
];

const steps = [
  {
    title: "Designed the user flows",
    body: "Shaped the send, request and split journeys with the design team, reviewing screens in Figma until each flow felt simple for everyday users.",
  },
  {
    title: "Wrote the requirements",
    body: "Turned the flows into requirements, user stories and acceptance criteria - including the edge cases that matter in payments, like a mistyped mobile number.",
  },
  {
    title: "Coordinated banks and wallets",
    body: "Worked with partner banks and wallets so their customers could send and receive through Circle, whichever institution they banked with.",
  },
  {
    title: "Delivered through to deployment",
    body: "Ran sprints with engineering and QA, coordinated UAT and took Circle through to deployment.",
  },
];

const features = [
  {
    title: "Send money by mobile number",
    body: "Pay anyone using just their mobile number - no bank account details needed.",
  },
  {
    title: "Request payments",
    body: "Ask someone to pay you, and keep track of pending requests in one place.",
  },
  {
    title: "Split bills",
    body: "Share an expense across a group, split equally or by custom amounts.",
  },
  {
    title: "Favourites",
    body: "Saved contacts for quick, repeat payments to the people you pay most.",
  },
];

const challenges = [
  {
    title: "Preventing wrong-recipient payments",
    body: "When money goes to a mobile number, a single mistyped digit can send it to the wrong person. The flows had to help users be sure they were paying the right person before any money moved.",
  },
  {
    title: "Working across many banks",
    body: "The sender and receiver could bank with different institutions, so send and request had to work across Fonepay's network of banks and wallets.",
  },
  {
    title: "Keeping it simple",
    body: "Requests and splits can quickly get complicated - equal versus custom amounts, pending requests, groups. Every flow had to stay simple enough for everyday users.",
  },
  {
    title: "Driving adoption",
    body: "Circle asked people to try a new way of paying friends and family, so it had to be easy enough that they would choose it over cash.",
  },
];

const outcomes = [
  {
    title: "Higher transaction success rates",
    body: "More payments between people completed successfully.",
  },
  {
    title: "Growing user adoption",
    body: "People took up Circle as a new, everyday way to pay friends and family.",
  },
];

const skills = [
  "0-to-1 product delivery",
  "User flow design (Figma)",
  "Requirements & edge cases",
  "P2P payments",
  "Bank & wallet coordination",
  "Agile delivery & UAT",
];

// Babul's LinkedIn recommendation names Fonepay Circle directly.
const teammate = recommendations.find((rec) => rec.name === "Babul Shrestha");

export default function FonepayCircleCaseStudy() {
  return (
    <CaseStudyShell
      eyebrow="Case study · Fonepay"
      title="Fonepay Circle"
      lead={
        <>
          A brand-new way to <span className="gradient-text font-bold">send, request and split</span>{" "}
          money in Nepal using just a mobile number - similar to Australia&apos;s PayID.
        </>
      }
      facts={facts}
      image={{ src: "/projects/fonepay-circle.jpg", alt: "Fonepay Circle app screens", position: "top" }}
    >
      <Section number="01 · The problem" title="Paying people you know was harder than it should be">
        <Prose>
          <p>
            Sending money to a friend usually meant knowing their bank details. And when a
            group shared a cost - a meal, a movie, a trip - working out who owed what and
            chasing people to pay it back happened outside the app, by message, in cash or
            from memory.
          </p>
          <p>
            Fonepay Circle set out to make paying the people you know as simple as knowing
            their mobile number.
          </p>
        </Prose>
      </Section>

      <Section number="02 · My role" title="A completely new product, from initiation to deployment">
        <Prose>
          <p>
            Circle was a brand-new, innovative product for Fonepay, and I led it through every
            stage - working with design, engineering and QA, and partner banks and wallets.
          </p>
        </Prose>
        <Steps steps={steps} />
      </Section>

      <Section number="03 · The product" title="What we built">
        <div className="mb-8 grid grid-cols-3 gap-3 sm:gap-5">
          {screens.map((screen) => (
            <figure key={screen.src}>
              <div className="relative aspect-[440/900] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  fill
                  sizes="(min-width: 768px) 230px, 30vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="mt-2 text-center font-mono text-xs text-muted">
                {screen.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <CheckCards items={features} />
      </Section>

      <Section number="04 · Challenges" title="What made it hard">
        <Challenges items={challenges} />
      </Section>

      <Section number="05 · Outcome" title="A new everyday way to pay">
        <CheckCards items={outcomes} />
        {teammate && (
          <figure className="mt-8 border-l-2 border-accent pl-5">
            <blockquote className="text-lg font-medium leading-snug">
              &ldquo;…took ownership of key deliverables, including Dispute Management and
              Fonepay Circle, one of Fonepay&apos;s prominent features.&rdquo;
            </blockquote>
            <figcaption className="mt-2 text-xs text-muted">
              {teammate.name} · {teammate.title} · LinkedIn recommendation
            </figcaption>
          </figure>
        )}
      </Section>

      <Section number="06 · Why it matters in Australia" title="The same problem PayID solves">
        <Prose>
          <p>
            Circle tackles the same problem as Australia&apos;s PayID: letting people pay each
            other with an identifier they already know, instead of bank details. The product
            questions I worked through - confirming the right recipient, working across many
            banks, and keeping the flow simple enough to beat cash - are the same ones that
            shape real-time payments here.
          </p>
        </Prose>
      </Section>

      <Section number="07 · Skills demonstrated" title="What this project shows">
        <SkillChips skills={skills} />
      </Section>
    </CaseStudyShell>
  );
}
