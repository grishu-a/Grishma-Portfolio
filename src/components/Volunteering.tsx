import { volunteering } from "@/lib/data";
import CompanyLogo from "./CompanyLogo";
import ProjectImage from "./ProjectImage";
import Reveal from "./Reveal";

const badgeVariants = ["", "icon-badge-b", "icon-badge-c"];

export default function Volunteering() {
  const [featured, ...others] = volunteering;
  if (!featured) return null;

  return (
    <section id="volunteering" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <Reveal>
        <h2 className="eyebrow">05 · Volunteering</h2>
        <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Volunteering &amp; Community
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Leading and supporting communities outside my day job, from Sydney&apos;s developer
          community to student life and social enterprise.
        </p>
      </Reveal>

      <Reveal className="card-surface mt-8 flex flex-col overflow-hidden md:flex-row">
        {featured.photo && (
          <figure className="md:w-1/2 md:shrink-0">
            <ProjectImage
              src={featured.photo.src}
              title={featured.photo.caption}
              className="aspect-[1100/593] md:h-full md:aspect-auto md:min-h-[240px]"
            />
          </figure>
        )}
        <div className="flex flex-col justify-center p-6">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
            Most recent
          </span>
          <div className="mt-2 flex items-center gap-3">
            {featured.logo && <CompanyLogo src={featured.logo} alt="Google logo" size={36} />}
            <div>
              <h3 className="text-lg font-semibold leading-snug">{featured.role}</h3>
              <p className="text-sm text-muted">{featured.organisation}</p>
            </div>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{featured.description}</p>
          {featured.photo && (
            <p className="mt-3 text-xs text-muted">{featured.photo.caption}</p>
          )}
        </div>
      </Reveal>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {others.map((item, index) => (
          <Reveal key={item.role} delay={index * 80} className="card-surface flex flex-col p-5">
            <div className="flex items-center gap-3">
              {item.logo ? (
                <CompanyLogo src={item.logo} alt={`${item.organisation} logo`} size={32} />
              ) : (
                <span
                  className={`icon-badge h-8 w-8 text-[11px] font-bold ${badgeVariants[(index + 1) % 3]}`}
                  aria-hidden="true"
                >
                  {item.organisation.slice(0, 2).toUpperCase()}
                </span>
              )}
              <div className="min-w-0">
                <h3 className="font-semibold leading-snug">{item.role}</h3>
                <p className="text-sm text-muted">{item.organisation}</p>
              </div>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
