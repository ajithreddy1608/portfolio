export interface EntrepreneurshipInitiative {
  id: string;
  name: string;
  role: string;
  tagline?: string;
  logoPath: string;
  logoPresentation: "square" | "wide";
  externalUrl: string;
  actionLabel: string;
  description: string;
  philosophy?: string[];
  services?: string[];
}

export const entrepreneurshipData = {
  sectionTitle: "Entrepreneurship & Leadership",
  sectionIntro:
    "Alongside my technical and academic work, I am building a parent brand and a digital services initiative.",
  initiatives: [
    {
      id: "as-everything-starts-here",
      name: "AS – Everything Starts Here",
      role: "Founder · Established 2026",
      tagline: "Everything Starts Here.",
      logoPath: "/as-logo.png",
      logoPresentation: "square",
      externalUrl: "https://www.aseverythingstartshere.in/",
      actionLabel: "Visit AS Website",
      description:
        "AS – Everything Starts Here is my founder-led personal brand and entrepreneurial initiative. It represents my ambition to explore ideas, build meaningful ventures, create opportunities, and turn possibilities into reality.\n\nIt is the starting point for my entrepreneurial journey, bringing together aspiration, creativity, technology, business thinking, and execution.\n\nMy vision is to build something meaningful from the ground up, experiment with new ideas, and create opportunities that can grow into impactful ventures.",
      philosophy: [
        "Start with an idea.",
        "Build with purpose.",
        "Learn through action.",
        "Grow through consistency.",
        "Turn ambition into meaningful work.",
      ],
    },
    {
      id: "as-works",
      name: "AS-Works",
      role: "Digital Services & Freelance Initiative",
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
    },
  ] as EntrepreneurshipInitiative[],
};
