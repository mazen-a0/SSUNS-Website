"use client";

import { useEffect, useRef, useState } from "react";
import type { ExcellenceScholarshipContent } from "@/content/en/excellenceScholarship";

type Props = { copy: ExcellenceScholarshipContent["application"] };
const formId = "gNda3iA8zjus";
export const scholarshipApplicationUrl = `https://forms.fillout.com/t/${formId}`;

export function ScholarshipApplication({ copy }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "unavailable">("loading");

  useEffect(() => {
    const host = container.current;
    if (!host) return;

    const timeout = window.setTimeout(() => setStatus("unavailable"), 20000);
    const markReady = () => {
      window.clearTimeout(timeout);
      setStatus("ready");
    };
    const onLoad = (event: Event) => {
      if (event.target instanceof HTMLIFrameElement && event.target === host.querySelector("iframe")) markReady();
    };
    // Fillout's welcome screen may load before it sends its first resize message.
    host.addEventListener("load", onLoad, true);
    const onMessage = (event: MessageEvent) => {
      const frame = host.querySelector("iframe");
      if (event.origin !== "https://embed.fillout.com" || !frame || event.source !== frame.contentWindow) return;
      if (event.data?.type === "form_resized" && Number.isFinite(event.data.size) && event.data.size > 0) {
        markReady();
      }
    };
    window.addEventListener("message", onMessage);

    // Fillout scans the DOM only when this script executes. A fresh script element
    // (served from the browser cache) also initializes subsequent client-side visits.
    // Language changes update only copy; this effect and the form remain mounted.
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    script.onerror = () => {
      window.clearTimeout(timeout);
      setStatus("unavailable");
    };
    document.body.appendChild(script);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("message", onMessage);
      host.removeEventListener("load", onLoad, true);
      script.onerror = null;
      script.remove();
      host.replaceChildren();
      delete host.dataset.filloutInitialized;
    };
  }, []);

  useEffect(() => {
    const frame = container.current?.querySelector("iframe");
    if (frame) frame.title = copy.frameTitle;
  }, [copy.frameTitle, status]);

  return (
    <div>
      <p className={status === "ready" ? "sr-only" : "mb-4 text-sm leading-6 text-[var(--muted)]"} role="status">
        {status === "loading" ? copy.loading : status === "unavailable" ? copy.unavailable : null}
      </p>
      <div
        aria-label={copy.frameTitle}
        className="w-full motion-reduce:transition-none!"
        data-fillout-dynamic-resize=""
        data-fillout-embed-type="standard"
        data-fillout-id={formId}
        data-fillout-inherit-parameters=""
        ref={container}
        style={{ height: 500 }}
      />
    </div>
  );
}
