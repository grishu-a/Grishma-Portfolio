import Link from "next/link";
import { profile } from "@/lib/data";

export default function Hero() {
  const firstName = profile.name.split(" ")[0];

  return (
    <section id="top">
      <div className="grid sm:grid-cols-2">
        <div className="flex min-h-[220px] flex-col justify-end bg-card px-6 py-10 sm:min-h-[320px] sm:px-10">
          <p className="kicker text-accent">Hi, I&apos;m {firstName} 👋</p>
          <h1 className="mt-4 text-6xl font-black italic leading-[0.9] tracking-tight lowercase sm:text-8xl">
            {firstName}
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-6 bg-accent px-6 py-10 text-accent-foreground sm:px-10">
          <p className="text-base leading-relaxed sm:text-lg">{profile.tagline}</p>
          <Link
            href="#about"
            aria-label="Scroll to about section"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold"
          >
            Scroll to learn more
            <span aria-hidden="true">&gt;</span>
          </Link>
        </div>
      </div>

      <div className="px-6 py-16 sm:px-10 sm:py-24">
        <h2 className="text-5xl font-black leading-[0.95] tracking-tight lowercase sm:text-7xl">
          {profile.role}
        </h2>
        <p className="kicker mt-6 text-muted normal-case tracking-normal sm:text-base">
          Product thinking outside, delivery discipline on the inside.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="#projects" className="btn btn-solid">
            View my work
          </Link>
          <Link href={profile.resumeUrl} className="btn btn-outline">
            Download résumé
          </Link>
        </div>
      </div>
    </section>
  );
}
