# Saptarshi Upadhyay — Portfolio

> Full-Stack Engineer & AI Systems Builder · IT Undergrad @ Jadavpur University

A pixel-perfect, production-grade personal portfolio built with **React 18 + Vite + Tailwind CSS + Framer Motion**. Rebuilt end-to-end from design through deployment.

---

## ✨ Features

- **Interactive Particle Canvas** — real-time cursor-reactive particle network in the hero
- **3D Tilt Profile Card** — perspective tilt driven by mouse position
- **Live Typewriter Terminal** — animated typing loop of real work items
- **Smooth Lenis Scrolling** — buttery 1.15s scroll inertia site-wide
- **Animated Section FX** — per-section particle fields, orbs, and star layers
- **Project Case Study Modals** — full architecture breakdowns + product screenshots
- **Filter Tabs** — category filter on the projects grid (All / AI/ML / Full-Stack / Real-Time)
- **Searchable Skills Matrix** — real-time fuzzy filter across the entire tech stack
- **Recharts Contest Chart** — contest-by-contest rating progression with rich tooltips (name, date, rank, solved)
- **Interactive Terminal Contact** — real UNIX-style shell (`whoami`, `skills`, `projects`, `ratings`, `contact`, `clear`)
- **Live IST Clock** in the footer
- **Sonner Toast Notifications** for the contact form

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS v3 (utility-first) + custom CSS animations |
| Animations | Framer Motion 11 |
| Smooth Scroll | Lenis |
| Charts | Recharts |
| Dialog / Overlay | Radix UI Dialog |
| Icons | Lucide React |
| Toasts | Sonner |
| HTTP | Axios |
| Data Fetching | TanStack React Query |

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
# Clone the repo
git clone https://github.com/saptarshiUpadhyay2006/portfolio-2.git
cd portfolio-2

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 📁 Project Structure

```
portfolio-2/
├── public/
│   ├── avatar.jpg           # Profile photo
│   └── projects/
│       ├── greenlens.png    # Project screenshots
│       ├── homequest.png
│       └── binivex.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx          # Particle canvas + 3D card
│   │   ├── Marquee.jsx
│   │   ├── Manifesto.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx      # Case study modals
│   │   ├── Achievements.jsx  # CP stats + chart
│   │   ├── Skills.jsx        # Searchable matrix
│   │   ├── Leadership.jsx
│   │   ├── TerminalContact.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionFX.jsx     # Per-section background FX
│   │   ├── Shared.jsx        # RevealLine, FadeIn, SectionHeading
│   │   └── ui/dialog.jsx     # Radix UI dialog wrapper
│   ├── data.js               # All content (projects, skills, CP stats, etc.)
│   ├── index.css             # Tailwind base + custom animations
│   ├── index.jsx
│   └── App.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🔗 Featured Projects

| Project | Description | Live |
|---|---|---|
| [Greenlens](https://github.com/saptarshiUpadhyay2006/Green-Lens) | Microservice carbon-tracking platform · OCR + XGBoost | [green-lens-nine.vercel.app](https://green-lens-nine.vercel.app/) |
| [HomeQuest](https://github.com/saptarshiUpadhyay2006/HomeQuest) | Full-stack rental marketplace · Razorpay + Mapbox | [homequest-spuk.vercel.app](https://homequest-spuk.vercel.app/) |
| [Binivex](https://github.com/saptarshiUpadhyay2006/Binivex) | Real-time stock analytics · Gemini AI + Inngest | [binivex.vercel.app](https://binivex.vercel.app) |

---

## 📊 Competitive Programming

| Platform | Rating | Rank |
|---|---|---|
| LeetCode | 1882 | Knight · Top 5% |
| Codeforces | 1437 | Specialist |

---

## 📄 License

MIT — feel free to fork and adapt with attribution.

---

*© 2026 Saptarshi Upadhyay · Engineered with intent*
