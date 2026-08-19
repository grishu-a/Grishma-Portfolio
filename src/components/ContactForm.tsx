"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { MailIcon } from "./icons";

const initialState: ContactFormState = { status: "idle" };

export default function ContactForm({
  onOpenChange,
}: {
  onOpenChange?: (open: boolean) => void;
}) {
  const [open, setOpenState] = useState(false);
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const setOpen = (next: boolean) => {
    setOpenState(next);
    onOpenChange?.(next);
  };

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
      >
        <MailIcon className="h-4 w-4" />
        Say hello
      </button>
    );
  }

  if (state.status === "success") {
    return (
      <div className="card-surface mx-auto max-w-md p-6 text-left">
        <p className="font-semibold">Thanks for reaching out!</p>
        <p className="mt-1 text-sm text-muted">
          Your message has been sent. I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      className="card-surface mx-auto max-w-md space-y-4 p-6 text-left"
    >
      <div>
        <label htmlFor="name" className="mb-1 block text-xs font-medium text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          maxLength={200}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-xs font-medium text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-xs font-medium text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={5000}
          className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />
      </div>
      {state.status === "error" && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={pending}
          className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {pending ? "Sending..." : "Send message"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-sm font-medium text-muted hover:text-foreground"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
