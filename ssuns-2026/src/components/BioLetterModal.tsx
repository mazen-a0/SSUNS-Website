"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ReactNode, useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { useSiteContent } from "@/lib/useSiteContent";

type BioLetterModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  name: string;
  email?: string | null;
  headshotSrc: string;
  headshotAlt: string;
  signatureName: string;
  signatureRole?: string;
  showSignature?: boolean;
  kicker?: string;
  children: ReactNode;
};

export function BioLetterModal({
  open,
  onClose,
  title,
  name,
  email,
  headshotSrc,
  headshotAlt,
  signatureName,
  signatureRole,
  showSignature = true,
  kicker,
  children,
}: BioLetterModalProps) {
  const { language } = useSiteContent();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open || typeof document === "undefined") return;

    restoreFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;
    const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyWidth = body.style.width;
    const previousBodyLeft = body.style.left;
    const previousBodyRight = body.style.right;
    const previousBodyPaddingRight = body.style.paddingRight;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    if (isMobileViewport) {
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
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

      if (event.key !== "Tab" || !dialogRef.current) return;

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
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeyDown);

      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;
      body.style.left = previousBodyLeft;
      body.style.right = previousBodyRight;
      body.style.paddingRight = previousBodyPaddingRight;

      if (isMobileViewport) {
        window.scrollTo(0, scrollY);
      }
      restoreFocusRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-[140] bg-[rgba(5,11,37,0.72)] p-3 backdrop-blur-[2px] md:p-6"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto flex h-full max-h-[calc(100dvh-1.5rem)] w-full max-w-4xl overflow-hidden rounded-[10px] border border-[var(--rule)] bg-[var(--panel)] shadow-[0_28px_70px_-42px_rgba(5,11,37,0.75)] md:max-h-[85vh]"
          exit={{ opacity: 0, y: 8 }}
          initial={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            ref={dialogRef}
            aria-labelledby={titleId}
            aria-modal="true"
            className="flex h-full min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain md:grid md:grid-cols-[11.25rem_minmax(0,1fr)] md:overflow-hidden"
            role="dialog"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <aside className="border-b border-[var(--rule)] px-4 pb-5 pt-4 text-center md:flex md:h-full md:flex-col md:items-start md:border-b-0 md:border-r md:px-5 md:py-6 md:text-left">
              <div className="mx-auto w-24 overflow-hidden rounded-[8px] border border-[var(--rule)] bg-[var(--panel)] md:mx-0 md:w-full">
                <Image alt={headshotAlt} className="aspect-[4/5] h-auto w-full object-cover object-top" height={1000} src={headshotSrc} width={800} />
              </div>
              <div className="mt-4 w-full">
                <p className="text-sm font-semibold leading-tight text-[var(--accent)]">{name}</p>
                {email ? (
                  <a
                    className="mt-2 inline-flex break-all text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                ) : null}
              </div>
            </aside>

            <section className="flex min-h-0 flex-1 flex-col px-4 pb-4 pt-4 md:px-6 md:pb-6 md:pt-6">
              <div className="flex items-start justify-between gap-4 border-b border-[var(--rule)] pb-4">
                <div className="min-w-0">
                  {kicker ? <p className="section-kicker">{kicker}</p> : null}
                  <h2 className="font-display mt-2 text-3xl leading-[0.95] text-[var(--accent)] md:mt-3 md:text-4xl" id={titleId}>
                    {title}
                  </h2>
                  {signatureRole ? <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] md:text-base">{signatureRole}</p> : null}
                </div>
                <button
                  ref={closeButtonRef}
                  aria-label={language === "fr" ? "Fermer" : "Close"}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] border border-[var(--rule)] text-[var(--accent)] transition-colors hover:bg-[rgba(20,32,130,0.05)]"
                  onClick={onClose}
                  type="button"
                >
                  ×
                </button>
              </div>

              <div className="mt-4 md:min-h-0 md:flex-1 md:overflow-y-auto md:overscroll-contain md:pr-2">
                <div className="space-y-4 text-sm leading-7 text-[var(--text)] md:text-[1.02rem]">{children}</div>
                {showSignature ? (
                  <div className="mt-6 border-t border-[var(--rule)] pt-5">
                    <p className="font-accent text-2xl text-[var(--accent)]">{signatureName}</p>
                    {signatureRole ? <p className="mt-2 text-xs font-semibold text-[var(--muted)]">{signatureRole}</p> : null}
                  </div>
                ) : null}
              </div>
            </section>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}
