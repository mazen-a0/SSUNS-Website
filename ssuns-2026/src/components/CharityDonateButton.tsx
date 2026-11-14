import { useId } from "react";
import { ArrowUpRight } from "lucide-react";
import { charityPartner } from "@/content/charityPartner";
import type { Locale } from "@/content/registry";

export function CharityDonateButton({
  appearance = "default",
  language = "en",
}: {
  appearance?: "default" | "guide";
  language?: Locale;
} = {}) {
  const guide = appearance === "guide";
  const noteId = useId();

  return (
    <div className="grid max-w-sm justify-items-start gap-3" lang={language}>
      <p className={`border-l-2 pl-3 text-sm leading-6 font-semibold ${guide ? "border-[#142082] text-[#142082]" : "border-white/60 text-white"}`} id={noteId}>
        {charityPartner.delegationNote[language]}
      </p>
      <a
        aria-describedby={noteId}
        className={guide
          ? "inline-flex min-h-12 items-center gap-3 rounded-sm bg-[#142082] px-5 py-2.5 text-sm font-semibold !text-white hover:bg-[#101956]"
          : "inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-white px-7 py-4 text-base font-semibold text-[#142082] transition-colors hover:bg-[#edf1ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"}
        href={charityPartner.donationUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        {language === "fr" ? "Faire un don à War Child" : "Donate to War Child"} <ArrowUpRight aria-hidden="true" size={guide ? 16 : 20} />
      </a>
    </div>
  );
}
