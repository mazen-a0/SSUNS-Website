import type { Committee } from "@/content/en/committees";

const GENERIC_LEVELS = new Set(["Regular", "Régulier"]);
const GENERIC_DIFFICULTIES = new Set([
  "",
  "This is a regular committee.",
  "Il s'agit d'un comité régulier.",
  "This is a General Assembly Heavy Specialized Agency.",
  "Il s'agit d'une agence spécialisée à dominante d'assemblée générale.",
  "This is a Crisis Heavy Specialized Agency.",
  "Il s'agit d'une agence spécialisée à forte composante de crise.",
  "Debate will be in French and English.",
  "Le débat se déroulera en français et en anglais.",
]);

function isMeaningfulLevel(level: string) {
  return !GENERIC_LEVELS.has(level);
}

function formatDoubleDelegation(size: string) {
  return size === "Double délégation" ? "Double délégation" : "Double Del";
}

function formatCustomDifficulty(difficulty: string) {
  if (!difficulty || GENERIC_DIFFICULTIES.has(difficulty)) return null;

  if (difficulty === "Low General Assembly, High Crisis.") return "Low GA • High Crisis";
  if (difficulty === "Faible AG, forte crise.") return "Faible AG • Forte crise";
  if (difficulty === "Low Crisis, High General Assembly.") return "Low Crisis • High GA";
  if (difficulty === "Faible crise, forte AG.") return "Faible crise • Forte AG";
  if (difficulty === "Differing Rules of Procedure.") return "Differing Rules";
  if (difficulty === "Règles de procédure distinctes.") return "Règles distinctes";
  if (difficulty === "Ad Hoc Specialized Agency.") return "Ad Hoc";
  if (difficulty === "Agence spécialisée Ad Hoc.") return "Ad Hoc";
  if (difficulty === "This is an Ad Hoc Crisis committee.") return "Ad Hoc";
  if (difficulty === "Il s'agit d'un comité de crise Ad Hoc.") return "Ad Hoc";

  return null;
}

export function getCommitteeLevelLabel(level: string) {
  return isMeaningfulLevel(level) ? level : null;
}

export function getCommitteeBadges(committee: Committee) {
  const badges: string[] = [];
  const level = getCommitteeLevelLabel(committee.level);

  if (committee.size === "Double Delegation" || committee.size === "Double délégation") {
    badges.push(formatDoubleDelegation(committee.size));
  }

  if (committee.format === "Joint Crisis" || committee.format === "Crise conjointe") {
    badges.push(committee.format);
  }

  if (level) {
    badges.push(level);
  }

  const customDifficulty = formatCustomDifficulty(committee.difficulty);
  if (customDifficulty) {
    badges.push(customDifficulty);
  }

  return [...new Set(badges)];
}
