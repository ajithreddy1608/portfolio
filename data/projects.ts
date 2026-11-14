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
    id: "red-connect",
    title: "RedConnect — Blood Donor & Emergency Match Platform",
    category: "Web Development",
    status: "Completed",
    shortDescription:
      "A real-time emergency healthcare platform connecting blood donors with recipients using interactive geolocation mapping, donor dashboard, and automated request workflows.",
    detailedDescription:
      "RedConnect is a modern full-stack web application designed to eliminate delays during critical blood emergency situations. It enables urgent blood requests, prospective donor registration, real-time radius-based donor discovery with interactive Mapbox integration, and verified donor contact channels powered by Supabase and Drizzle ORM.",
    techStack: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Mapbox GL",
      "Supabase",
      "Drizzle ORM",
      "Radix UI",
      "Zod",
    ],
    githubUrl: "https://github.com/ajithreddy1608/Red-connect",
    featured: true,
    isRepoVerified: true,
    repoName: "Red-connect",
    highlights: [
      "Verified Public GitHub Repository",
      "Real-time Mapbox geolocation mapping for nearby donors",
      "Supabase database with Drizzle ORM migrations",
      "Role-based donor dashboard and urgent request workflows",
    ],
    visualGradient: "from-rose-500/20 via-red-900/30 to-slate-900/60",
    iconName: "HeartPulse",
    architectureDetails:
      "Frontend architected with Vite + React 18, React Query, and Tailwind CSS; integrates Mapbox GL for geospatial queries and Supabase for persistent donor records and authentication.",
    keyFeatures: [
      "Quick Emergency Blood Request Form with urgency classification",
      "Interactive donor map highlighting nearby active voluntary donors",
      "Donor onboarding with blood group, location coordinates, and availability status",
      "Accessible, high-contrast user interface built with Radix UI primitives",
    ],
  },
  {
    id: "processor-architecture-design",
    title: "Processor Architecture Simulation & AI Benchmarking",
    category: "AI / ML",
    status: "Completed",
    shortDescription:
      "High-performance architecture simulation suite benchmarking computational speed, parallel matrix operations, and execution latency across CPU, GPU, and TPU architectures.",
    detailedDescription:
      "Built with Python and FastAPI, this systems-level computational project simulates hardware execution profiles for deep learning tensor operations. It benchmarks large-scale matrix multiplications across modeled CPU cores, GPU parallel execution units, and specialized TPU systolic arrays, evaluating memory latency, algorithmic throughput, and parallelism trade-offs.",
    techStack: [
      "Python",
      "FastAPI",
      "NumPy",
      "High-Performance Computing",
      "Hardware Architecture Simulation",
    ],
    githubUrl: "https://github.com/ajithreddy1608/Processor-Architecture-Design",
    featured: true,
    isRepoVerified: true,
    repoName: "Processor-Architecture-Design",
    highlights: [
      "Verified Public GitHub Repository",
      "FastAPI microservice serving matrix benchmark endpoints",
      "Hardware simulation across CPU, GPU, and TPU architectures",
      "Parallelism and execution speedup analysis for AI workloads",
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
    id: "online-resume-builder",
    title: "Interactive Online Resume Builder",
    category: "Web Development",
    status: "Completed",
    shortDescription:
      "A responsive dynamic web application allowing developers and professionals to craft tailored, ATS-friendly resumes with live real-time preview and export.",
    detailedDescription:
      "A fast, modern resume creation tool built with React and Vite. It provides an intuitive multi-section form interface where users can dynamically configure education, experience, technical skills, projects, and personal contact details with instant visual updates in an ATS-compliant template.",
    techStack: ["React", "JavaScript", "Vite", "Axios", "CSS3", "HTML5"],
    githubUrl: "https://github.com/ajithreddy1608/Online-Resume-Builder",
    featured: true,
    isRepoVerified: true,
    repoName: "Online-Resume-Builder",
    highlights: [
      "Verified Public GitHub Repository",
      "Instant real-time resume preview rendering",
      "Modular dynamic section adding and reordering",
      "Clean, modern client-side application architecture",
    ],
    visualGradient: "from-cyan-500/20 via-sky-900/30 to-slate-900/60",
    iconName: "FileSpreadsheet",
    architectureDetails:
      "Lightweight React application bundled with Vite for instantaneous hot-reloads and optimized production bundling, maintaining reactive form state without external latency.",
    keyFeatures: [
      "Real-time dual-pane editor and preview layout",
      "Structured data input for education, skills, and work history",
      "Clean typographic hierarchy formatted for recruiter readability",
      "Zero external backend dependency for fast client-side performance",
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
      "NumPy",
      "Matplotlib",
    ],
    featured: true,
    isRepoVerified: false,
    highlights: [
      "Hybrid deep learning and ensemble classification pipeline",
      "Automated image preprocessing, normalization, and augmentation with OpenCV",
      "Multi-class disease categorization with diagnostic confidence scores",
      "Visualized confusion matrices and feature map activation heatmaps",
    ],
    visualGradient: "from-emerald-500/20 via-teal-900/30 to-slate-900/60",
    iconName: "Leaf",
    architectureDetails:
      "Image processing and tensor pipeline developed in Python using OpenCV for contouring and segmentation, TensorFlow/Keras for CNN representation learning, and Scikit-Learn for ensemble classification.",
    keyFeatures: [
      "Automated segmentation isolating infected leaf regions from background noise",
      "Data augmentation generating robust invariance against lighting and angle shifts",
      "Comparative performance benchmarking between pure CNN and hybrid Random Forest",
      "Actionable diagnostic readouts for rapid crop management intervention",
    ],
  },
  {
    id: "old-photo-restoration",
    title: "Old Photograph Restoration Using Deep Generative Models",
    category: "Deep Learning",
    status: "In Progress",
    shortDescription:
      "Deep generative pipeline repairing historical degraded photographs by eliminating scratches, surface cracks, sensor noise, and color fading via neural synthesis.",
    detailedDescription:
      "A deep learning research project applying modern generative models (GANs and perceptual loss networks) to reconstruct antique and damaged photographs. The architecture separates structural defect detection (scratch and tear masking) from global enhancement, synthesizing missing visual textures while preserving facial fidelity.",
    techStack: [
      "Python",
      "PyTorch",
      "Generative Adversarial Networks (GANs)",
      "OpenCV",
      "Deep Learning",
      "Computer Vision",
    ],
    featured: true,
    isRepoVerified: false,
    highlights: [
      "Dual-branch architecture for defect localization and semantic inpainting",
      "Perceptual loss optimization for sharp, photo-realistic texture restoration",
      "Comprehensive scratch, blur, and noise reduction on vintage media",
      "Non-destructive historical imagery revitalization",
    ],
    visualGradient: "from-amber-500/20 via-purple-900/30 to-slate-900/60",
    iconName: "Sparkles",
    architectureDetails:
      "PyTorch-based generative neural network integrating U-Net style generator networks, patch-based discriminator critics, and VGG-based perceptual reconstruction losses.",
    keyFeatures: [
      "Automatic scratch and tear detection mask generation",
      "Context-aware texture synthesis restoring degraded image segments",
      "Adaptive tone curve enhancement and color balance recovery",
      "High-resolution output preserving authentic vintage photograph aesthetics",
    ],
  },
  {
    id: "cineverse-streaming",
    title: "CineVerse — Cinematic Movie Discovery Platform",
    category: "Web Development",
    status: "Completed",
    shortDescription:
      "A fluid, modern media exploration web app featuring dynamic category filtering, cinematic backdrop displays, trailer previews, and liquid glass card interactions.",
    detailedDescription:
      "CineVerse is a next-generation entertainment discovery platform built with Next.js and Tailwind CSS. Featuring curated trending releases, detailed synopsis viewports, trailer modals, and real-time genre filtering, all rendered within an Apple-inspired liquid glass aesthetic.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TMDB API",
      "Framer Motion",
    ],
    featured: true,
    isRepoVerified: false,
    highlights: [
      "High-performance media exploration with client-side filtering",
      "Fluid liquid glass cards with subtle refraction and glow effects",
      "Dynamic search and genre categorization",
      "Mobile-first responsive streaming interface",
    ],
    visualGradient: "from-violet-500/20 via-indigo-900/30 to-slate-900/60",
    iconName: "Film",
    architectureDetails:
      "Engineered with Next.js App Router for optimal image loading and SSR performance, styled with custom liquid glass utilities and Framer Motion micro-interactions.",
    keyFeatures: [
      "Curated media catalogs with live trending feeds",
      "Interactive media details with cast, ratings, and video previews",
      "Fluid glassmorphic UI with dynamic backdrop color bleed",
      "Smooth touch gestures and desktop keyboard navigation",
    ],
  },
  {
    id: "student-marks-analyzer",
    title: "Student Marks Analyzer & Academic Performance Engine",
    category: "Python",
    status: "Completed",
    shortDescription:
      "Automated Python analytical utility computing statistical distributions, grade distributions, anomaly detection, and visual academic reporting.",
    detailedDescription:
      "A modular data analysis program for processing academic evaluation records. Provides automated calculation of mean, median, standard deviations, subject percentiles, and automatic export of graphical performance charts using Matplotlib and Pandas.",
    techStack: ["Python", "NumPy", "Matplotlib", "Data Analysis", "Automation"],
    featured: false,
    isRepoVerified: false,
    highlights: [
      "Comprehensive statistical analysis of multi-subject academic records",
      "Automated visualization of score spreads, histograms, and rankings",
      "Batch processing of institutional datasets",
    ],
    visualGradient: "from-blue-500/20 via-sky-900/30 to-slate-900/60",
    iconName: "BarChart3",
  },
  {
    id: "iot-noise-detection",
    title: "Noise Detection & Removal in IoT Sensor Streams",
    category: "AI / ML",
    status: "Concept",
    shortDescription:
      "Signal processing and anomaly filtering algorithm designed to detect and clean aberrant sensor noise in IoT telemetry data streams.",
    detailedDescription:
      "An algorithm-centric project applying digital filtering techniques and Kalman filters alongside statistical anomaly thresholds to suppress high-frequency noise and sudden spike artifacts from low-power microcontroller telemetry streams.",
    techStack: ["Python", "Signal Processing", "NumPy", "IoT Data", "Algorithms"],
    featured: false,
    isRepoVerified: false,
    highlights: [
      "Real-time stream filtering algorithms for IoT sensor telemetry",
      "Adaptive noise thresholding and outlier suppression",
      "Benchmarked against synthetic noisy sensor data distributions",
    ],
    visualGradient: "from-teal-500/20 via-cyan-900/30 to-slate-900/60",
    iconName: "Activity",
  },
];
