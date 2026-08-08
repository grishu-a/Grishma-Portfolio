import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="eyebrow">01 · About</h2>
      <div className="mt-4 grid gap-8 sm:grid-cols-3">
        <p className="text-base leading-relaxed text-muted sm:col-span-2">
          {profile.bio}
        </p>
        <div className="space-y-2 text-sm text-muted">
          <div>
            <span className="block text-foreground">Location</span>
            {profile.location}
          </div>
          <div>
            <span className="block text-foreground">Email</span>
            <a href={`mailto:${profile.email}`} className="hover:text-accent">
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
