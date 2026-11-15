# Katta Ajith Reddy — Personal Portfolio Website

A personal portfolio website engineered with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and an **Apple-inspired Liquid Glass (Glisse) UI/UX**.

Designed to professionally represent **Katta Ajith Reddy** — Computer Science student specializing in Artificial Intelligence and Machine Learning at Aurora Deemed University.

---

## 🌟 Key Highlights & Architecture

- **Design System — Liquid Glass UI/UX**: Realistic backdrop blur, translucent glass surfaces, specular rim highlights, subtle gradients, and glowing accents in electric blue and cyan.
- **Section 01: Hero / Introduction**: High-impact split layout featuring Ajith's real photograph (`/ajith.jpg`) in a liquid glass frame, verified credentials, and instant CTAs.
- **Section 02: About Me**: Authentic human narrative outlining engineering foundations, AI/ML specialization, systems thinking, and professional goals.
- **Section 03: Technical Skills**: Categorized glass cards for Programming Languages, Web Development, AI & Machine Learning, and Engineering Tools.
- **Section 04: Selected Projects**:
  - **RedConnect**: Full-stack emergency blood donor matching platform with Mapbox geolocation, Supabase, and Drizzle ORM.
  - **Processor Architecture Design**: Systems-level simulation and benchmarking across CPU, GPU, and TPU architectures using Python and FastAPI.
  - **Online Resume Builder**: Real-time reactive ATS-friendly CV builder.
  - **Plant Leaf Disease Detection**: Deep CNN + Random Forest agricultural diagnostic pipeline.
  - **Old Photograph Restoration**: Deep generative restoration pipeline.
  - **CineVerse**: Cinematic media exploration and discovery experience.
  - **Live GitHub Repositories Explorer**: Synchronized via Next.js API route (`/api/github/repos`) to explore all public repositories with real-time search.
- **Section 05: Academic Journey**: Aurora Deemed University (B.Tech in CSE-AIML, 3rd Year, Section 3C) with relevant technical coursework and laboratory projects.
- **Section 06: Certifications & Achievements**: Verified industry credentials and workshops from Microsoft & Skill India, StaxTech AI/ML Internship, Google for Developers & SmartBridge (Generative AI & Antigravity), MentorX & IEEE (Microsoft MVP in AI), be10x, and LearnTube.ai, alongside national hackathons (HackWithHyderabad, Vibe With India 2.0) and venture credentials (Wadhwani Global Entrepreneur).
- **Section 07: Professional Experience**: Digital Marketing Internship at Sashverse Technologies Pvt. Ltd. (*Workverse*), detailing core responsibilities and deliverables.
- **Section 08: Resume / CV**: Downloadable PDF link (`public/Ajith-Reddy-Resume.pdf`) and interactive summary preview modal.
- **Section 09: Contact**: Direct communication channels (email, phone, LinkedIn, GitHub) and a validated message interface.
- **Floating Liquid Glass Navigation**: Active section tracker, smooth scrolling, and responsive mobile glass drawer.
- **Production-Ready**: Zero broken links, accessible markup, Open Graph / SEO metadata, and custom 404 page.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations & Effects**: Tailwind CSS transitions, CSS Backdrop Filter & Liquid Glass styling

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and [npm](https://www.npmjs.com/) installed.

### 1. Installation

```bash
npm install
```

### 2. Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## 🌐 Deployment to Vercel

The portfolio is pre-configured for seamless deployment to [Vercel](https://vercel.com/):

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository (`ajithreddy1608/portfolio` or your repo name).
4. Vercel automatically detects Next.js. Keep default build settings (`npm run build`).
5. Click **Deploy**.

---

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── github/
│   │       └── repos/
│   │           └── route.ts         # GitHub public repos API
│   ├── globals.css                  # Liquid glass & Glisse utility classes
│   ├── layout.tsx                   # SEO, Open Graph & Root Layout
│   ├── not-found.tsx                # Custom 404 page
│   └── page.tsx                     # Main page orchestrator
├── components/
│   ├── About.tsx                    # Section 02: About Me
│   ├── BackgroundBlobs.tsx          # Ambient cyan/blue liquid glows
│   ├── Certifications.tsx           # Section 06: Verified credentials
│   ├── Contact.tsx                  # Section 09: Contact & messaging
│   ├── Education.tsx                # Section 05: Academic timeline
│   ├── Experience.tsx               # Section 07: Workverse internship
│   ├── Footer.tsx                   # Liquid glass footer
│   ├── GitHubReposExplorer.tsx      # Interactive GitHub repos viewer
│   ├── Hero.tsx                     # Section 01: Hero with real photo
│   ├── Navbar.tsx                   # Floating liquid glass navigation
│   ├── ProjectCard.tsx              # Project card component
│   ├── ProjectModal.tsx             # Interactive project detail dialog
│   ├── Projects.tsx                 # Section 04: Selected projects
│   ├── Resume.tsx                   # Section 08: Resume preview & CTA
│   ├── ScrollProgress.tsx           # Liquid glass scroll progress bar
│   └── Skills.tsx                   # Section 03: Categorized skills
├── data/
│   ├── certifications.ts            # Easy-to-update certificates data
│   ├── education.ts                 # Academic timeline data
│   ├── experience.ts                # Professional experience records
│   ├── projects.ts                  # Featured and candidate projects
│   └── skills.ts                    # Technical skills database
├── lib/
│   └── utils.ts                     # Utility helpers
├── public/
│   ├── ajith.jpg                    # Personal profile photograph
│   └── Ajith-Reddy-Resume.pdf       # Place resume PDF here
├── next.config.mjs                  # Remote image patterns & configuration
├── tailwind.config.ts               # Custom liquid glass theme
└── tsconfig.json                    # TypeScript configuration
```

---

## 📄 Personal Information Reference

- **Name**: Katta Ajith Reddy
- **Display Name**: Katta Ajith Reddy
- **Location**: Hyderabad, Telangana, India
- **Email**: [kattaajithreddy08@gmail.com](mailto:kattaajithreddy08@gmail.com)
- **Phone**: +91 8555064188
- **GitHub**: [github.com/ajithreddy1608](https://github.com/ajithreddy1608)
- **LinkedIn**: [linkedin.com/in/ajit-reddy-k](https://www.linkedin.com/in/ajit-reddy-k)
