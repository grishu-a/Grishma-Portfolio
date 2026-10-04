import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { SubpageHeader } from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import { ArrowRightIcon } from "@/components/icons";
import { insights, profile } from "@/lib/data";

const article = insights.find((item) => item.slug === "nepal-qr-lessons-for-australia")!;
const title = article.title;
const dek =
  "Nepal's QR payments grew tenfold in three years. Australians barely use QR at all. Reading the data from both central banks alongside my time building payment products at Fonepay, here's what I think the difference actually tells us.";

export const metadata: Metadata = {
  title: `${title} | ${profile.name}`,
  description: dek,
  openGraph: { type: "article", title, description: dek },
};

const stats = [
  { value: "10×", label: "Growth in Nepal's QR payment value, FY2021/22 to FY2024/25", ref: 1 },
  { value: "2.9M", label: "Merchants accepting QR in Nepal", ref: 1 },
  { value: "10%", label: "Australians who paid by QR code in the past year", ref: 2 },
  { value: "38M+", label: "PayIDs registered in Australia", ref: 3 },
];

const comparison = [
  {
    label: "Everyday default",
    nepal: "Scan a QR code - the most widely preferred payment instrument (NRB)",
    australia: "Tap a card - cards are 73% of consumer payments (RBA)",
  },
  {
    label: "Scale",
    nepal: "~326 million QR payments worth NPR 958 billion in FY2024/25",
    australia: "~$8.4 billion a day across the New Payments Platform",
  },
  {
    label: "Paying people",
    nepal: "Mobile-number payments such as Fonepay Circle",
    australia: "PayID: ~50% of people used it in the past year, mostly to pay family and friends",
  },
  {
    label: "Network",
    nepal: "Fonepay alone connects 60+ banks, institutions and wallets",
    australia: "NPP connects 100+ banks, institutions and fintechs",
  },
];

const sources = [
  {
    label: "Nepal Rastra Bank - Payment Systems Oversight Report 2024/25",
    href: "https://www.nrb.org.np/contents/uploads/2026/08/Payment-Oversight-Report-2024-25-1.pdf",
  },
  {
    label: "Reserve Bank of Australia - Consumer Payment Behaviour in Australia (Bulletin, May 2026)",
    href: "https://www.rba.gov.au/publications/bulletin/2026/may/consumer-payment-behaviour-in-australia.html",
  },
  {
    label: "Australian Payments Plus - New Payments Platform (figures as at July 2026)",
    href: "https://www.auspayplus.com.au/solutions/npp",
  },
  {
    label: "Australian Banking Association - Confirmation of Payee milestones (March 2026)",
    href: "https://www.ausbanking.org.au/banks-hit-major-milestones-as-scam-fighting-technology-stops-thousands-of-risky-transfers/",
  },
  {
    label: "ACCC - Annual scam losses exceed $2 billion (March 2026)",
    href: "https://www.accc.gov.au/media-release/continued-action-critical-to-combat-fraud-as-annual-scam-losses-exceed-2-billion",
  },
  {
    label: "Fonepay - network figures and QR market share (April 2026)",
    href: "https://fonepay.com/blogs/fonepay-welcomes-himalayan-bank-to-its-national-payment-network",
  },
];

function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-12 text-2xl font-bold tracking-tight">{children}</h2>;
}

function Ref({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#source-${n}`} className="ml-0.5 text-[10px] font-semibold text-accent hover:underline">
        [{n}]
      </a>
    </sup>
  );
}

function CaseLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-medium text-accent hover:underline">
      {children}
    </Link>
  );
}

export default function Article() {
  return (
    <>
      <SubpageHeader backHref="/" />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24 pt-14">
        <p className="eyebrow">Insights · Payments</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{dek}</p>
        <p className="mt-6 font-mono text-xs text-muted">
          {profile.name} · October 2026 · 5 min read
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-border py-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-xs text-muted">
                {stat.label}
                <Ref n={stat.ref} />
              </dt>
              <dd className="gradient-text text-3xl font-bold">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <article className="mt-10 space-y-5 text-base leading-relaxed text-foreground/85">
          <p>
            In Nepal, the most common way to pay a shop is to scan a QR code. According to Nepal
            Rastra Bank, QR payments reached NPR 958 billion in FY2024/25 - up from NPR 94.5 billion
            three years earlier - and grew 92.5% by volume in a single year.
            <Ref n={1} /> Fonepay, where I worked as a Technical Product Coordinator-Lead, reports
            around 96% of the country&apos;s merchant QR payments.
            <Ref n={6} />
          </p>
          <p>
            In Australia, the picture is almost the reverse. Cards make up 73% of consumer
            payments, and only 10% of Australians used a QR code to pay in the past year.
            <Ref n={2} /> After working in one system and now living in the other, I don&apos;t
            think either country is &ldquo;ahead&rdquo;. The data suggests they solved different
            problems first.
          </p>

          <H2>Two systems side by side</H2>
          <div className="not-prose overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-card">
                <tr>
                  <th className="p-3 font-semibold" scope="col" />
                  <th className="p-3 font-semibold" scope="col">Nepal</th>
                  <th className="p-3 font-semibold" scope="col">Australia</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-t border-border align-top">
                    <th scope="row" className="p-3 font-medium text-muted">{row.label}</th>
                    <td className="p-3">{row.nepal}</td>
                    <td className="p-3">{row.australia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted">Sources: [1], [2], [3], [6].</p>

          <H2>Why QR won in Nepal - and why it hasn&apos;t in Australia</H2>
          <p>
            Nepal Rastra Bank describes QR as &ldquo;one of the cheapest and easiest payment
            platforms&rdquo;, and around 2.9 million merchants now accept it.<Ref n={1} /> A national
            QR standard, introduced in 2021, brought uniformity to codes issued by different banks
            and wallets.<Ref n={1} />
            For a merchant, a printed code is a far lower barrier than a card terminal.
          </p>
          <p>
            Australians already had a fast option at the counter. The Reserve Bank found
            consumers see QR as less convenient than tap-and-go.<Ref n={2} /> For buying a coffee,
            that&apos;s a reasonable judgement - and a useful reminder that payment adoption follows
            convenience, not novelty.
          </p>

          <H2>Where the two systems meet: paying people</H2>
          <p>
            The more interesting overlap isn&apos;t at the shop counter. Australia has more than 38
            million PayIDs registered,<Ref n={3} /> and around half of Australians used PayID in
            the past year - most often to pay family and friends.<Ref n={2} /> PayID still made up
            only around 15% of account-to-account payments, so there is plenty of room to grow.
            <Ref n={2} />
          </p>
          <p>
            This is the problem <CaseLink href="/case-studies/fonepay-circle">Fonepay Circle</CaseLink>{" "}
            set out to solve in Nepal: send, request and split money using just a mobile number. I
            led it from initiation to deployment. Building it showed me that sending is only part of
            the job - requesting money and splitting shared costs are journeys in their own right,
            and each one needs to stay simple enough to beat cash.
          </p>

          <H2>Trust is the real product</H2>
          <p>
            Real-time payments have no &ldquo;undo&rdquo;. Australians lost $2.18 billion to scams
            in 2025, according to the ACCC.<Ref n={5} /> Since July 2025, Australian banks have
            rolled out Confirmation of Payee, which checks the account name before money moves.
            It has been used more than 100 million times, and one bank reported over 450,000
            payments abandoned after a &ldquo;no match&rdquo; result.<Ref n={4} />
          </p>
          <p>
            That matches what I saw from the inside. With Fonepay Circle, preventing payments to
            the wrong person was one of the hardest problems to design for, because a single
            mistyped digit could send money to a stranger. And when payments did go wrong, every
            dispute was handled manually until we built a{" "}
            <CaseLink href="/case-studies/dispute-management">new dispute management platform</CaseLink>{" "}
            that automated case tracking, routing and notifications - cutting resolution time by
            30%. Prevention and resolution are two halves of the same trust problem.
          </p>

          <H2>Consistency across institutions is the hard part</H2>
          <p>
            Nepal&apos;s QR growth was built on a common national standard across institutions.
            <Ref n={1} /> Australia&apos;s New Payments Platform already connects more than 100
            banks, institutions and fintechs.<Ref n={3} /> In both cases, a customer shouldn&apos;t
            need to know which bank the other person uses. Working across many banks and wallets
            was one of the main challenges on Fonepay Circle, and it&apos;s where much of the
            coordination effort in payments delivery goes.
          </p>

          <H2>Cross-border is a convenience problem too</H2>
          <p>
            Nepal Rastra Bank notes that cross-border QR acceptance - including UPI, Alipay+,
            UnionPay and WeChat - has &ldquo;expanded payment options for international
            tourists&rdquo;.<Ref n={1} /> I led Fonepay&apos;s{" "}
            <CaseLink href="/case-studies/alipay-plus">Alipay+ integration</CaseLink> from
            initiation to deployment, letting visitors from 11+ countries pay at more than 1.7
            million merchants with the wallets they already use. The lesson was simple: travellers
            don&apos;t want to carry cash or download a new app.
          </p>

          <H2>What the comparison can&apos;t tell us</H2>
          <p>
            These figures aren&apos;t like-for-like. Nepal&apos;s numbers count transactions on
            payment systems; Australia&apos;s QR and PayID figures come from a consumer survey. The
            two countries also differ hugely in income, card ownership and existing infrastructure.
            So I don&apos;t read this as a case for Australia copying Nepal&apos;s QR boom - tap-and-go
            works well at the counter.
          </p>

          <H2>Where that leaves me</H2>
          <p>
            What the data does show is that the parts of payments around the counter - paying
            people, requesting money, splitting costs, crossing borders and keeping it all safe -
            are still evolving in both countries. That&apos;s where I&apos;ve spent my career so far,
            and it&apos;s the work I want to keep doing in Australia.
          </p>
        </article>

        <aside className="mt-12 rounded-2xl border border-border bg-card p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Sources</p>
          <ol className="mt-3 space-y-2 text-sm">
            {sources.map((source, index) => (
              <li key={source.href} id={`source-${index + 1}`} className="flex gap-2 scroll-mt-24">
                <span className="font-mono text-xs text-muted">[{index + 1}]</span>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-muted">
            Views are my own and don&apos;t represent Fonepay or any other organisation.
          </p>
        </aside>

        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-border pt-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            See my projects
          </Link>
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent("Your payments article")}`}
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
