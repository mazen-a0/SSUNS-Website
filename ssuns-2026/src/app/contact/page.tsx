"use client";

import { useState } from "react";
import { DossierCarousel } from "@/components/media/DossierCarousel";
import { DossierFigure } from "@/components/media/DossierFigure";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function ContactPage() {
  const { contactContent, homeContent } = useSiteContent();
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const contactSlides = [
    {
      id: "contact-montreal",
      alt: contactContent.image.alt,
      eyebrow: contactContent.title,
      src: contactContent.image.src,
    },
    ...homeContent.gallery.items.slice(0, 2).map((item) => ({
      id: item.id,
      alt: item.alt,
      caption: item.caption,
      eyebrow: item.title,
      src: item.src,
    })),
  ];

  return (
    <>
      <PageHero intro={contactContent.intro} title={contactContent.title} />
      <section className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
            <p className="section-kicker">{contactContent.sections.office}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--accent)]">{contactContent.sections.office}</h2>
            <div className="mt-6 overflow-hidden border border-[var(--rule)]">
              {contactContent.directory.map((item) => (
                <article className="grid gap-3 border-t border-[var(--rule)] px-4 py-4 first:border-t-0 md:grid-cols-[0.3fr_0.28fr_0.42fr]" key={`${item.name}-${item.email}`}>
                  <p className="text-sm font-semibold text-[var(--text)]">{item.name}</p>
                  <p className="text-sm text-[var(--muted)]">{item.role}</p>
                  <a className="text-sm leading-relaxed text-[var(--accent)]" href={`mailto:${item.email}`}>
                    {item.email}
                  </a>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">{contactContent.officeBlurb}</p>
          </article>

          <div className="space-y-5">
            <DossierFigure alt={contactContent.image.alt} ratio="16/9" src={contactContent.image.src} />
            <DossierCarousel items={contactSlides} />
            <article className="bg-[var(--panel-inverse)] p-6 text-white sm:p-7">
              <p className="section-kicker text-[#afcbff]">{contactContent.sections.responseWindow}</p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight">{contactContent.officeHours.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#e4eeff]">{contactContent.officeHours.body}</p>
            </article>
            <form
              className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8"
              onSubmit={(event) => {
                event.preventDefault();
                const { name, email, message, subject } = formState;
                if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
                  setError(contactContent.form.validation.required);
                  return;
                }
                if (!/^\S+@\S+\.\S+$/.test(email)) {
                  setError(contactContent.form.validation.email);
                  return;
                }
                setError(null);
                const mailto = `mailto:${contactContent.form.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                  `${contactContent.form.nameLabel}: ${name}\n${contactContent.form.emailLabel}: ${email}\n\n${message}`,
                )}`;
                window.location.href = mailto;
              }}
            >
              {/* TODO(form): Replace mailto fallback with a real endpoint such as Formspree, Basin, or a Resend-backed server action. */}
              <p className="section-kicker">{contactContent.sections.form}</p>
              <div className="mt-5 grid gap-4 border-t border-[var(--rule)] pt-5 sm:grid-cols-2">
                <label className="text-sm text-[var(--text)]">
                  <span className="block font-semibold text-[var(--accent)]">{contactContent.form.nameLabel}</span>
                  <input
                    className="mt-2 w-full border border-[var(--rule)] bg-[var(--bg)] px-3 py-3 text-sm text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
                    onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
                    value={formState.name}
                  />
                </label>
                <label className="text-sm text-[var(--text)]">
                  <span className="block font-semibold text-[var(--accent)]">{contactContent.form.emailLabel}</span>
                  <input
                    className="mt-2 w-full border border-[var(--rule)] bg-[var(--bg)] px-3 py-3 text-sm text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
                    onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                    type="email"
                    value={formState.email}
                  />
                </label>
                <label className="sm:col-span-2 text-sm text-[var(--text)]">
                  <span className="block font-semibold text-[var(--accent)]">{contactContent.form.subjectLabel}</span>
                  <input
                    className="mt-2 w-full border border-[var(--rule)] bg-[var(--bg)] px-3 py-3 text-sm text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
                    onChange={(event) => setFormState((current) => ({ ...current, subject: event.target.value }))}
                    value={formState.subject}
                  />
                </label>
                <label className="sm:col-span-2 text-sm text-[var(--text)]">
                  <span className="block font-semibold text-[var(--accent)]">{contactContent.form.messageLabel}</span>
                  <textarea
                    className="mt-2 min-h-40 w-full border border-[var(--rule)] bg-[var(--bg)] px-3 py-3 text-sm text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
                    onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
                    value={formState.message}
                  />
                </label>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{contactContent.form.helper}</p>
              {error ? <p className="mt-3 text-sm text-[#9f1d1d]">{error}</p> : null}
              <button className="mt-5 border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white" type="submit">
                {contactContent.form.submitLabel}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
