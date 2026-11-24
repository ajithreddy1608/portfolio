# Katta Ajith Reddy — Personal Portfolio Website

A personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, using a restrained editorial style with a warm neutral palette and subtle translucent navigation.

Designed to professionally represent **Katta Ajith Reddy** — Computer Science student specializing in Artificial Intelligence and Machine Learning at Aurora Deemed University.

---

## 🌟 Key Highlights & Architecture

- **Design System**: Editorial serif headings, charcoal type, warm off-white surfaces, restrained motion, and subtle navigation blur.
- **Hero / Introduction**: Split layout with Ajith's photograph (`/ajith.jpg`), direct introduction, and resume and project links.
- **About Me**: Personal introduction to Ajith's engineering interests and work as founder of AS and AS-Works.
- **Selected Projects**:
  - **RedConnect**: Full-stack emergency blood donor matching platform with Mapbox geolocation, Supabase, and Drizzle ORM.
  - **Processor Architecture Design**: Systems-level simulation and benchmarking across CPU, GPU, and TPU architectures using Python and FastAPI.
  - **Online Resume Builder**: Real-time reactive ATS-friendly CV builder.
  - **Plant Leaf Disease Detection**: Deep CNN + Random Forest agricultural diagnostic pipeline.
  - **Old Photograph Restoration**: Deep generative restoration pipeline.
  - **CineVerse**: Cinematic media exploration and discovery experience.
  - **Live GitHub Repositories Explorer**: Synchronized via Next.js API route (`/api/github/repos`) to explore all public repositories with real-time search.
- **Entrepreneurship & Leadership**: AS – Everything Starts Here and AS-Works, with brand copy, philosophy, service list, logos, and external links.
- **Technical Skills**: Categorized groups for Programming Languages, Web Development, AI & Machine Learning, and Engineering Tools.
- **Academic Journey**: Aurora Deemed University (B.Tech in CSE-AIML, 3rd Year, Section 3C) with relevant technical coursework and laboratory projects.
- **Certifications & Achievements**: Industry credentials, workshops, hackathons, and venture credentials.
- **Professional Experience**: Digital Marketing Internship at Sashverse Technologies Pvt. Ltd. (*Workverse*), detailing core responsibilities and deliverables.
- **Resume / CV**: Downloadable PDF link (`public/Ajith-Reddy-Resume.pdf`) and interactive summary preview modal.
- **Contact**: Direct communication channels (email, phone, LinkedIn, GitHub) and a validated message interface.
- **Responsive Navigation**: Translucent header, active section tracker, smooth scrolling, and mobile menu.
- **Production-Ready**: Zero broken links, accessible markup, Open Graph / SEO metadata, and custom 404 page.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations & Effects**: Short transitions, smooth in-page navigation, and reduced-motion support

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
│   ├── globals.css                  # Editorial theme and shared surfaces
│   ├── layout.tsx                   # SEO, Open Graph & Root Layout
│   ├── not-found.tsx                # Custom 404 page
│   └── page.tsx                     # Main page orchestrator
├── components/
│   ├── About.tsx                    # About Ajith
│   ├── Certifications.tsx           # Verified credentials
│   ├── Contact.tsx                  # Contact & messaging
│   ├── Education.tsx                # Academic timeline
│   ├── Experience.tsx               # Workverse internship
│   ├── Footer.tsx                   # Portfolio footer and social links
│   ├── GitHubReposExplorer.tsx      # Interactive GitHub repos viewer
│   ├── Hero.tsx                     # Introduction with real photo
│   ├── Navbar.tsx                   # Responsive translucent navigation
│   ├── Entrepreneurship.tsx         # AS and AS-Works ventures
│   ├── ProjectCard.tsx              # Project card component
│   ├── ProjectModal.tsx             # Interactive project detail dialog
│   ├── Projects.tsx                 # Selected projects
│   ├── Resume.tsx                   # Resume preview & CTA
│   ├── ScrollProgress.tsx           # Scroll progress indicator
│   └── Skills.tsx                   # Categorized technical skills
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
│   ├── as-logo.png                  # AS parent brand logo
│   ├── as-works-logo.png            # AS-Works logo
│   └── Ajith-Reddy-Resume.pdf       # Place resume PDF here
├── next.config.mjs                  # Remote image patterns & configuration
├── tailwind.config.ts               # Tailwind theme configuration
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
