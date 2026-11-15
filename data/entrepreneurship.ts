export interface EntrepreneurshipInitiative {
  id: string;
  name: string;
  role: string;
  tagline?: string;
  logoPath: string;
  websiteUrl?: string;
  buttonText: string;
  description: string;
  keyFocusAreas?: string[];
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
    "Beyond technology and development, I enjoy building ideas, creating brands, exploring business opportunities, and turning concepts into meaningful ventures. My entrepreneurial journey focuses on creativity, innovation, digital experiences, and execution.",
  initiatives: [
    {
      id: "as-everything-starts-here",
      name: "AS – Everything Starts Here",
      role: "Founder",
      logoPath: "/as-logo.png",
      websiteUrl: "https://www.aseverythingstartshere.in/",
      buttonText: "Visit Website",
      description:
        "AS – Everything Starts Here is my founder-led personal brand and entrepreneurial initiative, built around the belief that every great journey begins with an idea. It represents my vision of exploring opportunities, building innovative concepts, developing meaningful ventures, and transforming ideas into reality.\n\nThrough AS, I aim to bring together creativity, technology, entrepreneurship, and personal growth under one vision: Everything Starts Here.",
      keyFocusAreas: [
        "Entrepreneurship & Venture Building",
        "Personal Branding",
        "Innovation & Idea Development",
        "Business Strategy",
        "Creative Projects & Experiments",
        "Technology-Driven Initiatives",
      ],
      gradientTheme: {
        border: "border-blue-500/30 hover:border-blue-400/50",
        glow: "rgba(59, 130, 246, 0.2)",
        badge: "bg-blue-500/10 text-cyan-300 border-blue-500/25",
      },
    },
    {
      id: "cavora-digital",
      name: "CAVORA DIGITAL",
      role: "Founder",
      tagline: "Your Vision. Our Execution.",
      logoPath: "/cavora-logo.png",
      buttonText: "Explore Services",
      description:
        "CAVORA DIGITAL is my freelancing and digital services initiative, focused on helping businesses and individuals establish a strong digital presence. The brand aims to transform ideas into professional digital experiences through modern design, technology, and creative execution.\n\nMy vision is to deliver impactful digital solutions that help brands build, grow, and stand out in the digital world.",
      services: [
        "Website Design & Development",
        "UI/UX Design",
        "Branding & Digital Identity",
        "Digital Marketing",
        "Creative Digital Solutions",
      ],
      gradientTheme: {
        border: "border-cyan-500/30 hover:border-cyan-400/50",
        glow: "rgba(6, 182, 212, 0.2)",
        badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25",
      },
    },
  ] as EntrepreneurshipInitiative[],
};
