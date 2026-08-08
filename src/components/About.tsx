import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker text-accent">01 · About</p>
        <div className="mt-6 grid gap-10 sm:grid-cols-3">
          <p className="text-2xl font-medium leading-snug sm:col-span-2 sm:text-3xl">
            {profile.bio}
          </p>
          <div className="space-y-6 border-t border-border pt-6 text-sm sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8">
            <div>
              <span className="kicker block text-muted">Location</span>
              <span className="mt-1 block text-base">{profile.location}</span>
            </div>
            <div>
              <span className="kicker block text-muted">Email</span>
              <a
                href={`mailto:${profile.email}`}
                className="mt-1 block text-base underline decoration-accent underline-offset-4 hover:text-accent"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
