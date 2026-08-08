import Link from "next/link";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-accent px-6 py-16 text-accent-foreground sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">06 · Contact</p>
        <h2 className="mt-4 max-w-2xl text-5xl font-black leading-[0.95] tracking-tight lowercase sm:text-7xl">
          let&apos;s build something together
        </h2>
        <p className="mt-6 max-w-md text-base leading-relaxed">
          I&apos;m open to new opportunities and interesting projects. Reach out
          and I&apos;ll get back to you.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href={`mailto:${profile.email}`}
            className="btn bg-accent-foreground text-accent"
          >
            Say hello
          </Link>
          <Link
            href={profile.socials.linkedin}
            className="btn border-[1.5px] border-accent-foreground text-accent-foreground"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
