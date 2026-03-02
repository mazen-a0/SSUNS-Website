export type Committee = {
  id: string;
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  theme: "Security" | "Development" | "Governance" | "Crisis";
  size: "Small" | "Medium" | "Large";
  blurb: string;
  topic: string;
  chairs: string[];
  format: string;
  backgroundGuide: string;
};

export const committeesPageContent = {
  title: "Committees",
  intro:
    "Browse committee formats, compare complexity, and open each profile for topic and leadership details.",
  searchLabel: "Search committees",
  searchPlaceholder: "Search by name, topic, or format",
  allOptionLabel: "All",
  filterThemeLabel: "Theme",
  filterLevelLabel: "Level",
  clearFiltersLabel: "Clear filters",
  openDetailsLabel: "Open details",
  noResults: "No committees match your filters.",
  modalTopicLabel: "Agenda Topic",
  modalFormatLabel: "Format",
  modalGuideLabel: "Background Guide",
  modalChairsLabel: "Dais Team",
};

export const committees: Committee[] = [
  {
    id: "committee-1",
    name: "Committee 1",
    level: "Beginner",
    theme: "Development",
    size: "Large",
    blurb: "Policy-first committee focused on equitable education systems.",
    topic: "Bridging global learning inequities through resilient funding models.",
    chairs: ["Chair A", "Vice Chair B"],
    format: "General Assembly",
    backgroundGuide: "Placeholder guide link",
  },
  {
    id: "committee-2",
    name: "Committee 2",
    level: "Intermediate",
    theme: "Security",
    size: "Medium",
    blurb: "Focused negotiations on disarmament and monitoring compliance.",
    topic: "Regional disarmament frameworks and non-proliferation enforcement.",
    chairs: ["Chair C", "Moderator D"],
    format: "Specialized",
    backgroundGuide: "Placeholder guide link",
  },
  {
    id: "committee-3",
    name: "Committee 3",
    level: "Advanced",
    theme: "Crisis",
    size: "Small",
    blurb: "High-velocity crisis room with adaptive scenario updates.",
    topic: "Emergency response coordination under communication blackouts.",
    chairs: ["Director E", "Crisis Analyst F"],
    format: "Crisis",
    backgroundGuide: "Placeholder guide link",
  },
  {
    id: "committee-4",
    name: "Committee 4",
    level: "Intermediate",
    theme: "Governance",
    size: "Large",
    blurb: "Norm-setting discussions around emerging technology governance.",
    topic: "International regulatory pathways for autonomous systems.",
    chairs: ["Chair G", "Rapporteur H"],
    format: "General Assembly",
    backgroundGuide: "Placeholder guide link",
  },
  {
    id: "committee-5",
    name: "Committee 5",
    level: "Beginner",
    theme: "Development",
    size: "Medium",
    blurb: "Consensus-oriented dialogue on public health infrastructure.",
    topic: "Scaling community health resilience in fragile regions.",
    chairs: ["Chair I", "Vice Chair J"],
    format: "Specialized",
    backgroundGuide: "Placeholder guide link",
  },
  {
    id: "committee-6",
    name: "Committee 6",
    level: "Advanced",
    theme: "Security",
    size: "Small",
    blurb: "Strategic committee for cyber deterrence and treaty design.",
    topic: "Cooperative cyber defense doctrines and incident attribution.",
    chairs: ["Director K", "Crisis Analyst L"],
    format: "Hybrid Crisis",
    backgroundGuide: "Placeholder guide link",
  },
];
