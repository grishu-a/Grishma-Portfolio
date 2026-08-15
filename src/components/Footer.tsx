import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Reveal className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with Next.js &amp; Tailwind CSS.</p>
      </Reveal>
    </footer>
  );
}
