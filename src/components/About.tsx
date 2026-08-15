import { profile } from "@/lib/data";
import { MailIcon, MapPinIcon } from "./icons";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <h2 className="eyebrow">01 · About</h2>
      </Reveal>
      <div className="mt-6 grid gap-8 sm:grid-cols-3">
        <Reveal delay={80} className="sm:col-span-2">
          <p className="text-base leading-relaxed text-muted">{profile.bio}</p>
        </Reveal>
        <Reveal delay={160} className="card-surface flex flex-col gap-5 p-5 text-sm">
          <div className="flex items-start gap-3">
            <span className="icon-badge h-9 w-9">
              <MapPinIcon className="h-4 w-4" />
            </span>
            <div>
              <span className="block text-xs text-muted">Location</span>
              <span className="mt-0.5 block font-medium">{profile.location}</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
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
