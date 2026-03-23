"use client";

import Link from "next/link";
import { useState } from "react";

type ResourceLink = {
  label: string;
  href: string;
};

type LandAcknowledgementBlockProps = {
  title: string;
  body: string[];
  resourcesTitle: string;
  resources: ResourceLink[];
  contactLine: string;
  expandLabel: string;
  collapseLabel: string;
};

export function LandAcknowledgementBlock({
  title,
  body,
  resourcesTitle,
  resources,
  contactLine,
  expandLabel,
  collapseLabel,
}: LandAcknowledgementBlockProps) {
  const [expanded, setExpanded] = useState(false);
  const [firstParagraph, ...remainingParagraphs] = body;

  return (
    <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
      <p className="section-kicker">{title}</p>
      <div className="mt-5 space-y-4 border-t border-[var(--rule)] pt-5 text-sm leading-relaxed text-[var(--text)] sm:text-base">
        {firstParagraph ? <p>{firstParagraph}</p> : null}
        {expanded ? (
          <>
            {remainingParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="border-t border-[var(--rule)] pt-4">
              <p className="section-kicker">{resourcesTitle}</p>
              <ul className="mt-4 space-y-3">
                {resources.map((resource) => (
                  <li key={resource.href}>
                    <Link className="text-sm font-semibold text-[var(--accent)] underline-offset-2 hover:underline" href={resource.href} target="_blank">
                      {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{contactLine}</p>
            </div>
          </>
        ) : null}
      </div>
      <button
        className="mt-5 border border-[var(--rule)] px-4 py-2 text-sm font-semibold text-[var(--accent)] transition-colors duration-200 hover:border-[var(--accent)] hover:bg-[rgba(20,32,130,0.04)]"
        onClick={() => setExpanded((current) => !current)}
        type="button"
      >
        {expanded ? collapseLabel : expandLabel}
      </button>
    </article>
  );
}
