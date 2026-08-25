import { certifications } from "@/lib/data";
import CompanyLogo from "./CompanyLogo";
import { AwardIcon, ExternalLinkIcon } from "./icons";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <Reveal>
        <h2 className="eyebrow">06 · Certifications</h2>
        <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Certifications
        </h3>
      </Reveal>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <Reveal
            key={cert.title}
            delay={(index % 3) * 100}
            className="card-surface flex flex-col p-5"
          >
            <div className="flex items-start justify-between gap-3">
              {cert.logo ? (
                <CompanyLogo src={cert.logo} alt={`${cert.issuer} logo`} size={40} />
              ) : (
                <span
                  className={`icon-badge h-10 w-10 ${["", "icon-badge-b", "icon-badge-c"][index % 3]}`}
                >
                  <AwardIcon className="h-5 w-5" />
                </span>
              )}
            </div>
            <h3 className="mt-4 font-semibold leading-snug">{cert.title}</h3>
            <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
            {cert.issued && (
              <p className="mt-3 font-mono text-xs text-muted">
                Issued {cert.issued}
              </p>
            )}
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                View credential
                <ExternalLinkIcon className="h-3.5 w-3.5" />
              </a>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
