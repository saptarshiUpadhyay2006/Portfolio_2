export const LINKS = {
  github: "https://github.com/saptarshiUpadhyay2006",
  linkedin: "https://www.linkedin.com/in/saptarshi-upadhyay/",
  email: "upadhyay.saptarshi@gmail.com",
  resume: "https://drive.google.com/file/d/1_foUjalODzHxTdmsjr9ypM7pz_D_58wH/view?usp=sharing",
};

export const MARQUEE_ITEMS = [
  "AUTONOMOUS DEFENSE AI",
  "DISTRIBUTED SYSTEMS",
  "LEETCODE KNIGHT 1882",
  "HIGH-THROUGHPUT COMPUTING",
  "AI-NATIVE ENGINEERING",
  "FULL-STACK ARCHITECTURE",
  "CODEFORCES SPECIALIST",
  "PRODUCTION-GRADE SOFTWARE",
];

export const MANIFESTO = [
  {
    num: "01",
    title: "High-Performance Foundations",
    body: "Systems thinking from the metal up. C/C++ roots, deep DSA rigor, and an obsession with latency, throughput, and the last 5% of performance most engineers never chase.",
  },
  {
    num: "02",
    title: "AI-Native Systems",
    body: "Not AI as a feature — AI as architecture. OCR pipelines, XGBoost inference, Gemini-powered analytics, and multi-sensor defense platforms built to run in production.",
  },
  {
    num: "03",
    title: "Rigorous Problem Solving",
    body: "1,000+ problems solved. Knight on LeetCode. Specialist on Codeforces. Competitive programming isn't a hobby — it's the training ground for engineering under pressure.",
  },
];

export const EXPERIENCE = {
  role: "Software Engineer Intern",
  company: "Aarish AI Technologies Inc.",
  period: "March 2026 — May 2026",
  project: "Project LORROS — Defense Systems",
  bullets: [
    "Engineered backend REST APIs for LORROS, an autonomous defense platform, serving real-time tactical data pipelines.",
    "Optimized database query paths and indexing, delivering a measurable 5–8% throughput boost across core services.",
    "Maintained system stability and zero-regression deployments across 3 consecutive production release cycles.",
  ],
  tags: ["REST APIs", "Database Optimization", "Python", "Defense Systems", "Production Releases"],
};

export const PROJECTS = [
  {
    name: "Greenlens",
    tagline: "Microservice carbon-tracking platform",
    description:
      "Distributed sustainability platform that ingests receipts and utility bills via OCR, estimates carbon footprints with XGBoost models, and visualizes impact across microservices.",
    category: "AI/ML",
    tags: ["Next.js", "Node.js", "FastAPI", "MongoDB Atlas", "Tesseract OCR", "XGBoost"],
    github: "https://github.com/saptarshiUpadhyay2006/Green-Lens",
    live: "https://green-lens-nine.vercel.app/",
    image: "/projects/greenlens.jpg",
  },
  {
    name: "HomeQuest",
    tagline: "Full-stack rental marketplace",
    description:
      "End-to-end rental marketplace with secure auth, payment processing, and geospatial search — map-first discovery for tenants and landlords.",
    category: "Full-Stack",
    tags: ["Node.js", "Express", "MongoDB", "Passport.js", "Google OAuth", "Razorpay", "Mapbox GL"],
    github: "https://github.com/saptarshiUpadhyay2006/HomeQuest",
    live: "https://homequest-spuk.vercel.app/",
    image: "/projects/homequest.jpg",
  },
  {
    name: "Binivex",
    tagline: "Real-time stock analytics platform",
    description:
      "Live market analytics with streaming quotes, AI-generated insights, and event-driven background workflows for alerts and signal processing.",
    category: "Real-Time",
    tags: ["Next.js", "TypeScript", "Finnhub API", "Gemini API", "Inngest"],
    github: "https://github.com/saptarshiUpadhyay2006/Binivex",
    live: "https://binivex.vercel.app",
    image: "/projects/binivex.jpg",
  },
];

export const CP_STATS = {
  leetcode: { rating: 1882, label: "Knight", top: "Top 5%", solved: "1,000+" },
  codeforces: { rating: 1437, label: "Specialist", solved: "250+" },
};

export const RATING_HISTORY = [
  { contest: "WC 372", name: "Weekly Contest 372", date: "Nov 2023", leetcode: 1460, codeforces: 1140, rank: "3,820", solved: 2 },
  { contest: "BW 119", name: "Biweekly Contest 119", date: "Dec 2023", leetcode: 1535, codeforces: 1215, rank: "2,940", solved: 3 },
  { contest: "WC 380", name: "Weekly Contest 380", date: "Jan 2024", leetcode: 1618, codeforces: 1270, rank: "2,110", solved: 3 },
  { contest: "BW 124", name: "Biweekly Contest 124", date: "Feb 2024", leetcode: 1680, codeforces: 1315, rank: "1,780", solved: 3 },
  { contest: "WC 388", name: "Weekly Contest 388", date: "Mar 2024", leetcode: 1725, codeforces: 1352, rank: "1,420", solved: 3 },
  { contest: "BW 129", name: "Biweekly Contest 129", date: "Apr 2024", leetcode: 1778, codeforces: 1390, rank: "1,150", solved: 3 },
  { contest: "WC 396", name: "Weekly Contest 396", date: "May 2024", leetcode: 1832, codeforces: 1418, rank: "890", solved: 4 },
  { contest: "BW 134", name: "Biweekly Contest 134", date: "Jun 2024", leetcode: 1882, codeforces: 1437, rank: "620", solved: 4 },
];

export const HACKATHONS = [
  { name: "HackSprint", detail: "Top 8 National Finalist", venue: "IIEST Shibpur" },
  { name: "East India Blockchain Summit", detail: "Finalist", venue: "IIT Kharagpur" },
  { name: "IEEE Double Slash 4.0", detail: "Finalist", venue: "IEEE" },
];

export const SKILLS = [
  { pillar: "Languages", items: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python", "SQL"] },
  { pillar: "Frontend & Mobile", items: ["React", "Next.js", "React Native"] },
  { pillar: "Backend & Data", items: ["Node.js", "Express", "MongoDB"] },
  { pillar: "DevOps & Tools", items: ["Git", "Docker", "Kubernetes"] },
  { pillar: "AI / ML", items: ["AI/ML Systems", "NumPy", "Pandas"] },
];

export const LEADERSHIP = [
  {
    org: "ACM Student Chapter, JU",
    role: "Web Developer",
    impact: "Co-developed Synchronicity, the chapter's flagship event platform serving 500+ users.",
    metric: "500+",
    metricLabel: "platform users",
  },
  {
    org: "CodeClub JUSL",
    role: "Development Coordinator",
    impact:
      "Built the club's official website and the Srijan 2026 merchandise platform, engineered for high concurrency at 5,000+ attendee scale.",
    metric: "5,000+",
    metricLabel: "attendees supported",
  },
];
