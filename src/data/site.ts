export type EventStatus = "ongoing" | "upcoming";

export interface SiteEvent {
  id: string;
  title: string;
  kicker: string;
  date: string;
  isoDate: string;
  endIsoDate?: string;
  location: string;
  status: EventStatus;
  href: string;
  cta: string;
}

export const events: SiteEvent[] = [
  {
    id: "duracoat-awards-2026",
    title: "AAK – Basco DuraCoat Awards of Excellence in Architecture",
    kicker: "Call for entries",
    date: "Entries close 18 March 2026",
    isoDate: "2026-03-18",
    location: "Nationwide · Kenya",
    status: "ongoing",
    href: "https://aak.or.ke/aak-duracoat-awards-2026-registration/",
    cta: "Submit a project",
  },
  {
    id: "convention-2026",
    title: "AAK Annual Convention",
    kicker: "Flagship gathering",
    date: "24 – 26 June 2026",
    isoDate: "2026-06-24",
    endIsoDate: "2026-06-26",
    location: "Kisumu",
    status: "upcoming",
    href: "https://members.aak.or.ke/",
    cta: "Register interest",
  },
  {
    id: "build-tour-2026",
    title: "AAK Build Tour",
    kicker: "Site visits",
    date: "12 September 2026",
    isoDate: "2026-09-12",
    location: "Nairobi",
    status: "upcoming",
    href: "https://members.aak.or.ke/",
    cta: "View programme",
  },
  {
    id: "cpd-series-2026",
    title: "Continuing Professional Development Series",
    kicker: "CPD · Monthly",
    date: "Running through 2026",
    isoDate: "2026-01-15",
    location: "Hybrid",
    status: "ongoing",
    href: "https://members.aak.or.ke/",
    cta: "Book a session",
  },
];

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
      "Report buildings that pose safety risks. Public vigilance backed by professional assessment keeps Kenyan communities safe.",
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
      "Members design and build learning spaces across Kenya, transforming educational infrastructure school by school.",
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
      "East Africa's green building certification, calibrated for African climates, materials and construction practice.",
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
  image: string;
  href: string;
  span: "wide" | "tall" | "regular";
}

export const media: MediaItem[] = [
  {
    id: "agora",
    title: "The Agora — Best Student Project winner",
    category: "Awards",
    image: "https://aak.or.ke/wp-content/uploads/2026/06/Screenshot-2026-06-08-164835.png",
    href: "https://aak.or.ke/wp-content/uploads/2026/05/THE-AGORA-PROJECT.pdf",
    span: "wide",
  },
  {
    id: "kigandani",
    title: "Kigandani Industrial Hub",
    category: "Student project",
    image: "https://aak.or.ke/wp-content/uploads/2026/06/Screenshot-2026-06-08-164317.png",
    href: "https://aak.or.ke/wp-content/uploads/2026/05/KIGANDANI-INDUSTRIAL-HUB-PROJECT.pdf",
    span: "regular",
  },
  {
    id: "ferry",
    title: "Mombasa Ferry Terminal",
    category: "Student project",
    image: "https://aak.or.ke/wp-content/uploads/2026/06/Screenshot-2026-06-08-163554.png",
    href: "https://aak.or.ke/wp-content/uploads/2026/05/MOMBASA-FERRY-TERMINAL-PROJECT.pdf",
    span: "regular",
  },
  {
    id: "kenyatta-institute",
    title: "Kenya Advanced Institute of Science and Technology",
    category: "Institutional",
    image: "https://aak.or.ke/wp-content/uploads/2026/06/Screenshot-2026-05-06-170210.png",
    href: "https://aak.or.ke/wp-content/uploads/2026/05/KENYA-ADVANCED-INSTITUTE-OF-SCIENCE-OF-TECHNOLOGY-PROJECT.pdf",
    span: "tall",
  },
  {
    id: "build-tour",
    title: "AAK Build Tour on site",
    category: "Events",
    image:
      "https://aak.or.ke/wp-content/uploads/2021/08/AAK-BUILD-TOUR-66-1200x800-600x400-1.jpg",
    href: "https://aak.or.ke/",
    span: "regular",
  },
  {
    id: "mzizi",
    title: "Mzizi ECD Centre",
    category: "Grow A Classroom",
    image: "https://aak.or.ke/wp-content/uploads/2026/06/Screenshot-2026-05-07-091425.png",
    href: "https://aak.or.ke/wp-content/uploads/2026/05/MZIZI-ECD-CENTRE-PROJECT.pdf",
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

export const navLinks = [
  { label: "About", href: "https://aak.or.ke/about-us/" },
  { label: "Chapters", href: "#chapters" },
  { label: "Events", href: "#events" },
  { label: "Projects", href: "#initiatives" },
  { label: "Media", href: "#media" },
  { label: "Publications", href: "#publications" },
];
