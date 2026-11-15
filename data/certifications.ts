export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  imageUrl?: string;
  skills: string[];
  description: string;
  featured: boolean;
  category: "Certification" | "Workshop" | "Specialization";
}

export interface AchievementItem {
  id: string;
  title: string;
  organization?: string;
  year: string;
  role: string;
  description: string;
  highlights: string[];
  category: "Innovation & Competition" | "Entrepreneurship";
}

export const certificationsData: CertificationItem[] = [
  {
    id: "ibm-skillsbuild-ai",
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    issueDate: "Dec 2025",
    category: "Certification",
    skills: ["Artificial Intelligence", "Machine Learning Foundations", "Ethics in AI", "AI Systems"],
    description:
      "Comprehensive certification covering foundational artificial intelligence concepts, cognitive technologies, machine learning paradigms, and ethical frameworks in computing.",
    featured: true,
  },
  {
    id: "staxtech-web-cert",
    title: "Web Development Internship Certificate",
    issuer: "StaxTech",
    issueDate: "2025",
    category: "Certification",
    skills: ["HTML5", "CSS3", "JavaScript", "Frontend Development", "Responsive Design"],
    description:
      "Official certificate recognizing completion of a 4-week web development internship with practical hands-on experience in building modern responsive web interfaces.",
    featured: true,
  },
  {
    id: "google-genai-cloud",
    title: "Google Generative AI & Google Cloud AI Learning",
    issuer: "Google Cloud",
    issueDate: "2025",
    category: "Specialization",
    skills: ["Generative AI", "LLMs", "Prompt Design in Agent Platform", "Responsible AI with Google Cloud"],
    description:
      "Specialized learning path mastering Google's modern AI ecosystem: Intro to Generative AI, Large Language Models (LLMs), Prompt Design in Agent Platform, and Responsible AI implementation on Google Cloud.",
    featured: true,
  },
  {
    id: "three-day-genai-workshop",
    title: "3-Day Generative AI Workshop",
    issuer: "Industry AI Masterclass",
    issueDate: "2025",
    category: "Workshop",
    skills: ["AI/ML Fundamentals", "LLMs", "RAG (Retrieval-Augmented Generation)", "Prompt Engineering", "Responsible AI"],
    description:
      "Intensive 3-day technical workshop exploring state-of-the-art Generative AI pipelines, architectural principles of RAG, prompt tuning strategies, and ethical AI deployment.",
    featured: true,
  },
  {
    id: "python-using-ai-workshop",
    title: "Python Using AI Workshop",
    issuer: "AI for Techies",
    issueDate: "2025",
    category: "Workshop",
    skills: ["Python", "AI Integration", "Automated Scripting", "Developer Productivity"],
    description:
      "Hands-on workshop exploring AI-augmented Python programming, code synthesis, debugging workflows, and intelligent script automation.",
    featured: false,
  },
  {
    id: "ai-tools-workshop",
    title: "AI Tools Workshop",
    issuer: "be10x",
    issueDate: "2025",
    category: "Workshop",
    skills: ["AI Tooling", "Workflow Automation", "Productivity Acceleration", "Prompt Design"],
    description:
      "Accelerated workshop on deploying cutting-edge AI tools to streamline technical tasks, automate workflows, and boost engineering productivity.",
    featured: false,
  },
  {
    id: "coursera-public-speaking",
    title: "Introduction to Public Speaking",
    issuer: "University of Washington (via Coursera)",
    credentialId: "EXX2CLZ2RH3Y",
    verificationUrl: "https://www.coursera.org/account/accomplishments/verify/EXX2CLZ2RH3Y",
    imageUrl:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~EXX2CLZ2RH3Y/CERTIFICATE_LANDING_PAGE~EXX2CLZ2RH3Y.jpeg",
    skills: ["Effective Communication", "Audience Analysis", "Speech Structuring", "Technical Presentation"],
    description:
      "Verified mastery of dynamic verbal communication, speech structuring, audience engagement, and confident technical presentation through the University of Washington.",
    featured: true,
    category: "Certification",
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: "loreal-brandstorm",
    title: "L'Oréal Brandstorm 2026",
    organization: "L'Oréal",
    year: "2026",
    role: "Participant & Team Innovator",
    category: "Innovation & Competition",
    description:
      "Participated in the premier global innovation competition, exploring creative problem-solving, disruptive tech-driven concepts, and entrepreneurial thinking for modern consumer experiences.",
    highlights: [
      "Explored innovation, creative problem-solving, and entrepreneurial thinking",
      "Pitched technology-driven consumer concepts to industry standards",
      "Applied cross-disciplinary teamwork and market validation techniques",
    ],
  },
  {
    id: "freshbite-box",
    title: "FreshBite Box",
    year: "2025 – 2026",
    role: "Founder / Business Concept Developer",
    category: "Entrepreneurship",
    description:
      "Developed a complete end-to-end fruit-box delivery business concept: market research, business planning, product offerings, subscription pricing models, and digital customer acquisition strategies.",
    highlights: [
      "Conducted extensive market research and customer segment identification",
      "Structured tiered subscription pricing models and logistics planning",
      "Engineered digital marketing channels and social media acquisition funnels",
    ],
  },
];
