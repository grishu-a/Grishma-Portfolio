import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row sm:px-10">
        <p className="kicker text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="kicker text-muted">Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
