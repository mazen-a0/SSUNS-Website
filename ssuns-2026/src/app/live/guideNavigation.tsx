"use client";

import { useSyncExternalStore, type ComponentPropsWithoutRef } from "react";

const changeEvent = "ssuns:guide-location";
const subscribe = (callback: () => void) => {
  const events = ["hashchange", "popstate", changeEvent];
  events.forEach((event) => window.addEventListener(event, callback));
  return () => events.forEach((event) => window.removeEventListener(event, callback));
};
const snapshot = () => window.location.hash.slice(1);

export function useGuideHash() {
  return useSyncExternalStore(subscribe, snapshot, () => "");
}

export function navigateGuide(href: string, mode: "tab" | "sheet" | "replace" | "from-sheet" | "switch-sheet" = "tab") {
  if (href === window.location.hash || (!window.location.hash && href === "#home")) return;
  const inSheet = Boolean(window.history.state?.ssunsGuideSheet);
  const state = mode === "sheet" || (mode === "switch-sheet" && inSheet) ? { ssunsGuideSheet: true } : null;
  if (mode === "replace" || mode === "switch-sheet" || (mode === "from-sheet" && inSheet)) {
    window.history.replaceState(state, "", href);
  } else window.history.pushState(state, "", href);
  window.dispatchEvent(new Event(changeEvent));
}

export function closeGuideSheet(href: string) {
  if (window.history.state?.ssunsGuideSheet) window.history.back();
  else navigateGuide(href, "replace");
}

export function GuideLink({ href, mode, onClick, ...props }: Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  mode?: Parameters<typeof navigateGuide>[1];
}) {
  return <a {...props} href={href} onClick={(event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    onClick?.(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    navigateGuide(href, mode);
  }} />;
}
