"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useSiteContent } from "@/lib/useSiteContent";

type SecretaryLetterModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  body: string[];
  imageSrc: string;
  imageAlt: string;
  signature: string;
  role: string;
  email?: string | null;
};

export function SecretaryLetterModal({
  open,
  onClose,
  title,
  body,
  imageSrc,
  imageAlt,
  signature,
  role,
  email,
}: SecretaryLetterModalProps) {
  const { language } = useSiteContent();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const dialogId = "secretary-general-letter-dialog";

  useEffect(() => {
    if (!open) return;

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
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
        >
          <motion.button
            aria-label={language === "fr" ? "Fermer la lettre" : "Close letter"}
            className="absolute inset-0 bg-[rgba(5,11,37,0.68)] backdrop-blur-[2px]"
            onClick={onClose}
            type="button"
          />

          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-[10px] border border-[var(--rule)] bg-[var(--panel)] shadow-[0_28px_70px_-42px_rgba(5,11,37,0.75)]"
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              ref={dialogRef}
              aria-labelledby={dialogId}
              aria-modal="true"
              className="grid gap-6 bg-[var(--panel)] p-6 sm:grid-cols-[15rem_minmax(0,1fr)] sm:p-8"
              role="dialog"
            >
              <div className="relative overflow-hidden rounded-[6px] border border-[var(--rule)]">
                <Image alt={imageAlt} className="aspect-[4/5] w-full object-cover" height={1000} src={imageSrc} width={800} />
              </div>

              <div className="min-w-0">
                <div className="flex items-start justify-between gap-4 border-b border-[var(--rule)] pb-4">
                  <div>
                    <p className="section-kicker">{language === "fr" ? "Lettre du secrétariat" : "Secretary-General Letter"}</p>
                    <h2 className="font-display mt-4 text-4xl leading-[0.95] text-[var(--accent)]" id={dialogId}>
                      {title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">{role}</p>
                    {email ? (
                      <a className="mt-3 inline-flex text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline" href={`mailto:${email}`}>
                        {email}
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
                  <div className="space-y-4 text-sm leading-7 text-[var(--text)] sm:text-[1.02rem]">
                    {body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-[var(--rule)] pt-5">
                    <p className="font-accent text-2xl text-[var(--accent)]">{signature}</p>
                    <p className="mt-2 text-xs font-semibold text-[var(--muted)]">{role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
