"use client";

import Link from "next/link";
import { useState } from "react";

export function BackgroundGuideAnnouncement() {
  const [visible, setVisible] = useState(true);

  const dismiss = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="pointer-events-none fixed inset-x-3 bottom-3 z-40 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-[23rem]" aria-label="Background guide announcement">
      <div className="guide-announcement-enter pointer-events-auto rounded-[12px] border border-[#23379f]/50 bg-[rgba(255,252,244,0.96)] p-4 shadow-[0_18px_50px_rgba(10,19,66,0.20)] backdrop-blur-md">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white">
            BG
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold leading-6 text-[var(--accent)]">
              Background Guides for GA & ECOSOCs + Specialized Agencies are now released. Access them with the provided password from your faculty advisor!
            </p>
            <Link className="mt-3 inline-flex border-b border-[var(--accent-2)] pb-1 text-sm font-semibold text-[var(--accent)]" href="/committees">
              View committees
            </Link>
          </div>
          <button
            aria-label="Dismiss background guide announcement"
            className="-mr-1 -mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl leading-none text-[var(--accent)] transition-colors hover:bg-[rgba(20,32,130,0.08)]"
            onClick={dismiss}
            type="button"
          >
            ×
          </button>
        </div>
      </div>
    </aside>
  );
}
