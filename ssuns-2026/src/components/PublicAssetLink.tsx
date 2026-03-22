"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type PublicAssetLinkProps = {
  href: string;
  label: string;
  unavailableLabel: string;
};

export function PublicAssetLink({ href, label, unavailableLabel }: PublicAssetLinkProps) {
  const [available, setAvailable] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let active = true;

    fetch(href, { method: "HEAD" })
      .then((response) => {
        if (!active) return;
        setAvailable(response.ok);
        setChecked(true);
      })
      .catch(() => {
        if (!active) return;
        setAvailable(false);
        setChecked(true);
      });

    return () => {
      active = false;
    };
  }, [href]);

  if (!checked || !available) {
    return <span className="text-sm text-[var(--muted)]">{unavailableLabel}</span>;
  }

  return (
    <Link className="border-b border-[var(--accent-2)] pb-1 text-sm font-semibold text-[var(--accent)]" href={href} target="_blank">
      {label}
    </Link>
  );
}
