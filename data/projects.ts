export type ProjectCategory =
  | "All"
  | "Web Development"
  | "AI / ML"
  | "Deep Learning"
  | "Python"
  | "Other";

export type ProjectStatus = "Completed" | "In Progress" | "Concept";

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  shortDescription: string;
  detailedDescription: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  isRepoVerified: boolean;
  repoName?: string;
  highlights: string[];
  visualGradient: string;
  iconName: string;
  architectureDetails?: string;
  keyFeatures?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "ev-charging-platform",
    title: "EV Charging Station Discovery & Booking Platform",
    category: "Web Development",
    status: "In Progress",
    shortDescription:
      "Developing a platform concept that helps electric vehicle owners discover nearby EV charging stations, view charging availability, and plan charging sessions.",
    detailedDescription:
      "An intelligent EV infrastructure web platform engineered to eliminate range anxiety and charging friction for electric vehicle drivers. The platform maps verified charging stations with real-time socket availability, connector standards, and integrates a pre-booking concept to schedule charging slots effectively.",
    techStack: [
      "Web Development",
      "EV Technology",
      "JavaScript",
      "Responsive Web Design",
      "Geolocation",
    ],
    featured: true,
    isRepoVerified: false,
    highlights: [
      "Featured in Official Resume",
      "Discovers nearby EV charging stations with live availability",
      "Booking concept allowing EV drivers to reserve charging slots",
      "Improves convenience, planning, and accessibility for green transport",
    ],
    visualGradient: "from-emerald-600/25 via-teal-900/30 to-slate-900/60",
    iconName: "Zap",
    architectureDetails:
      "Frontend architected for rapid geographic queries and responsive mobile mapping, integrating booking state logic and accessibility-first responsive design.",
    keyFeatures: [
      "Geolocation search locating operational EV charging points within radius",
      "Connector compatibility filters (Type 2, CCS, CHAdeMO)",
      "Advance session booking and arrival window coordination",
      "Intuitive mobile-first responsive user interface",
    ],
  },
  {
    id: "red-connect",
    title: "Red-connect",
    category: "Web Development",
    status: "Completed",
    shortDescription:
      "Technology-based application that connects users through a centralized platform with an accessible interface to its core services, focusing on simplifying user access and improving connectivity.",
    detailedDescription:
      "Red-connect is a modern centralized emergency platform connecting voluntary donors with healthcare recipients in real-time. Features interactive Mapbox mapping, secure donor onboarding, and automated emergency routing powered by Supabase and Drizzle ORM.",
    techStack: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Mapbox GL",
      "Supabase",
      "Drizzle ORM",
      "Radix UI",
    ],
    githubUrl: "https://github.com/ajithreddy1608/Red-connect",
    featured: true,
    isRepoVerified: true,
    repoName: "Red-connect",
    highlights: [
      "Featured in Official Resume & Verified Public GitHub Repo",
      "Centralized emergency matching system with accessible interface",
      "Interactive Mapbox geolocation mapping for nearby donors",
      "Full-stack architecture with Supabase persistent data layer",
    ],
    visualGradient: "from-rose-500/20 via-red-900/30 to-slate-900/60",
    iconName: "HeartPulse",
    architectureDetails:
      "Engineered with React 18, Vite, React Query, and Tailwind CSS; integrates Mapbox GL for geospatial queries and Supabase for real-time donor state and notifications.",
    keyFeatures: [
      "Emergency blood request workflow with urgency prioritization",
      "Interactive map pin highlighting available registered donors",
      "Role-based donor profiles with blood group and contact verification",
      "Accessible high-contrast UI compliant with modern web standards",
    ],
  },
  {
    id: "online-resume-builder",
    title: "Online Resume Builder",
    category: "Web Development",
    status: "Completed",
    shortDescription:
      "Developed a resume-building application that helps users organize personal details, education, technical skills, and work experience, simplifying the resume creation process through a structured application.",
    detailedDescription:
      "A fast, modern resume creation tool built with React and Vite. It provides an intuitive multi-section form interface where users can dynamically configure education, experience, technical skills, projects, and personal contact details with instant visual updates in an ATS-compliant template.",
    techStack: ["React", "JavaScript", "Vite", "Axios", "CSS3", "HTML5"],
    githubUrl: "https://github.com/ajithreddy1608/Online-Resume-Builder",
    featured: true,
    isRepoVerified: true,
    repoName: "Online-Resume-Builder",
    highlights: [
      "Featured in Official Resume & Verified Public GitHub Repo",
      "Simplifies the resume creation process through a structured application",
      "Instant real-time preview rendering with reactive state updates",
      "Modular section adding, editing, and formatting",
    ],
    visualGradient: "from-cyan-500/20 via-sky-900/30 to-slate-900/60",
    iconName: "FileSpreadsheet",
    architectureDetails:
      "Client-side React application bundled with Vite for instantaneous hot-reloads and optimized bundling, maintaining reactive form state without external latency.",
    keyFeatures: [
      "Real-time dual-pane editor and preview layout",
      "Structured data input for education, skills, and work history",
      "Clean typographic hierarchy formatted for recruiter readability",
      "Zero external backend dependency for fast client-side performance",
    ],
  },
  {
    id: "processor-architecture-design",
    title: "Processor Architecture Design",
    category: "AI / ML",
    status: "Completed",
    shortDescription:
      "Explores processor architecture and computer organization, including processor components and their roles in executing instructions, demonstrating knowledge of computer architecture and digital system design.",
    detailedDescription:
      "Built with Python and FastAPI, this systems-level computational project simulates hardware execution profiles for deep learning tensor operations. It benchmarks large-scale matrix multiplications across modeled CPU cores, GPU parallel execution units, and specialized TPU systolic arrays, evaluating memory latency, algorithmic throughput, and parallelism trade-offs.",
    techStack: [
      "Python",
      "FastAPI",
      "NumPy",
      "Computer Architecture",
      "Digital System Design",
    ],
    githubUrl: "https://github.com/ajithreddy1608/Processor-Architecture-Design",
    featured: true,
    isRepoVerified: true,
    repoName: "Processor-Architecture-Design",
    highlights: [
      "Featured in Official Resume & Verified Public GitHub Repo",
      "Explores processor components and their roles in executing instructions",
      "Demonstrates practical knowledge of digital system design",
      "Simulates matrix workloads across CPU, GPU, and TPU architectures",
    ],
    visualGradient: "from-blue-600/20 via-indigo-900/30 to-slate-900/60",
    iconName: "Cpu",
    architectureDetails:
      "Engineered in Python with NumPy for heavy matrix tensor operations, wrapped in high-throughput FastAPI endpoints with visual methodology diagrams and execution logs.",
    keyFeatures: [
      "Configurable matrix dimension scaling for load benchmarking",
      "Comparative execution metrics between single-thread CPU and simulated TPU parallel arrays",
      "Clean RESTful API interfaces for hardware parameter probing",
      "Detailed architectural methodology and execution reports",
    ],
  },
  {
    id: "plant-leaf-disease-detection",
    title: "Plant Leaf Disease Detection Using CNN & Random Forest",
    category: "AI / ML",
    status: "Completed",
    shortDescription:
      "Dual-model computer vision diagnostic pipeline identifying agricultural crop diseases from foliage imagery using deep CNN feature extractors and Random Forest classification.",
    detailedDescription:
      "An applied machine learning system addressing agricultural health monitoring. By processing macroscopic leaf images through a customized Convolutional Neural Network (CNN) combined with an ensemble Random Forest classifier, the system accurately detects disease signatures, pest infestations, and nutrient deficiencies with high precision.",
    techStack: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Convolutional Neural Networks (CNN)",
      "Random Forest",
    ],
    featured: true,
    isRepoVerified: false,
    highlights: [
      "Hybrid deep learning and ensemble classification pipeline",
      "Automated image preprocessing, normalization, and augmentation with OpenCV",
      "Multi-class disease categorization with diagnostic confidence scores",
    ],
    visualGradient: "from-emerald-500/20 via-teal-900/30 to-slate-900/60",
    iconName: "Leaf",
  },
  {
    id: "old-photo-restoration",
    title: "Old Photograph Restoration Using Deep Generative Models",
    category: "Deep Learning",
    status: "In Progress",
    shortDescription:
      "Deep generative pipeline repairing historical degraded photographs by eliminating scratches, surface cracks, sensor noise, and color fading via neural synthesis.",
    detailedDescription:
      "A deep learning research project applying modern generative models (GANs and perceptual loss networks) to reconstruct antique and damaged photographs, synthesizing missing visual textures while preserving facial fidelity.",
    techStack: ["Python", "PyTorch", "Generative Adversarial Networks (GANs)", "OpenCV", "Deep Learning"],
    featured: true,
    isRepoVerified: false,
    highlights: [
      "Dual-branch architecture for defect localization and semantic inpainting",
      "Perceptual loss optimization for sharp, photo-realistic texture restoration",
      "Non-destructive historical imagery revitalization",
    ],
    visualGradient: "from-amber-500/20 via-purple-900/30 to-slate-900/60",
    iconName: "Sparkles",
  },
];
