export const excellenceScholarship = {
  navTitle: "Excellence Scholarship",
  title: "SSUNS Excellence Scholarship",
  headline: { first: "Excellence", second: "Scholarship" },
  summary: "Two $1,000 scholarships recognizing delegates’ leadership, initiative, impact, and future potential.",
  intro: "The Secondary Schools’ United Nations Symposium is proud to introduce the SSUNS Excellence Scholarship, an initiative recognizing delegates who demonstrate exceptional leadership, initiative, community involvement, and a commitment to creating positive change beyond Model UN.",
  award: "2 Scholarships · $1,000 Each",
  awardDetail: { label: "Two scholarships", amount: "$1,000", each: "each" },
  awardDescription: "Two delegates will each receive a $1,000 scholarship intended to support their future educational goals and aspirations.",
  applyLabel: "Apply on Fillout",
  sectionsLabel: "Scholarship information",
  tabs: { eligibility: "Who can apply", selection: "How we choose", process: "Dates & interviews" },
  deadlineLabel: "Application deadline",
  deadline: "Friday, November 6, 2026, at 11:59 PM EST (Montréal time).",
  eligibility: {
    title: "Eligibility & Selection Criteria",
    intro: "The scholarship is open to all registered delegates attending SSUNS 2026.",
    criteriaIntro: "Applications will be evaluated based on four criteria:",
    criteria: [
      { title: "Initiative & Demonstrated Impact", description: "Taking meaningful action, identifying opportunities for improvement, and contributing positively to others." },
      { title: "Leadership & Personal Character", description: "Demonstrating responsibility, collaboration, integrity, openness to different perspectives, and personal growth." },
      { title: "Future Potential", description: "Exhibiting intellectual curiosity, ambition, thoughtful aspirations, and the potential to contribute meaningfully to society." },
      { title: "Educational Aspirations", description: "Articulating clear educational goals and thoughtfully explaining how the scholarship could support them." },
    ],
  },
  fairness: {
    title: "Fair & Independent Selection",
    lead: "The selection process will be entirely delegation- and committee-blind.",
    paragraphs: [
      "Applicants will not be evaluated based on their school or delegation affiliation, assigned committee, or performance and awards within committee. The scholarship is independent of all existing committee awards.",
      "SSUNS recognizes that leadership, excellence, and impact take many forms. Applicants are encouraged to draw on experiences from their schools, communities, personal lives, or independent pursuits.",
      "Formal leadership positions, extensive extracurricular involvement, and previous awards are not prerequisites for consideration.",
      "To promote an equitable selection process, applicants will be assessed in the context of their individual experiences and opportunities.",
      "Financial circumstances will neither advantage nor disadvantage applicants, and no financial information will be required.",
      "Responses concerning educational aspirations will be evaluated based on their clarity and thoughtfulness, rather than applicants’ financial circumstances.",
    ],
  },
  process: {
    title: "Application & Selection Process",
    stages: [
      { title: "Application", paragraphs: ["Interested delegates must complete and submit their application by:"] },
      { title: "Shortlisting & Interviews", paragraphs: ["Following an initial review of applications, shortlisted candidates will be contacted with further information and invited to participate in a brief in-person interview during SSUNS 2026.", "Interviews will be scheduled outside of committee sessions, ensuring candidates do not miss committee time."] },
      { title: "Selection", paragraphs: ["Following the interviews, the Scholarship Selection Committee will select two recipients by the conclusion of the conference."] },
    ],
  },
  application: {
    title: "Apply for the SSUNS Excellence Scholarship",
    intro: "We encourage all interested delegates to apply, regardless of their previous leadership experience or accomplishments. The SSUNS Excellence Scholarship seeks to recognize not only what students have achieved, but also their potential to make a meaningful impact in the future.",
    frameTitle: "SSUNS Excellence Scholarship application",
    loading: "Loading application…",
    unavailable: "The application could not load here. Please use the direct application link above.",
    openForm: "Open application in a new tab",
    onPageLabel: "Apply on this page",
  },
};

export type ExcellenceScholarshipContent = typeof excellenceScholarship;
