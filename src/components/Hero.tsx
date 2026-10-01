import Link from "next/link";
import { profile } from "@/lib/data";
import CompanyLogo from "./CompanyLogo";
import CountUp from "./CountUp";
import HeroVisual from "./HeroVisual";
import { ArrowRightIcon } from "./icons";
import Reveal from "./Reveal";

const highlights = [
  { value: "20M+", label: "Customers on the Fonepay network" },
  { value: "1.7M+", label: "Merchants reached via Alipay+" },
  { value: "11+", label: "Countries connected" },
  { value: "30%", label: "Faster dispute resolution" },
];

const companies = [
  { name: "Fonepay", logo: "/logos/fonepay.jpg" },
  { name: "Alipay+" },
  { name: "Macquarie University", logo: "/logos/macquarie.png" },
  { name: "Neosoftware", logo: "/logos/neosoftware.png" },
];

const [primaryRole, secondaryRole] = profile.role.split(" | ");

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="blob -top-24 -left-24 h-72 w-72 bg-accent"
        aria-hidden="true"
      />
      <div
        className="blob -top-10 right-0 h-64 w-64 bg-accent-2 [animation-delay:2s]"
        aria-hidden="true"
      />
      <div
        className="blob top-32 left-1/3 h-56 w-56 bg-accent-3 [animation-delay:5s]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Reveal className="flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to Product & Project roles in Sydney
            </Reveal>
            <Reveal delay={80}>
              <p className="eyebrow mt-6">Hi, I&apos;m {profile.name.split(" ")[0]}</p>
            </Reveal>
            <Reveal delay={140}>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                {primaryRole}
                {secondaryRole && (
                  <>
                    <br />
                    <span className="gradient-text">{secondaryRole}</span>
                  </>
                )}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-lg text-muted">{profile.tagline}</p>
            </Reveal>
            <Reveal delay={260} className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="btn-primary group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                View my work
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              {profile.resumeUrl ? (
                <Link
                  href={profile.resumeUrl}
                  className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
                >
                  Download résumé
                </Link>
              ) : (
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
                >
                  View LinkedIn
                </a>
              )}
            </Reveal>
          </div>
          <Reveal delay={200} className="hidden lg:block">
            <HeroVisual />
          </Reveal>
        </div>
        <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal key={item.label} delay={320 + index * 80}>
              <dt className="sr-only">{item.label}</dt>
              <dd className="gradient-text text-3xl font-bold tabular-nums sm:text-4xl">
                <CountUp value={item.value} />
              </dd>
              <p className="mt-1 text-xs text-muted">{item.label}</p>
            </Reveal>
          ))}
        </dl>
        <Reveal delay={500} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            Experience across
          </span>
          {companies.map((company) => (
            <span
              key={company.name}
              className="flex items-center gap-2 text-sm font-semibold text-muted grayscale transition hover:text-foreground hover:grayscale-0"
            >
              {company.logo ? (
                <CompanyLogo src={company.logo} alt="" size={28} />
              ) : (
                <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-white text-[10px] font-bold text-sky-600">
                  A+
                </span>
              )}
              {company.name}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
