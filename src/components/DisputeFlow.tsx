"use client";

import { useState } from "react";

// "start" marks the trigger every case begins with; it is neither manual nor automated work.
type Step = { title: string; detail: string; kind: "start" | "manual" | "auto" };

const flows: Record<"manual" | "automated", Step[]> = {
  manual: [
    { title: "Dispute raised", detail: "Customer or merchant reports a problem", kind: "start" },
    { title: "Logged by hand", detail: "Operations records the case manually", kind: "manual" },
    { title: "Passed along manually", detail: "Ops works out who should handle it", kind: "manual" },
    { title: "Investigated", detail: "Transaction checked with the bank or wallet", kind: "manual" },
    { title: "Updates chased by hand", detail: "People contacted individually for progress", kind: "manual" },
    { title: "Resolved", detail: "Little visibility into status or delays", kind: "manual" },
  ],
  automated: [
    { title: "Dispute raised", detail: "Customer or merchant reports a problem", kind: "start" },
    { title: "Case created & tracked", detail: "Logged automatically with a clear status", kind: "auto" },
    { title: "Routed to the right team", detail: "Assigned automatically to who resolves it", kind: "auto" },
    { title: "Investigated", detail: "Team focuses on resolving, not admin", kind: "manual" },
    { title: "Everyone notified", detail: "Customers, merchants and teams updated automatically", kind: "auto" },
    { title: "Resolved, with visibility", detail: "Dashboards show open cases and progress", kind: "auto" },
  ],
};

export default function DisputeFlow() {
  const [mode, setMode] = useState<"manual" | "automated">("manual");
  const steps = flows[mode];
  const work = steps.filter((step) => step.kind !== "start");
  const manualCount = work.filter((step) => step.kind === "manual").length;

  return (
    <div className="card-surface p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" aria-label="Dispute workflow" className="inline-flex rounded-full border border-border bg-background p-1">
          {(["manual", "automated"] as const).map((option) => (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={mode === option}
              onClick={() => setMode(option)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                mode === option
                  ? "btn-primary text-accent-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {option === "manual" ? "Before: manual" : "After: automated"}
            </button>
          ))}
        </div>
        <p className="font-mono text-xs text-muted" aria-live="polite">
          {manualCount} of {work.length} steps done by hand
        </p>
      </div>

      <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={`${mode}-${step.title}`}
            className={`flow-step relative rounded-xl border p-4 ${
              step.kind === "auto"
                ? "border-accent-3/40 bg-accent-3/5"
                : step.kind === "manual"
                  ? "border-amber-500/40 bg-amber-500/5"
                  : "border-border bg-background"
            }`}
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] text-muted">Step {index + 1}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                  step.kind === "auto"
                    ? "bg-accent-3/15 text-teal-700 dark:text-teal-300"
                    : step.kind === "manual"
                      ? "bg-amber-500/15 text-amber-700 dark:text-amber-300"
                      : "bg-border text-muted"
                }`}
              >
                {step.kind === "auto" ? "Automated" : step.kind === "manual" ? "Manual" : "Start"}
              </span>
            </div>
            <p className="mt-2 font-semibold">{step.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">{step.detail}</p>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs text-muted">Simplified, illustrative view of the workflow.</p>
    </div>
  );
}
