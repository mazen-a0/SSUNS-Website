"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { SecretariatMember } from "@/content/en/about";
import { useSiteContent } from "@/lib/useSiteContent";

type SecretariatModalProps = {
  member: SecretariatMember | null;
  onClose: () => void;
};

export function SecretariatModal({ member, onClose }: SecretariatModalProps) {
  const { language } = useSiteContent();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const dialogId = member ? `secretariat-dialog-${member.name.toLowerCase().replace(/\s+/g, "-")}` : undefined;

  useEffect(() => {
    if (!member) return;

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const items = Array.from(focusable).filter((item) => !item.hasAttribute("disabled"));
        if (!items.length) return;

        const first = items[0];
        const last = items[items.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (!dialogRef.current) {
        event.preventDefault();
        return;
      }

      const target = event.target as Node | null;
      if (!target || !dialogRef.current.contains(target)) {
        event.preventDefault();
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!dialogRef.current) {
        event.preventDefault();
        return;
      }

      const target = event.target as Node | null;
      if (!target || !dialogRef.current.contains(target)) {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchmove", handleTouchMove);
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [member, onClose]);

  return (
    <AnimatePresence>
      {member ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
        >
          <motion.button
            aria-label={language === "fr" ? "Fermer la biographie" : "Close biography"}
            className="absolute inset-0 bg-[rgba(5,11,37,0.68)] backdrop-blur-[2px]"
            onClick={onClose}
            type="button"
          />

          <motion.div
            layoutId={`secretariat-card-${member.name}`}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl overflow-hidden rounded-[10px] border border-[var(--rule)] bg-[var(--panel)] shadow-[0_28px_70px_-42px_rgba(5,11,37,0.75)]"
          >
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="grid gap-6 bg-[var(--panel)] p-6 sm:grid-cols-[15rem_minmax(0,1fr)] sm:p-8"
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              ref={dialogRef}
              aria-labelledby={dialogId}
              aria-modal="true"
              role="dialog"
            >
              <div className="relative overflow-hidden rounded-[6px] border border-[var(--rule)]">
                <Image alt={`${member.name} headshot`} className="aspect-[4/5] w-full object-cover" height={1000} src={member.headshotSrc || "/headshots/marcus.jpg"} width={800} />
              </div>

              <div className="min-w-0">
                <div className="flex items-start justify-between gap-4 border-b border-[var(--rule)] pb-4">
                  <div>
                    <p className="section-kicker">{language === "fr" ? "Secrétariat" : "Secretariat"}</p>
                    <h2 className="font-display mt-4 text-4xl leading-[0.95] text-[var(--accent)]" id={dialogId}>
                      {member.name}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">{member.role}</p>
                    {member.email ? (
                      <a className="mt-3 inline-flex text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline" href={`mailto:${member.email}`}>
                        {member.email}
                      </a>
                    ) : null}
                  </div>
                  <button
                    ref={closeButtonRef}
                    aria-label={language === "fr" ? "Fermer" : "Close"}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--rule)] text-[var(--accent)] transition-colors hover:bg-[rgba(20,32,130,0.05)]"
                    onClick={onClose}
                    type="button"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-5 max-h-[70vh] overflow-y-auto pr-1">
                  <p className="text-sm leading-7 text-[var(--text)] sm:text-[1.02rem]">
                    {member.bio?.trim() || (language === "fr" ? "Biographie disponible sur demande." : "Biography available on request.")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
