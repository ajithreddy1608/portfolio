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
  imageUrl?: string;
  certificateUrl?: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "staxtech-aiml-cert",
    title: "Artificial Intelligence & Machine Learning Internship Certificate",
    issuer: "StaxTech",
    issueDate: "May 2025",
    credentialId: "STAXP037",
    category: "Certification",
    imageUrl: "/certificates/staxtech-aiml-internship.webp",
    verificationUrl: "/certificates/staxtech-aiml-internship.pdf",
    skills: ["Artificial Intelligence", "Machine Learning", "Python", "Data Modeling", "Algorithm Implementation"],
    description:
      "Official certificate recognizing completion of a 1-month engineering internship as an Artificial Intelligence/Machine Learning Intern at StaxTech, signed by Pawan Kushwaha, Founder & CEO.",
    featured: true,
  },
  {
    id: "mentorx-bootcamp",
    title: "15-Hour LIVE Bootcamp on AI/ML & Freelancing",
    issuer: "MentorX, Microsoft MVP & IEEE Young Professionals",
    issueDate: "May 2025",
    category: "Workshop",
    imageUrl: "/certificates/mentorx-aiml-freelancing-bootcamp.webp",
    verificationUrl: "/certificates/mentorx-aiml-freelancing-bootcamp.jpg",
    skills: ["AI/ML Solutions", "Advanced Prompting", "Generative AI Freelancing", "Client Delivery", "Solution Architecture"],
    description:
      "Intensive 15-hour live bootcamp organized by MentorX Community and IEEE Young Professionals under the mentorship of Mr. Abhilekh Verma (Microsoft MVP in AI, Mentor at Microsoft for Startups, IBM, IIT Guwahati & WE Hub).",
    featured: true,
  },
  {
    id: "microsoft-python",
    title: "Python Programming",
    issuer: "Microsoft & Skill India Digital Hub (NSDC)",
    issueDate: "May 2026",
    category: "Certification",
    imageUrl: "/certificates/python-programming-microsoft.webp",
    verificationUrl: "/certificates/python-programming-microsoft.pdf",
    skills: ["Python", "OOP", "Data Structures", "Algorithms", "Software Development"],
    description:
      "Official 40-hour Python Programming certification offered by Microsoft through the Skill India Digital Hub (NSDC), authorized by Manju Dhasmana, India Senior Director, CSR, Microsoft.",
    featured: true,
  },
  {
    id: "google-genai-antigravity",
    title: "Google Generative AI Foundations & Antigravity Workshop",
    issuer: "Google for Developers & SmartBridge",
    issueDate: "Sep 2026",
    credentialId: "WS-GAI-2026-1791",
    category: "Workshop",
    imageUrl: "/certificates/google-generative-ai-smartbridge.webp",
    verificationUrl: "/certificates/google-generative-ai-smartbridge.pdf",
    skills: ["Generative AI", "Vertex AI", "Prompt Design", "Google Antigravity", "LLM Workflows", "AI Agents"],
    description:
      "Intensive workshop conducted by SmartBridge in partnership with Google for Developers. Demonstrated active participation and mastery in Generative AI, Prompt Design in Vertex AI, and Google Antigravity.",
    featured: true,
  },
  {
    id: "be10x-ai-tools-cert",
    title: "AI Tools & ChatGPT Workshop",
    issuer: "be10x",
    issueDate: "Mar 2025",
    category: "Workshop",
    imageUrl: "/certificates/be10x-ai-tools-workshop.webp",
    verificationUrl: "/certificates/be10x-ai-tools-workshop.pdf",
    skills: ["ChatGPT", "AI Productivity", "Rapid Data Analysis", "AI-Augmented Coding", "Presentation Generation"],
    description:
      "Verified certificate of completion for be10x AI tools and ChatGPT masterclass. Certified in rapid presentation creation, data analysis, and AI-accelerated code debugging.",
    featured: true,
  },
  {
    id: "learntube-pm-cert",
    title: "Project Management Assessment",
    issuer: "LearnTube.ai",
    issueDate: "Jun 2025",
    credentialId: "DJA-B-1-1356914-0",
    category: "Certification",
    imageUrl: "/certificates/learntube-project-management.webp",
    verificationUrl: "/certificates/learntube-project-management.jpg",
    skills: ["Project Management", "Agile Execution", "Workflow Optimization", "Task Prioritization", "Delivery Management"],
    description:
      "Official certificate of completion for passing the Project Management Assessment by LearnTube.ai, signed by Co-founders Shronit Ladhani & Gargi Ruparelia.",
    featured: true,
  },
  {
    id: "sashverse-internship-cert",
    title: "Digital Marketing Internship Completion Certificate",
    issuer: "Sashverse Technologies Pvt. Ltd.",
    issueDate: "Jun 2026",
    category: "Certification",
    imageUrl: "/certificates/sashverse-internship-certificate.webp",
    verificationUrl: "/certificates/sashverse-internship-certificate.pdf",
    skills: ["SEO", "Social Media Marketing", "Email Campaigns", "Content Strategy", "Agile & SDLC", "Lead Generation"],
    description:
      "Official certificate of completion for full-time Digital Marketing Internship. Recognized for outstanding performance ('Very Good' rating) across SEO, campaign management, and cross-functional Agile execution.",
    featured: true,
  },
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
  {
    id: "three-day-genai-workshop",
    title: "3-Day Generative AI Workshop",
    issuer: "Industry AI Masterclass",
    issueDate: "2025",
    category: "Workshop",
    skills: ["AI/ML Fundamentals", "LLMs", "RAG (Retrieval-Augmented Generation)", "Prompt Engineering", "Responsible AI"],
    description:
      "Intensive 3-day technical workshop exploring state-of-the-art Generative AI pipelines, architectural principles of RAG, prompt tuning strategies, and ethical AI deployment.",
    featured: false,
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
];

export const achievementsData: AchievementItem[] = [
  {
    id: "hackwithhyderabad",
    title: "HackWithHyderabad Hackathon",
    organization: "HackWithIndia & Devnovate (at Microsoft Office, Hyderabad)",
    year: "2026",
    role: "In-Person Hackathon Innovator",
    category: "Innovation & Competition",
    imageUrl: "/certificates/hackwithhyderabad-microsoft.webp",
    certificateUrl: "/certificates/hackwithhyderabad-microsoft.jpg",
    description:
      "Actively participated in the prestigious in-person HackWithHyderabad Hackathon held at Microsoft Office, Hyderabad. Recognized for creativity, collaborative problem-solving, and building tech solutions in the true spirit of innovation.",
    highlights: [
      "Competed in-person at Microsoft Office campus, Hyderabad",
      "Engineered collaborative technology solutions under intense hackathon timeframe",
      "Official Certificate of Participation signed by Aviral Bhardwaj, Founder, HackWithIndia",
    ],
  },
  {
    id: "vibe-with-india",
    title: "Vibe With India 2.0 (Virtual Hackathon)",
    organization: "HackWithIndia & Devnovate (CertifyHub)",
    year: "March 2026",
    role: "Virtual Hackathon Participant & Developer",
    category: "Innovation & Competition",
    imageUrl: "/certificates/vibe-with-india-hackathon.webp",
    certificateUrl: "/certificates/vibe-with-india-hackathon.pdf",
    description:
      "Showcased technical dedication, agile development, and inventive execution in the national Virtual Hackathon VIBE WITH INDIA held on 20th March 2026.",
    highlights: [
      "Engineered technical solutions in a fast-paced nationwide virtual competition",
      "Demonstrated agility, problem-solving, and cross-functional execution",
      "Officially issued by HackWithIndia and Devnovate CertifyHub",
    ],
  },
  {
    id: "ignite-india-venture",
    title: "Ignite India Program — Certified Practice Venture",
    organization: "Wadhwani Global Entrepreneur & Aurora Higher Education Academy",
    year: "Dec 2025",
    role: "Venture Creator & Entrepreneurial Fellow",
    category: "Entrepreneurship",
    imageUrl: "/certificates/ignite-india-wadhwani.webp",
    certificateUrl: "/certificates/ignite-india-wadhwani.pdf",
    description:
      "Successfully graduated from the intensive 42-hour Ignite India entrepreneurial program by Wadhwani Global Entrepreneur, developing a Certified Practice Venture recognized for excellence and real-world impact.",
    highlights: [
      "Completed 42 hours of rigorous venture building and market validation training",
      "Developed a Certified Practice Venture recognized for excellence and real-world impact",
      "Honored with Certificate of Proficiency signed by Meetul Patel, President, Wadhwani Global Entrepreneur",
    ],
  },
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
