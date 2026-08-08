import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="eyebrow">06 · Certifications</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-5"
          >
            <h3 className="font-semibold">{cert.title}</h3>
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
                className="mt-3 text-sm font-medium text-accent hover:underline"
              >
                View credential ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
