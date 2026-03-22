"use client";

import { useState } from "react";

type ListservSignupFormProps = {
  fallbackEmail: string;
  text: {
    nameLabel: string;
    emailLabel: string;
    schoolLabel: string;
    submitLabel: string;
    successLabel: string;
    fallbackLabel: string;
  };
};

export function ListservSignupForm({ fallbackEmail, text }: ListservSignupFormProps) {
  const [formState, setFormState] = useState({ name: "", email: "", school: "" });
  const [message, setMessage] = useState<string | null>(null);

  return (
    <form
      className="theme-panel paper-grain rounded-[8px] p-5"
      onSubmit={(event) => {
        event.preventDefault();
        setMessage(text.fallbackLabel);
        window.location.href = `mailto:${fallbackEmail}?subject=${encodeURIComponent("SSUNS Listserv Signup")}&body=${encodeURIComponent(
          `Name: ${formState.name}\nEmail: ${formState.email}\nSchool: ${formState.school}`,
        )}`;
      }}
    >
      {/* TODO(form): Connect this placeholder module to the listserv backend when the Apps Script endpoint is ready. This pass intentionally keeps the form as a styled mailto fallback only. */}
      <div className="grid gap-4 sm:grid-cols-3">
        <input
          className="border border-[var(--rule)] bg-[var(--bg)] px-3 py-3 text-sm text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
          onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
          placeholder={text.nameLabel}
          value={formState.name}
        />
        <input
          className="border border-[var(--rule)] bg-[var(--bg)] px-3 py-3 text-sm text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
          onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
          placeholder={text.emailLabel}
          type="email"
          value={formState.email}
        />
        <input
          className="border border-[var(--rule)] bg-[var(--bg)] px-3 py-3 text-sm text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
          onChange={(event) => setFormState((current) => ({ ...current, school: event.target.value }))}
          placeholder={text.schoolLabel}
          value={formState.school}
        />
      </div>
      <button className="mt-4 border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white" type="submit">
        {text.submitLabel}
      </button>
      {message ? <p className="mt-3 text-sm text-[var(--muted)]">{message}</p> : null}
    </form>
  );
}
