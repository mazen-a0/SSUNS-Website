"use client";

type ListservSignupFormProps = {
  text: {
    requiredLabel: string;
    emailLabel: string;
    firstNameLabel: string;
    lastNameLabel: string;
    submitLabel: string;
  };
};

const MAILCHIMP_ACTION =
  "https://ssuns.us12.list-manage.com/subscribe/post?u=15d18135f3db2bb93664e6e26&id=73a33f3906&f_id=00bad6e8f0";
const MAILCHIMP_HONEYPOT = "b_15d18135f3db2bb93664e6e26_73a33f3906";

export function ListservSignupForm({ text }: ListservSignupFormProps) {
  return (
    <form
      action={MAILCHIMP_ACTION}
      className="space-y-4"
      method="post"
      name="mc-embedded-subscribe-form"
      noValidate
      target="_blank"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/70">
        <span className="mr-1 text-[#8cc1ff]">*</span>
        {text.requiredLabel}
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-white/78">
            {text.emailLabel} <span className="text-[#8cc1ff]">*</span>
          </span>
          <input
            className="w-full rounded-[8px] border border-white/14 bg-white/7 px-3 py-3 text-sm text-white placeholder:text-white/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
            id="mce-EMAIL"
            name="EMAIL"
            required
            type="email"
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-white/78">
            {text.firstNameLabel} <span className="text-[#8cc1ff]">*</span>
          </span>
          <input
            className="w-full rounded-[8px] border border-white/14 bg-white/7 px-3 py-3 text-sm text-white placeholder:text-white/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
            id="mce-FNAME"
            name="FNAME"
            required
            type="text"
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-white/78">
            {text.lastNameLabel} <span className="text-[#8cc1ff]">*</span>
          </span>
          <input
            className="w-full rounded-[8px] border border-white/14 bg-white/7 px-3 py-3 text-sm text-white placeholder:text-white/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
            id="mce-LNAME"
            name="LNAME"
            required
            type="text"
          />
        </label>
      </div>

      <div aria-hidden="true" className="absolute left-[-5000px]">
        <input autoComplete="off" name={MAILCHIMP_HONEYPOT} tabIndex={-1} type="text" />
      </div>

      <button
        className="inline-flex items-center justify-center rounded-[8px] border border-white/16 bg-white px-5 py-3 text-sm font-semibold text-[var(--accent)] transition hover:bg-[#eef3ff] hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
        id="mc-embedded-subscribe"
        name="subscribe"
        type="submit"
      >
        {text.submitLabel}
      </button>
    </form>
  );
}
