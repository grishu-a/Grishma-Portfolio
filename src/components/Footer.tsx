import Link from "next/link";
import { profile } from "@/lib/data";
import { LinkedinIcon, MailIcon } from "./icons";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Reveal className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedinIcon className="h-4 w-4" />
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
          >
            <MailIcon className="h-4 w-4" />
          </Link>
          <Link
            href="#top"
            className="ml-1 text-xs font-medium transition-colors hover:text-foreground"
          >
            Back to top
          </Link>
        </div>
      </Reveal>
    </footer>
  );
}
