import { volunteering } from "@/lib/data";
import CompanyLogo from "./CompanyLogo";
import ProjectImage from "./ProjectImage";
import Reveal from "./Reveal";

const badgeVariants = ["", "icon-badge-b", "icon-badge-c"];

// Rendered inside the Experience section, like Certifications sits inside Education.
export default function Volunteering() {
  const [featured, ...others] = volunteering;
  if (!featured) return null;

  return (
    <div id="volunteering" className="mt-14 scroll-mt-20">
      <Reveal>
        <h4 className="font-mono text-xs uppercase tracking-widest text-muted">Volunteering</h4>
      </Reveal>

      <Reveal className="card-surface mt-4 flex flex-col overflow-hidden md:flex-row">
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
            <span
              className={`icon-badge h-2 w-10 rounded-full ${badgeVariants[(index + 1) % 3]}`}
              aria-hidden="true"
            />
            <h3 className="mt-3 font-semibold">{item.role}</h3>
            <p className="text-sm text-muted">{item.organisation}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
