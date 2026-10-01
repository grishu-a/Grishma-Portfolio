import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { caseStudies } from "@/lib/data";

export default function NotFound() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-24">
      <div className="blob -top-24 left-1/4 h-72 w-72 bg-accent" aria-hidden="true" />
      <div className="blob bottom-0 right-1/4 h-64 w-64 bg-accent-2 [animation-delay:3s]" aria-hidden="true" />
      <div className="relative max-w-md text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">This page doesn&apos;t exist</h1>
        <p className="mt-4 text-muted">
          The link may be mistyped or out of date. Here&apos;s where you can go instead:
        </p>
        <Link
          href="/"
          className="btn-primary group mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
        >
          Back to portfolio
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <ul className="mt-8 space-y-2 text-sm">
          {caseStudies.map((study) => (
            <li key={study.slug}>
              <Link href={`/case-studies/${study.slug}`} className="text-accent hover:underline">
                Case study: {study.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
