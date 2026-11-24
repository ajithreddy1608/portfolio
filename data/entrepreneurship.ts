export interface EntrepreneurshipInitiative {
  id: string;
  name: string;
  subtitle: string;
  role: string;
  category: string;
  established?: string;
  parentBrand?: string;
  tagline: string;
  philosophy?: string;
  logoPath: string;
  logoPresentation: "square" | "wide";
  externalUrl: string;
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
    "Alongside my technical work, I am building through AS – Everything Starts Here and developing AS-WORKS as a digital services and creative studio.",
  initiatives: [
    {
      id: "as-everything-starts-here",
      name: "AS – Everything Starts Here",
      subtitle: "Founder-led Parent Brand",
      role: "Founder",
      category: "Parent Brand / Entrepreneurial Identity",
      established: "2026",
      tagline: "Everything Starts Here.",
      philosophy: "Start with an idea. Build with intention. Grow with purpose.",
      logoPath: "/as-logo.png",
      logoPresentation: "square",
      externalUrl: "https://www.instagram.com/as.thebeginning/",
      description:
        "AS – Everything Starts Here is a founder-led parent brand established in 2026 with the vision of building a diversified ecosystem of businesses, ideas and opportunities. It represents the starting point of ideas, the development of independent ventures and the journey of transforming possibilities into meaningful outcomes. AS is built around a long-term vision of entrepreneurship, creativity, innovation and intentional growth.",
      gradientTheme: {
        border: "border-blue-500/30 hover:border-blue-400/50",
        glow: "rgba(59, 130, 246, 0.2)",
        badge: "bg-blue-500/10 text-cyan-300 border-blue-500/25",
      },
    },
    {
      id: "as-works",
      name: "AS-WORKS",
      subtitle: "Digital Services & Creative Studio",
      role: "Founder",
      category: "Digital Services / Business",
      parentBrand: "AS – Everything Starts Here",
      tagline: "DIGITAL · CREATIVE · GROWTH",
      logoPath: "/as-works-logo.png",
      logoPresentation: "wide",
      externalUrl: "https://www.instagram.com/asworks.in/",
      description:
        "AS-WORKS is a digital services and creative venture focused on helping individuals, startups and businesses establish, strengthen and grow their digital presence. It combines creativity, technology and strategic execution to transform ideas into meaningful digital experiences. From website development and branding to digital marketing and AI-powered automation, AS-WORKS aims to deliver practical digital solutions that help businesses move forward.",
      services: [
        "Website Design & Development",
        "Branding & Graphic Design",
        "Social Media Management",
        "Video Editing & Content Creation",
        "Digital Marketing & SEO",
        "Lead Generation",
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
