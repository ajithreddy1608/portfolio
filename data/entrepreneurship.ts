export interface EntrepreneurshipInitiative {
  id: string;
  name: string;
  subtitle: string;
  role: string;
  category: string;
  established?: string;
  parentBrand?: string;
  tagline: string;
  philosophy?: string[];
  logoPath: string;
  logoPresentation: "square" | "wide";
  externalUrl: string;
  actionLabel: string;
  description: string;
  services?: string[];
  gradientTheme: {
    border: string;
    glow: string;
    badge: string;
  };
}

export const entrepreneurshipData = {
  sectionTitle: "Entrepreneurship & Leadership",
  sectionIntro:
    "Alongside my technical and academic work, I am building a parent brand and a digital services initiative.",
  initiatives: [
    {
      id: "as-everything-starts-here",
      name: "AS – Everything Starts Here",
      subtitle: "Founder-led Parent Brand",
      role: "Founder",
      category: "Parent Brand / Entrepreneurial Identity",
      established: "2026",
      tagline: "Everything Starts Here.",
      philosophy: [
        "Start with an idea.",
        "Build with purpose.",
        "Learn through action.",
        "Grow through consistency.",
        "Turn ambition into meaningful work.",
      ],
      logoPath: "/as-logo.png",
      logoPresentation: "square",
      externalUrl: "https://www.aseverythingstartshere.in/",
      actionLabel: "Visit AS Website",
      description:
        "AS – Everything Starts Here is my founder-led personal brand and entrepreneurial initiative. It represents my ambition to explore ideas, build meaningful ventures, create opportunities, and turn possibilities into reality.\n\nIt is the starting point for my entrepreneurial journey, bringing together aspiration, creativity, technology, business thinking, and execution.\n\nMy vision is to build something meaningful from the ground up, experiment with new ideas, and create opportunities that can grow into impactful ventures.",
      gradientTheme: {
        border: "border-blue-500/30 hover:border-blue-400/50",
        glow: "rgba(59, 130, 246, 0.2)",
        badge: "bg-blue-500/10 text-cyan-300 border-blue-500/25",
      },
    },
    {
      id: "as-works",
      name: "AS-Works",
      subtitle: "Founder · Digital Services & Creative Studio",
      role: "Digital Services & Freelance Initiative",
      category: "Digital Services / Business",
      parentBrand: "AS – Everything Starts Here",
      tagline: "Your Vision. Our Execution.",
      logoPath: "/as-works-logo.png",
      logoPresentation: "wide",
      externalUrl: "https://www.instagram.com/asworks.in/",
      actionLabel: "Visit Instagram",
      description:
        "AS-Works is my digital services and freelancing initiative, focused on helping individuals and businesses bring their ideas to life through technology, design, and digital solutions.\n\nIt reflects my interest in building websites, creating digital experiences, developing brand identities, and delivering practical solutions that help businesses establish and improve their online presence.",
      services: [
        "Website Design & Development",
        "UI/UX Design",
        "Branding & Graphic Design",
        "Digital Marketing",
        "Creative Digital Solutions",
        "AI & Automation Services",
      ],
      gradientTheme: {
        border: "border-cyan-500/30 hover:border-cyan-400/50",
        glow: "rgba(6, 182, 212, 0.2)",
        badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25",
      },
    },
  ] as EntrepreneurshipInitiative[],
};
