"use client";

import { useState } from "react";
import { CheckIcon } from "./icons";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the address stays visible to copy by hand.
    }
  };

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
      <span className="font-mono text-sm text-muted select-all">{email}</span>
      <button
        type="button"
        onClick={copy}
        className="no-print inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium transition-colors hover:border-accent hover:text-accent"
      >
        {copied ? (
          <>
            <CheckIcon className="h-3.5 w-3.5 text-accent-3" />
            Copied
          </>
        ) : (
          "Copy email"
        )}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </div>
  );
}
