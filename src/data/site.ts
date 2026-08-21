export type EventStatus = "ongoing" | "upcoming";

export interface EventAgendaItem {
  time: string;
  label: string;
}

export interface EventFact {
  label: string;
  value: string;
}

export interface SiteEvent {
  /** URL slug — /events/{slug} */
  slug: string;
  title: string;
  kicker: string;
  /** Human-readable date line shown in cards */
  date: string;
  isoDate: string;
  endIsoDate?: string;
  location: string;
  /** Full address / venue line for the detail page and JSON-LD */
  venue: string;
  status: EventStatus;
  /** One-sentence summary, also used as the meta description */
  summary: string;
  /** Detail-page body copy, one paragraph per entry */
  body: string[];
  facts: EventFact[];
  agenda?: EventAgendaItem[];
  image: string;
  imageAlt: string;
  /** External registration / RSVP destination */
  registerHref: string;
  registerLabel: string;
  /** Short label used on the homepage rail */
  cta: string;
}

export const events: SiteEvent[] = [
  {
    slug: "duracoat-awards-2026",
    title: "AAK – Basco DuraCoat Awards of Excellence in Architecture",
    kicker: "Call for entries",
    date: "Entries close 18 March 2026",
    isoDate: "2026-03-18",
    location: "Nationwide · Kenya",
    venue: "Submissions online · Gala at the Sarit Expo Centre, Nairobi",
    status: "ongoing",
    summary:
      "Kenya's longest-running architecture prize. Nine categories, projects completed between 2020 and 2025, judged by a panel of practising architects and academics.",
    body: [
      "The Awards of Excellence have run since 1998 and remain the clearest public record of what Kenyan practices are actually building. Entries are judged on buildability, contextual response, environmental performance and the quality of the drawings submitted — not on renders.",
      "Nine categories are open: residential (single unit), residential (multi-unit), commercial, hospitality, institutional, industrial, public and civic, adaptive reuse, and best student project. A practice may enter the same project in only one category.",
      "Each submission needs a completed entry form, a project brief of no more than 800 words, measured drawings at a legible scale, and photography that shows the building in use. Incomplete submissions are returned, not rejected — you have until the deadline to correct them.",
    ],
    facts: [
      { label: "Entry deadline", value: "18 March 2026, 17:00 EAT" },
      { label: "Categories", value: "9, including Best Student Project" },
      { label: "Eligibility", value: "Projects completed 2020–2025 in East Africa" },
      { label: "Entry fee", value: "Members KES 10,000 · Students free" },
    ],
    agenda: [
      { time: "18 Mar", label: "Entries close, 17:00 EAT" },
      { time: "Apr", label: "Technical review and site verification" },
      { time: "May", label: "Jury deliberation and shortlist published" },
      { time: "Jun", label: "Winners announced at the awards gala" },
    ],
    image:
      "https://aak.or.ke/wp-content/uploads/2026/01/AAK-DURACOAT-AWARDS-OF-EXCELLENCE-2026-1-scaled.webp",
    imageAlt:
      "Campaign artwork for the AAK Basco DuraCoat Awards of Excellence in Architecture 2026",
    registerHref: "https://aak.or.ke/aak-duracoat-awards-2026-registration/",
    registerLabel: "Submit a project",
    cta: "Submit a project",
  },
  {
    slug: "convention-2026",
    title: "AAK Annual Convention",
    kicker: "Flagship gathering",
    date: "24 – 26 June 2026",
    isoDate: "2026-06-24",
    endIsoDate: "2026-06-26",
    location: "Kisumu",
    venue: "Acacia Premier Hotel, Kisumu",
    status: "upcoming",
    summary:
      "Three days in Kisumu: technical sessions, the chapters' annual general meetings, and the county-planning roundtable that sets AAK's policy positions for the year.",
    body: [
      "The convention is where the association's positions get argued out. Chapter AGMs run alongside technical tracks, so members vote on the same floor where the year's policy submissions are drafted.",
      "The 2026 edition sits in Kisumu deliberately. Lakefront development, informal settlement upgrading and the county's new zoning framework are on the programme, with the county planning department presenting alongside members practising in the region.",
      "Attendance carries 12 CPD points for members of all eight chapters. Registration covers all sessions, materials, lunches and the closing dinner; travel and accommodation are booked separately.",
    ],
    facts: [
      { label: "Dates", value: "24 – 26 June 2026" },
      { label: "Venue", value: "Acacia Premier Hotel, Kisumu" },
      { label: "CPD points", value: "12 across the three days" },
      { label: "Includes", value: "All sessions, materials, lunches, closing dinner" },
    ],
    agenda: [
      { time: "Day 1", label: "Opening plenary and county planning roundtable" },
      { time: "Day 2", label: "Technical tracks by chapter, followed by AGMs" },
      { time: "Day 3", label: "Site visits across Kisumu and closing dinner" },
    ],
    image: "https://aak.or.ke/wp-content/uploads/2025/05/0Q9A0926-1200x800.jpg",
    imageAlt: "Delegates in session at a previous AAK annual convention",
    registerHref: "https://members.aak.or.ke/",
    registerLabel: "Register for the convention",
    cta: "Register interest",
  },
  {
    slug: "build-tour-2026",
    title: "AAK Build Tour",
    kicker: "Site visits",
    date: "12 September 2026",
    isoDate: "2026-09-12",
    location: "Nairobi",
    venue: "Assembling at the Professional Centre, Parliament Road, Nairobi",
    status: "upcoming",
    summary:
      "A single day walking live construction sites in Nairobi with the project teams who are building them — structure exposed, contracts discussed, questions answered on site.",
    body: [
      "The Build Tour puts members on scaffolding rather than in a lecture hall. Four sites are visited in one day, each mid-construction, each presented by the architect, the quantity surveyor and the resident engineer together.",
      "Discussion is deliberately unpolished: what the tender assumed, what the ground actually gave, where the variation orders came from. Students attend at a reduced rate and are paired with practising members for the day.",
      "Numbers are capped at 60 for site-safety reasons. PPE is provided at the assembly point; closed footwear is mandatory and anyone without it will not be admitted to site.",
    ],
    facts: [
      { label: "Date", value: "12 September 2026, 07:30 – 17:00" },
      { label: "Sites", value: "Four live Nairobi projects" },
      { label: "Capacity", value: "60 places, allocated in order of payment" },
      { label: "Required", value: "Closed footwear · PPE provided" },
    ],
    agenda: [
      { time: "07:30", label: "Assembly, safety briefing and PPE issue" },
      { time: "08:30", label: "Sites one and two, with QS cost walkthrough" },
      { time: "13:00", label: "Lunch and open floor with the project teams" },
      { time: "14:30", label: "Sites three and four, closing at 17:00" },
    ],
    image:
      "https://aak.or.ke/wp-content/uploads/2021/08/AAK-BUILD-TOUR-66-1200x800-600x400-1.jpg",
    imageAlt: "AAK members touring a live construction site in hard hats and high-visibility vests",
    registerHref: "https://members.aak.or.ke/",
    registerLabel: "Book a place on the tour",
    cta: "View programme",
  },
  {
    slug: "cpd-series-2026",
    title: "Continuing Professional Development Series",
    kicker: "CPD · Monthly",
    date: "Third Thursday, monthly through 2026",
    isoDate: "2026-01-15",
    endIsoDate: "2026-12-17",
    location: "Hybrid · Nairobi and online",
    venue: "Professional Centre, Parliament Road, Nairobi — and streamed live",
    status: "ongoing",
    summary:
      "A two-hour technical session on the third Thursday of every month, run in Nairobi and streamed live, carrying two CPD points per sitting.",
    body: [
      "Each session takes one narrow subject and treats it properly: the 2026 calendar covers the amended building code, fire compartmentation in mixed-use towers, dispute avoidance in NCA contracts, and post-occupancy energy measurement.",
      "Sessions are led by practising members and, where relevant, by the regulator whose rules are under discussion. Slides and the recording are released to attendees within 48 hours.",
      "Two CPD points are logged automatically against your membership number for both in-person and live online attendance. Recordings watched afterwards do not carry points.",
    ],
    facts: [
      { label: "Frequency", value: "Third Thursday, monthly" },
      { label: "Duration", value: "Two hours, 17:00 – 19:00 EAT" },
      { label: "CPD points", value: "2 per session attended live" },
      { label: "Format", value: "In person in Nairobi, streamed live" },
    ],
    image: "https://aak.or.ke/wp-content/uploads/2025/06/1H5A2307-1200x800.jpg",
    imageAlt: "Members attending an AAK continuing professional development session",
    registerHref: "https://members.aak.or.ke/",
    registerLabel: "Book the next session",
    cta: "Book a session",
  },
];

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}

export interface Initiative {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  image: string;
  tone: "primary" | "green";
}

export const initiatives: Initiative[] = [
  {
    id: "mulika-mjengo",
    eyebrow: "Public safety advocacy",
    title: "Mulika Mjengo",
    description:
      "Anyone can flag a building that looks unsafe. Reports go to a chapter member for technical assessment, and confirmed cases are escalated to the county and the NCA.",
    href: "https://aak.or.ke/mulika-mjengo/",
    cta: "Report a concern",
    image: "https://aak.or.ke/wp-content/uploads/2025/06/1H5A2307-1200x800.jpg",
    tone: "primary",
  },
  {
    id: "grow-a-classroom",
    eyebrow: "Professional CSR",
    title: "Grow A Classroom",
    description:
      "Members donate the design and supervise construction of classrooms in under-served schools. Local artisans build; the school keeps the drawings.",
    href: "https://aak.or.ke/grow-a-classroom/",
    cta: "Explore the project",
    image:
      "https://aak.or.ke/wp-content/uploads/2021/08/AAK-BUILD-TOUR-66-1200x800-600x400-1.jpg",
    tone: "primary",
  },
  {
    id: "safari-green",
    eyebrow: "Sustainability rating",
    title: "Safari Green Building Index",
    description:
      "A rating tool written for East African climates, materials and labour — not adapted from a temperate standard. Assessed across energy, water, materials and site.",
    href: "https://aak.or.ke/safari-green-building-index/",
    cta: "View guidelines",
    image: "https://aak.or.ke/wp-content/uploads/2025/05/0Q9A0926-1200x800.jpg",
    tone: "green",
  },
];

export interface Chapter {
  name: string;
  href: string;
  image: string;
}

export const chapters: Chapter[] = [
  {
    name: "Architects",
    href: "https://aak.or.ke/architects-chapter/",
    image: "https://aak.or.ke/wp-content/uploads/2026/03/arch-scaled.webp",
  },
  {
    name: "Quantity Surveyors",
    href: "https://aak.or.ke/quantity-surveyors-chapter/",
    image: "https://aak.or.ke/wp-content/uploads/2026/03/QS.png",
  },
  {
    name: "Town Planners",
    href: "https://aak.or.ke/town-planners-chapter/",
    image: "https://aak.or.ke/wp-content/uploads/2026/03/TPC.jpg-scaled.jpeg",
  },
  {
    name: "Engineers",
    href: "https://aak.or.ke/engineers-chapter/",
    image: "https://aak.or.ke/wp-content/uploads/2026/03/Eng.png",
  },
  {
    name: "Landscape Architects",
    href: "https://aak.or.ke/landscape-architects-chapter/",
    image: "https://aak.or.ke/wp-content/uploads/2026/03/Landscape.jpeg",
  },
  {
    name: "Environmental Design Consultants",
    href: "https://aak.or.ke/environmental-design-consultants-chapter/",
    image: "https://aak.or.ke/wp-content/uploads/2026/03/EDC.JPG-scaled.jpeg",
  },
  {
    name: "Construction Project Managers",
    href: "https://aak.or.ke/construction-project-management-chapter/",
    image: "https://aak.or.ke/wp-content/uploads/2026/03/CPM.jpeg",
  },
  {
    name: "Interior Designers",
    href: "https://aak.or.ke/interior-designers-chapter/",
    image: "https://aak.or.ke/wp-content/uploads/2026/03/Interior-design-scaled.webp",
  },
];

export interface MediaItem {
  id: string;
  title: string;
  category: string;
  /** Longer caption shown in the lightbox */
  caption: string;
  image: string;
  /** Optional external document (PDF, article) */
  href?: string;
  hrefLabel?: string;
  span: "wide" | "tall" | "regular";
}

export const media: MediaItem[] = [
  {
    id: "agora",
    title: "The Agora — Best Student Project",
    category: "Awards",
    caption:
      "A civic gathering space organised around a stepped public court. Awarded Best Student Project at the Awards of Excellence.",
    image: "https://aak.or.ke/wp-content/uploads/2026/06/Screenshot-2026-06-08-164835.png",
    href: "https://aak.or.ke/wp-content/uploads/2026/05/THE-AGORA-PROJECT.pdf",
    hrefLabel: "Read the project brief (PDF)",
    span: "wide",
  },
  {
    id: "kigandani",
    title: "Kigandani Industrial Hub",
    category: "Student project",
    caption:
      "A light-industrial cluster planned around shared loading yards and a stormwater spine, submitted to the student category.",
    image: "https://aak.or.ke/wp-content/uploads/2026/06/Screenshot-2026-06-08-164317.png",
    href: "https://aak.or.ke/wp-content/uploads/2026/05/KIGANDANI-INDUSTRIAL-HUB-PROJECT.pdf",
    hrefLabel: "Read the project brief (PDF)",
    span: "regular",
  },
  {
    id: "ferry",
    title: "Mombasa Ferry Terminal",
    category: "Student project",
    caption:
      "A terminal proposal handling pedestrian and vehicle ferry traffic on a single tidal frontage, with shaded queuing halls.",
    image: "https://aak.or.ke/wp-content/uploads/2026/06/Screenshot-2026-06-08-163554.png",
    href: "https://aak.or.ke/wp-content/uploads/2026/05/MOMBASA-FERRY-TERMINAL-PROJECT.pdf",
    hrefLabel: "Read the project brief (PDF)",
    span: "regular",
  },
  {
    id: "kenyatta-institute",
    title: "Kenya Advanced Institute of Science and Technology",
    category: "Institutional",
    caption:
      "Laboratory and teaching blocks arranged around a shaded research quadrangle, with servicing routed below the deck.",
    image: "https://aak.or.ke/wp-content/uploads/2026/06/Screenshot-2026-05-06-170210.png",
    href: "https://aak.or.ke/wp-content/uploads/2026/05/KENYA-ADVANCED-INSTITUTE-OF-SCIENCE-OF-TECHNOLOGY-PROJECT.pdf",
    hrefLabel: "Read the project brief (PDF)",
    span: "tall",
  },
  {
    id: "build-tour",
    title: "Build Tour, on site",
    category: "Events",
    caption:
      "Members on a live Nairobi site during the Build Tour, walking the structural frame with the resident engineer.",
    image:
      "https://aak.or.ke/wp-content/uploads/2021/08/AAK-BUILD-TOUR-66-1200x800-600x400-1.jpg",
    span: "regular",
  },
  {
    id: "mzizi",
    title: "Mzizi ECD Centre",
    category: "Grow A Classroom",
    caption:
      "An early-childhood centre built with local artisans under member supervision, part of the Grow A Classroom programme.",
    image: "https://aak.or.ke/wp-content/uploads/2026/06/Screenshot-2026-05-07-091425.png",
    href: "https://aak.or.ke/wp-content/uploads/2026/05/MZIZI-ECD-CENTRE-PROJECT.pdf",
    hrefLabel: "Read the project brief (PDF)",
    span: "regular",
  },
];

export interface Publication {
  title: string;
  meta: string;
  href: string;
}

export const publications: Publication[] = [
  {
    title: "Memorandum on the Finance Bill 2025",
    meta: "Policy submission · PDF",
    href: "https://aak.or.ke/wp-content/uploads/2026/02/AAK-Memorandum-on-Finance-Bill-2025.pdf",
  },
  {
    title: "AAK AGM Report 2025",
    meta: "Governance · PDF",
    href: "https://aak.or.ke/wp-content/uploads/2026/02/AAK-AGM-Report-2025_compressed.pdf",
  },
  {
    title: "BuildPress Magazine 2025",
    meta: "Magazine · PDF",
    href: "https://aak.or.ke/wp-content/uploads/2026/02/AAK_BuildPress2025_Kisumu.pdf",
  },
];

/* Arbitration ------------------------------------------------------- */

export interface Arbitrator {
  name: string;
  discipline: string;
  credentials: string;
  focus: string;
  based: string;
}

/**
 * Placeholder roster. Replace with the profiles from the AAK arbitrators
 * document — the shape below is what the directory renders.
 */
export const arbitrators: Arbitrator[] = [
  {
    name: "Profile to be supplied",
    discipline: "Architect",
    credentials: "FCIArb · Registered Architect (BORAQS)",
    focus: "Construction contracts, extension-of-time and loss-and-expense claims",
    based: "Nairobi",
  },
  {
    name: "Profile to be supplied",
    discipline: "Quantity Surveyor",
    credentials: "MCIArb · Registered Quantity Surveyor (BORAQS)",
    focus: "Valuation disputes, final-account and variation claims",
    based: "Nairobi",
  },
  {
    name: "Profile to be supplied",
    discipline: "Engineer",
    credentials: "FCIArb · Registered Engineer (EBK)",
    focus: "Defects, structural failure and design-liability referrals",
    based: "Mombasa",
  },
  {
    name: "Profile to be supplied",
    discipline: "Town Planner",
    credentials: "MCIArb · Registered Physical Planner",
    focus: "Land use, boundary and development-control disputes",
    based: "Kisumu",
  },
];

export interface ArbitrationStep {
  step: string;
  title: string;
  body: string;
}

export const arbitrationSteps: ArbitrationStep[] = [
  {
    step: "01",
    title: "Check the contract clause",
    body: "Most JBC, FIDIC and NCA-standard contracts name AAK as the appointing authority. Find the dispute-resolution clause and confirm the wording before applying — it governs what the arbitrator can decide.",
  },
  {
    step: "02",
    title: "Submit the request",
    body: "Send the completed application form, a copy of the contract, the notice of dispute served on the other party, and the appointment fee to the AAK secretariat.",
  },
  {
    step: "03",
    title: "Appointment",
    body: "The President appoints from the AAK panel, matching the discipline to the dispute and checking for conflicts with both parties. Appointment is normally made within 14 days of a complete application.",
  },
  {
    step: "04",
    title: "Proceedings",
    body: "The arbitrator sets directions at a preliminary meeting: pleadings, documents, whether the matter proceeds on documents only or with a hearing, and the timetable to the award.",
  },
  {
    step: "05",
    title: "The award",
    body: "The award is final and binding under the Arbitration Act, 1995, and enforceable through the High Court. Appeal is limited to the narrow grounds the Act allows.",
  },
];
