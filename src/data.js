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
    id: "greenlens",
    name: "Greenlens",
    title: "Greenlens",
    tagline: "Microservice carbon-tracking platform",
    description:
      "Distributed sustainability platform that ingests receipts and utility bills via OCR, estimates carbon footprints with XGBoost models, and visualizes impact across microservices.",
    category: "AI/ML",
    tags: ["Next.js", "Node.js", "FastAPI", "MongoDB Atlas", "Tesseract OCR", "XGBoost"],
    github: "https://github.com/saptarshiUpadhyay2006/Green-Lens",
    githubUrl: "https://github.com/saptarshiUpadhyay2006/Green-Lens",
    live: "https://green-lens-nine.vercel.app/",
    demoUrl: "https://green-lens-nine.vercel.app/",
    image: "/projects/greenlens.png",
    featured: true,
  },
  {
    id: "homequest",
    name: "HomeQuest",
    title: "HomeQuest",
    tagline: "Full-stack rental marketplace",
    description:
      "End-to-end rental marketplace with secure auth, payment processing, and geospatial search — map-first discovery for tenants and landlords.",
    category: "Full-Stack",
    tags: ["Node.js", "Express", "MongoDB", "Passport.js", "Google OAuth", "Razorpay", "Mapbox GL"],
    github: "https://github.com/saptarshiUpadhyay2006/HomeQuest",
    githubUrl: "https://github.com/saptarshiUpadhyay2006/HomeQuest",
    live: "https://homequest-spuk.vercel.app/",
    demoUrl: "https://homequest-spuk.vercel.app/",
    image: "/projects/homequest.png",
    featured: true,
  },
  {
    id: "binivex",
    name: "Binivex",
    title: "Binivex",
    tagline: "Real-time stock analytics platform",
    description:
      "Live market analytics with streaming quotes, AI-generated insights, and event-driven background workflows for alerts and signal processing.",
    category: "Real-Time",
    tags: ["Next.js", "TypeScript", "Finnhub API", "Gemini API", "Inngest"],
    github: "https://github.com/saptarshiUpadhyay2006/Binivex",
    githubUrl: "https://github.com/saptarshiUpadhyay2006/Binivex",
    live: "https://binivex.vercel.app",
    demoUrl: "https://binivex.vercel.app",
    image: "/projects/binivex.png",
    featured: true,
  },
  {
    id: "maquette",
    name: "Maquette",
    title: "Maquette",
    tagline: "Real-Time Arbitrary Neural Style Transfer Engine & Web Application",
    description:
      "Maquette is a deep-learning neural style transfer system that performs instantaneous visual style transfer on arbitrary images using Adaptive Instance Normalization (AdaIN). It combines a multi-stage trained VGG-19 encoder-decoder network with an interactive Flask web interface for real-time artistically stylized rendering.",
    category: "AI/ML",
    tags: ["PyTorch", "Python", "Flask", "VGG-19", "AdaIN", "Docker", "Gunicorn", "Bootstrap 5"],
    github: "https://github.com/saptarshiUpadhyay2006/Maquette",
    githubUrl: "https://github.com/saptarshiUpadhyay2006/Maquette",
    live: "https://maquette-ai.onrender.com",
    demoUrl: "https://maquette-ai.onrender.com",
    image: "/projects/maquette.png",
    featured: true,
  },
  {
    id: "snipora",
    name: "Snipora",
    title: "Snipora",
    tagline: "AI-Powered Dialogue & Text Summarization Engine",
    description:
      "Snipora distills lengthy dialogues and long-form text into concise, contextually accurate abstractive summaries using a fine-tuned T5 Transformer model. It delivers a high-performance FastAPI inference backend paired with a clean web interface, containerized with Docker for seamless cloud deployment on Hugging Face Spaces.",
    category: "AI/ML",
    tags: ["Python", "PyTorch", "Transformers", "FastAPI", "Docker", "Hugging Face"],
    github: "https://github.com/saptarshiUpadhyay2006/Snipora",
    githubUrl: "https://github.com/saptarshiUpadhyay2006/Snipora",
    live: "https://huggingface.co/spaces/spuk2006-glitch/Snipora",
    demoUrl: "https://huggingface.co/spaces/spuk2006-glitch/Snipora",
    liveUrl: "https://huggingface.co/spaces/spuk2006-glitch/Snipora",
    image: "/projects/snipora.png",
    featured: true,
  },
];

export const CASE_STUDIES = {
  Greenlens: {
    id: "greenlens",
    title: "Greenlens",
    role: "Full-Stack & ML Engineer",
    problem:
      "Organizations can't act on carbon data trapped in unstructured receipts and utility bills — manual tracking simply doesn't scale.",
    problemStatement:
      "Organizations can't act on carbon data trapped in unstructured receipts and utility bills — manual tracking simply doesn't scale.",
    architecture: [
      "Next.js client behind an API gateway routing to independent microservices",
      "Node.js ingestion service handling document uploads and job dispatch",
      "Python FastAPI ML service: Tesseract OCR extraction, feature engineering, XGBoost carbon estimation",
      "MongoDB Atlas with per-service collections for true service isolation",
    ],
    highlights: [
      "OCR pipeline with confidence scoring and fallback heuristics for noisy scans",
      "Async job flow so ML inference never blocks the request path",
      "Each microservice scales, deploys, and fails independently",
    ],
    outcome: "End-to-end carbon tracking — from a raw receipt photo to a dashboard insight — fully automated.",
  },
  HomeQuest: {
    id: "homequest",
    title: "HomeQuest",
    role: "Full-Stack Engineer",
    problem:
      "Rental discovery is fragmented: listings, authentication, payments, and location search live in separate, clunky tools.",
    problemStatement:
      "Rental discovery is fragmented: listings, authentication, payments, and location search live in separate, clunky tools.",
    architecture: [
      "Express REST API with MongoDB persistence layer",
      "Passport.js sessions plus Google OAuth for frictionless sign-in",
      "Razorpay SDK order creation with server-side payment verification",
      "Mapbox GL JS map-first UI backed by MongoDB 2dsphere geospatial indexes",
    ],
    highlights: [
      "Geospatial queries return nearby listings in milliseconds",
      "Payment state machine keeps bookings consistent across Razorpay callbacks",
      "OAuth and local strategy unified under one session model",
    ],
    outcome: "A complete marketplace loop: discover on the map, authenticate, book, and pay — in one flow.",
  },
  Binivex: {
    id: "binivex",
    title: "Binivex",
    role: "Frontend & Platform Engineer",
    problem:
      "Retail traders juggle charts, news, and alerts across apps. Insight needs to be real-time and in one place.",
    problemStatement:
      "Retail traders juggle charts, news, and alerts across apps. Insight needs to be real-time and in one place.",
    architecture: [
      "Next.js + TypeScript app with strict typing across the data layer",
      "Finnhub API streaming live quotes and market data",
      "Google Gemini API generating contextual insights on price action",
      "Inngest event-driven workflows powering alerts and background jobs",
    ],
    highlights: [
      "Streaming quote UI stays responsive under rapid tick updates",
      "Durable, retryable background workflows via Inngest — no cron hacks",
      "AI insights cached and refreshed only on meaningful price movement",
    ],
    outcome: "A real-time analytics dashboard where live data, AI context, and alerting converge.",
  },
  Maquette: {
    id: "maquette",
    title: "Maquette — Real-Time Arbitrary Neural Style Transfer",
    role: "ML & Deep Learning Engineer",
    problem:
      "Traditional neural style transfer methods require computationally expensive per-image optimization (taking minutes per render) or fixed-style network retraining, creating severe latency bottlenecks that prevent real-time interactive artwork generation in web applications.",
    problemStatement:
      "Traditional neural style transfer methods require computationally expensive per-image optimization (taking minutes per render) or fixed-style network retraining, creating severe latency bottlenecks that prevent real-time interactive artwork generation in web applications.",
    architecture: [
      "ML Pipeline: Deep convolutional encoder-decoder network leveraging a frozen VGG-19 feature extractor and a custom inverted convolutional Decoder trained on content and style image datasets.",
      "Neural Transfer Core: Real-time feature space alignment via Adaptive Instance Normalization (AdaIN), matching mean and variance feature statistics across channel dimensions without requiring per-style network retraining.",
      "Backend Service: Lightweight Flask REST server executing PyTorch tensor inference with single-thread CPU execution tuning and dynamic style-content interpolation.",
      "Frontend & Deployment: Responsive Bootstrap 5 web interface enabling image uploads, alpha slider controls, and live previews, packaged in Docker and deployed via Gunicorn on Render.",
    ],
    highlights: [
      "Multi-Stage Coarse-to-Fine Training: Engineered a two-stage training workflow (Stage 1 at 256x256 resolution, Stage 2 at 512x512 with doubled style loss weight) to stabilize decoder gradient convergence and capture intricate high-frequency visual textures.",
      "Dynamic Latent Feature Interpolation: Implemented linear interpolation between normalized content features and AdaIN-transformed features (α · t + (1 - α) · c), giving users sub-second control over content preservation vs. style intensity.",
      "CPU-Optimized Server Inference: Streamlined PyTorch tensor operations and set CPU thread limits (`torch.set_num_threads(1)`) to deliver sub-second inference times without relying on expensive GPU server instances.",
    ],
    outcome:
      "Eliminated per-style retraining bottlenecks to deliver sub-second arbitrary neural style transfer with customizable artistic intensity in a lightweight, web-accessible application.",
  },
  Snipora: {
    id: "snipora",
    title: "Snipora — AI Text Summarizer",
    role: "ML & NLP Engineer",
    category: "AI/ML & NLP",
    problem:
      "Processing long conversational transcripts and documents manually is time-consuming and inefficient for users needing fast insights. Existing commercial APIs often introduce per-token costs and privacy concerns, while standard models require optimization to deliver low-latency dialogue summarization on cost-effective hardware.",
    problemStatement:
      "Processing long conversational transcripts and documents manually is time-consuming and inefficient for users needing fast insights. Existing commercial APIs often introduce per-token costs and privacy concerns, while standard models require optimization to deliver low-latency dialogue summarization on cost-effective hardware.",
    architecture: [
      "ML Pipeline: Fine-tuned Hugging Face T5 (Text-to-Text Transfer Transformer) sequence-to-sequence model tailored for abstractive text and conversation reduction.",
      "Backend API: Asynchronous FastAPI server providing a clean `/summarize/` endpoint with regex-based data sanitization and tokenization pipelines.",
      "Frontend Interface: Lightweight HTML5/CSS3 template served via Jinja2 with modern asynchronous JavaScript (`fetch`) for seamless real-time interactions.",
      "Containerization & Deployment: Dockerized container (`python:3.11-slim`) equipped with dynamic hardware-acceleration detection (Apple MPS, NVIDIA CUDA, CPU) hosted on Hugging Face Spaces.",
    ],
    highlights: [
      "Hardware-Adaptive Acceleration: Designed automatic PyTorch device resolution supporting Apple Silicon (MPS), CUDA GPU, and CPU fallbacks to maximize inference throughput across diverse deployment targets.",
      "Tuned Generation Parameters: Configured T5 beam search decoding (4 beams) with strict sequence bounds (max 512 input / 150 output tokens) to achieve cohesive summary fidelity while preventing runaway compute delays.",
      "Self-Contained Container Builds: Engineered a Docker workflow that extracts embedded model weights at build time, eliminating runtime remote download dependencies and minimizing cold-start latencies.",
    ],
    outcome:
      "Delivers coherent, high-accuracy abstractive summaries under 1.5s per request using an end-to-end containerized open-source NLP architecture.",
  },
};

CASE_STUDIES.maquette = CASE_STUDIES.Maquette;
CASE_STUDIES.greenlens = CASE_STUDIES.Greenlens;
CASE_STUDIES.homequest = CASE_STUDIES.HomeQuest;
CASE_STUDIES.binivex = CASE_STUDIES.Binivex;
CASE_STUDIES.snipora = CASE_STUDIES.Snipora;

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
