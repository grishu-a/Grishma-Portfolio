import Image from "next/image";
import { profile, recommendations } from "@/lib/data";
import { MailIcon, MapPinIcon } from "./icons";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

// Numbers like "2,000,000" or "96%" in the bio count up and stand out.
const statPattern = /(\d{1,3}(?:,\d{3})+|\d+(?:\.\d+)?%)/;

const featuredQuote = recommendations[0];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <Reveal>
        <h2 className="eyebrow">01 · About</h2>
        <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">About Me</h3>
      </Reveal>
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        <Reveal delay={80} className="sm:col-span-2">
          <p className="text-base leading-relaxed text-muted">
            {profile.bio.split(statPattern).map((part, i) =>
              i % 2 === 1 ? (
                <strong
                  key={i}
                  className="gradient-text inline-block text-right font-bold tabular-nums"
                  style={{ minWidth: `${part.length}ch` }}
                >
                  <CountUp value={part} />
                </strong>
              ) : (
                part
              ),
            )}
          </p>
          <figure className="mt-8 border-l-2 border-accent pl-5">
            <blockquote className="text-lg font-medium leading-snug">
              &ldquo;A rare blend of sharp analytical skills and strong managerial
              oversight, making her an outstanding professional.&rdquo;
            </blockquote>
            <figcaption className="mt-2 text-xs text-muted">
              {featuredQuote.name} · {featuredQuote.title} ·{" "}
              <a href="#recommendations" className="text-accent hover:underline">
                Read recommendations
              </a>
            </figcaption>
          </figure>
        </Reveal>
        <Reveal
          delay={160}
          className="card-surface order-first mx-auto flex w-full max-w-xs flex-col gap-5 self-start overflow-hidden text-sm sm:order-none sm:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(min-width: 640px) 320px, 320px"
              className="object-cover"
            />
          </div>
          <div className="flex items-start gap-3 px-5">
            <span className="icon-badge h-9 w-9">
              <MapPinIcon className="h-4 w-4" />
            </span>
            <div>
              <span className="block text-xs text-muted">Location</span>
              <span className="mt-0.5 block font-medium">{profile.location}</span>
            </div>
          </div>
          <div className="flex items-start gap-3 px-5 pb-5">
            <span className="icon-badge h-9 w-9">
              <MailIcon className="h-4 w-4" />
            </span>
            <div>
              <span className="block text-xs text-muted">Email</span>
              <a
                href={`mailto:${profile.email}`}
                className="mt-0.5 block font-medium hover:text-accent"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
