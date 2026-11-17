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
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `Alipay+ cross-border payments - Case study | ${profile.name}`,
  description:
    "How I led Fonepay's Alipay+ integration from initiation to deployment, letting international visitors from 11+ countries pay at 1.7M+ Nepali merchants with their home e-wallets.",
};

const facts = [
  { label: "Role", value: "Led from initiation to deployment" },
  { label: "Company", value: "Fonepay, Nepal's leading payment network" },
  {
    label: "Worked with",
    value: "Alipay+ (Ant International), engineering & QA, banks, settlement & finance, compliance",
  },
  { label: "Reach at launch", value: "11+ countries · 1.7M+ Fonepay QR merchants" },
];

const steps = [
  {
    title: "Requirements & integration specs",
    body: "Mapped Alipay+'s integration specifications onto Fonepay's systems and turned them into requirements and user stories for the engineering team.",
  },
  {
    title: "Partner coordination",
    body: "Coordinated between the Alipay+ team, partner banks, settlement and finance, and compliance - keeping an international integration moving across organisations.",
  },
  {
    title: "Delivery, testing & UAT",
    body: "Ran sprints with engineering and QA, and coordinated testing with partners to make sure payments worked end to end.",
  },
  {
    title: "Deployment",
    body: "Took the integration through to deployment, ready for the nationwide launch.",
  },
];

const outcomes = [
  {
    title: "Pay with the wallet you already use",
    body: "Visitors can pay with home e-wallets such as Alipay, AlipayHK, KakaoPay, GCash, Touch 'n Go and TrueMoney.",
  },
  {
    title: "No new hardware for merchants",
    body: "Payments are accepted through merchants' existing Fonepay QR codes, so 1.7M+ merchants could accept international wallets.",
  },
  {
    title: "Less cash, fewer currency exchanges",
    body: "Tourists no longer need to carry cash or find a money changer to pay for everyday purchases.",
  },
  {
    title: "New revenue for local businesses",
    body: "Merchants can sell to international visitors who would otherwise have walked away without a local payment method.",
  },
];

const challenges = [
  {
    title: "Working across organisations and time zones",
    body: "An international partner, banks, settlement and finance, compliance and engineering all had a part to play. Keeping decisions moving meant constant coordination across teams that didn't share an office - or a time zone.",
  },
  {
    title: "Testing with many different wallets",
    body: "Alipay+ connects many wallets from different countries, each used by real travellers. Payments had to work reliably for every one of them, which made testing broad and detailed.",
  },
];

const skills = [
  "Cross-border payments",
  "Partner & integration management",
  "Requirements & integration specs",
  "Agile delivery",
  "UAT with external partners",
  "Stakeholder management incl. compliance",
];

export default function AlipayPlusCaseStudy() {
  return (
    <CaseStudyShell
      eyebrow="Case study · Fonepay"
      title="Alipay+ cross-border payments"
      lead={
        <>
          Letting visitors from <span className="gradient-text font-bold">11+ countries</span>{" "}
          pay at <span className="gradient-text font-bold">1.7M+</span> Nepali merchants with
          the e-wallets they already use at home.
        </>
      }
      facts={facts}
      image={{ src: "/projects/alipay.png", alt: "Alipay+ accepted via Fonepay QR", position: "top" }}
    >
      <Section number="01 · The problem" title="Tourists couldn't pay the way they do at home">
        <Prose>
          <p>
            Nepal welcomes visitors from across Asia and beyond, and many of them pay for
            almost everything with a mobile wallet at home. In Nepal, those wallets
            didn&apos;t work - visitors had to carry cash or hunt for a currency exchange.
          </p>
          <p>
            For Nepali merchants, that meant friction at the till and missed sales to
            visitors who had no easy way to pay.
          </p>
        </Prose>
      </Section>

      <Section number="02 · My role" title="From initiation to deployment">
        <Prose>
          <p>
            I led Fonepay&apos;s Alipay+ integration from initiation through to deployment,
            working with the Alipay+ (Ant International) team, engineering and QA, banks,
            settlement and finance, and compliance - including requirements from Nepal Rastra
            Bank, the central bank.
          </p>
        </Prose>
        <Steps steps={steps} />
      </Section>

      <Section number="03 · The solution" title="What it made possible">
        <CheckCards items={outcomes} />
      </Section>

      <Section number="04 · Challenges" title="What made it hard">
        <Challenges items={challenges} />
      </Section>

      <Section number="05 · Outcome" title="Launched nationwide">
        <Highlight value="1.7M+">
          Fonepay QR merchants able to accept payments from international wallets across 11+
          countries. Alipay+ on Fonepay launched publicly on 28 August 2025 in Kathmandu,
          with Nepal Rastra Bank, Alipay+ and the Nepal Tourism Board in attendance.
        </Highlight>
        <p className="mt-4 text-xs text-muted">
          Launch details:{" "}
          <a
            href="https://kathmandupost.com/money/2025/08/30/fonepay-partners-with-alipay-to-enable-cross-border-qr-payments-in-nepal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            The Kathmandu Post
          </a>
        </p>
      </Section>

      <Section number="06 · Why it matters in Australia" title="The same opportunity Australian merchants have">
        <Prose>
          <p>
            Australian merchants face the same opportunity from the other side. Payment providers
            such as ANZ Worldline let Australian businesses accept Alipay+ and WeChat Pay, making it
            easier for overseas-born residents and short-term visitors - such as tourists and
            international students - to pay with the wallets they already use.
          </p>
          <p>
            That&apos;s the problem I delivered for in Nepal: connecting international wallets to
            local merchants, coordinating a global partner with banks, settlement, compliance and
            engineering, and testing across many wallets. ANZ Worldline&apos;s merchant guide even
            sets out an Alipay wallet dispute handling process - where cross-border payments and
            dispute management meet, two areas I&apos;ve delivered products in.
          </p>
        </Prose>
        <Comparison
          leftLabel="What I delivered in Nepal"
          rightLabel="The same need in Australia"
          rows={[
            {
              left: "Visitors from 11+ countries paying with their home e-wallets",
              right: "Tourists and international students paying with Alipay+ and WeChat Pay",
            },
            {
              left: "Acceptance across 1.7M+ existing Fonepay QR merchants",
              right: "Merchants accepting Alipay+ through providers such as ANZ Worldline",
            },
            {
              left: "Coordinating Alipay+, banks, settlement, compliance and engineering",
              right: "Partner, acquirer and compliance coordination needed to offer international wallets",
            },
          ]}
        />
        <Sources
          items={[
            {
              label: "ANZ Worldline: Alipay+ and WeChat Pay merchant information guide",
              href: "https://anzworldline.com.au/content/dam/anzworldline/docs/200043402-br-alipaypluswechatpay-informationguide-aus-en.pdf",
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
