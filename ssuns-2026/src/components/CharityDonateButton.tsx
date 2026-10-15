"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { charityPartner } from "@/content/charityPartner";

export function CharityDonateButton() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLAnchorElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const [embedUrl, setEmbedUrl] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!embedUrl) return;
    const modal = dialog.current;
    modal?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onMessage = (event: MessageEvent) => {
      if (
        event.origin !== "https://embed.crowdchange.ca" ||
        event.source !== frame.current?.contentWindow ||
        event.data?.id !== "cc-open-donation-form-147388"
      ) return;
      if (event.data.view === "closed" || event.data.view === "minimized") modal?.close();
    };
    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
      modal?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [embedUrl]);

  return (
    <div>
      <a
        aria-haspopup="dialog"
        className="inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-white px-7 py-4 text-base font-semibold text-[#142082] transition-colors hover:bg-[#edf1ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        href={charityPartner.donationUrl}
        onClick={(event) => {
          event.preventDefault();
          setLoaded(false);
          setEmbedUrl(`${charityPartner.embedUrl}&origin=${encodeURIComponent(window.location.href)}`);
        }}
        ref={trigger}
        rel="noopener noreferrer"
        target="_blank"
      >
        Donate to War Child <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
      </a>
      <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">Donations are processed by War Child’s CrowdChange fundraiser.</p>
      <a className="mt-3 inline-block text-sm text-white underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href={charityPartner.donationUrl} rel="noopener noreferrer" target="_blank">
        Open fundraiser in a new tab ↗
      </a>

      <dialog
        aria-labelledby="donation-dialog-title"
        className="fixed inset-0 m-auto h-[90dvh] max-h-[56rem] w-[calc(100%-1.5rem)] max-w-3xl overflow-hidden rounded-xl border border-[var(--rule)] bg-[#f8f9fc] p-0 text-[#11203c] shadow-2xl backdrop:bg-[#080e30]/70"
        onClose={() => {
          setEmbedUrl(null);
          trigger.current?.focus();
        }}
        ref={dialog}
      >
        <div className="flex h-full flex-col">
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[var(--rule)] bg-white px-4 py-3 sm:px-6">
            <h2 className="text-base font-semibold" id="donation-dialog-title">Donate to War Child</h2>
            <button aria-label="Close donation form" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#142082] hover:bg-[#edf1ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142082]" onClick={() => dialog.current?.close()} type="button">
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
          {!loaded && embedUrl ? <p className="px-6 py-3 text-sm" role="status">Loading donation form…</p> : null}
          {embedUrl ? (
            <iframe
              allow="payment"
              className="min-h-0 w-full flex-1 border-0"
              onLoad={() => setLoaded(true)}
              ref={frame}
              referrerPolicy="strict-origin-when-cross-origin"
              sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              src={embedUrl}
              title="War Child donation form on CrowdChange"
            />
          ) : null}
          <p className="shrink-0 border-t border-[var(--rule)] bg-white px-4 py-3 text-sm sm:px-6">
            Having trouble? <a className="font-semibold text-[#142082] underline underline-offset-4" href={charityPartner.donationUrl} rel="noopener noreferrer" target="_blank">Open the fundraiser in a new tab ↗</a>
          </p>
        </div>
      </dialog>
    </div>
  );
}
