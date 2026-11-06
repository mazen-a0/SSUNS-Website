"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";

function filterAnalytics(event: BeforeSendEvent) {
  try {
    const url = new URL(event.url, window.location.origin);
    return url.pathname === "/shop/reservation/manage" || url.pathname.startsWith("/shop/reservation/manage/") ? null : event;
  } catch {
    return null;
  }
}

export function SiteAnalytics() {
  return <Analytics beforeSend={filterAnalytics} />;
}
