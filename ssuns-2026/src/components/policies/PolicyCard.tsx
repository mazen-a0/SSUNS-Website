"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

type PolicyCardProps = {
  title: string;
  preview: string;
  bullets?: string[];
  pdfHref: string;
  openLabel: string;
  downloadLabel?: string;
  className?: string;
};

export function PolicyCard({ title, preview, bullets = [], pdfHref, openLabel, downloadLabel, className }: PolicyCardProps) {
  return (
    <article className={cn("overflow-hidden rounded-[12px] border border-[var(--rule)] bg-[var(--panel)] shadow-[var(--shadow-soft)]", className)}>
      <div className="px-5 py-4 sm:px-6">
        <div className="min-w-0">
          <p className="text-base font-semibold leading-tight text-[var(--text)]">{title}</p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{preview}</p>
        </div>

        {bullets.length ? (
          <ul className="mt-4 space-y-2 border-t border-[var(--rule)] pt-4 text-sm leading-relaxed text-[var(--text)]">
            {bullets.map((bullet) => (
              <li className="flex gap-2" key={bullet}>
                <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center justify-center rounded-[8px] border border-[var(--accent)] bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1b2ea3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
            href={pdfHref}
            rel="noreferrer"
            target="_blank"
          >
            {openLabel}
          </Link>
          {downloadLabel ? (
            <Link
              className="inline-flex items-center justify-center rounded-[8px] border border-[var(--rule)] bg-[var(--paper)] px-4 py-2.5 text-sm font-semibold text-[var(--accent)] transition-colors duration-200 hover:border-[var(--accent-2)] hover:bg-[rgba(20,32,130,0.04)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
              download
              href={pdfHref}
              target="_blank"
            >
              {downloadLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
