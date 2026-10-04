import { certifications } from "@/lib/data";
import CompanyLogo from "./CompanyLogo";
import { AwardIcon, ExternalLinkIcon } from "./icons";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    // Rendered inside the Education section; keeps its own anchor for links.
    <div id="certifications" className="mt-12 scroll-mt-20">
      <Reveal>
        <h4 className="font-mono text-xs uppercase tracking-widest text-muted">Certifications</h4>
      </Reveal>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => {
          const content = (
            <>
              {cert.logo ? (
                <CompanyLogo src={cert.logo} alt="" size={36} />
              ) : (
                <span
                  className={`icon-badge h-9 w-9 ${["", "icon-badge-b", "icon-badge-c"][index % 3]}`}
                >
                  <AwardIcon className="h-4 w-4" />
                </span>
              )}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-snug">{cert.title}</p>
                <p className="mt-0.5 text-xs text-muted">
                  {cert.issuer}
                  {cert.issued && ` · ${cert.issued}`}
                </p>
              </div>
              {cert.credentialUrl && (
                <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-accent" />
              )}
            </>
          );

          return (
            <Reveal key={cert.title} delay={(index % 3) * 80}>
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${cert.title} - view credential`}
                  className="card-surface group flex h-full items-center gap-3 p-4"
                >
                  {content}
                </a>
              ) : (
                <div className="card-surface flex h-full items-center gap-3 p-4">{content}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
