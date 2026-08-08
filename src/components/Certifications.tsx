import { certifications } from "@/lib/data";
import { AwardIcon, ExternalLinkIcon } from "./icons";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="eyebrow">06 · Certifications</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div key={cert.title} className="card-surface flex flex-col p-5">
            <span className="icon-badge h-10 w-10">
              <AwardIcon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-semibold leading-snug">{cert.title}</h3>
            <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
            {cert.issued && (
              <p className="mt-3 font-mono text-xs text-muted">
                Issued {cert.issued}
                {cert.expired ? ` · Expired ${cert.expired}` : ""}
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
          </div>
        ))}
      </div>
    </section>
  );
}
