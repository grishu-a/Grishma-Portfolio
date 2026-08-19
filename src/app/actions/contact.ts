"use server";

import { getDb } from "@/db";
import { contactSubmissions } from "@/db/schema";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in every field." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return { status: "error", message: "One of your fields is too long." };
  }

  try {
    await getDb().insert(contactSubmissions).values({ name, email, message });
    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Something went wrong on our end. Please try again shortly.",
    };
  }
}
