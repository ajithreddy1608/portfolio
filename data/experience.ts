export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  type: string;
  duration: string;
  location: string;
  performanceRating?: string;
  responsibilities: string[];
  skills: string[];
  description: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "sashverse-technologies",
    company: "Sashverse Technologies Pvt. Ltd.",
    role: "Digital Marketing Intern",
    type: "Internship",
    duration: "17 Apr 2026 – 26 Jun 2026",
    location: "Hyderabad, India",
    performanceRating: "Very Good",
    description:
      "Contributed to live digital marketing campaigns, content generation, and brand visibility initiatives across cross-functional teams adhering to Agile and SDLC methodologies.",
    responsibilities: [
      "Worked on live campaigns across SEO, social media, email, and content marketing; assisted in planning, executing, and optimizing strategies.",
      "Contributed to brand awareness, audience engagement, and lead generation; created social media content, blogs, and marketing materials.",
      "Collaborated with content, design, and development teams following Agile and SDLC practices.",
    ],
    skills: [
      "SEO",
      "Social Media Marketing",
      "Email Marketing",
      "Content Strategy",
      "Agile & SDLC",
      "Lead Generation",
      "Brand Awareness",
    ],
  },
  {
    id: "staxtech-web-intern",
    company: "StaxTech",
    role: "Web Development Intern",
    type: "Internship",
    duration: "May 2025 – Jun 2025 (4 weeks)",
    location: "Hyderabad, India",
    description:
      "Four-week immersive engineering internship focused on modern web fundamentals, responsive interfaces, and client-side web application programming.",
    responsibilities: [
      "Completed a four-week internship gaining hands-on experience in HTML, CSS, and JavaScript.",
      "Focused on responsive frontend implementation across various viewport sizes and browser engines.",
      "Implemented interactive UI components and optimized client-side rendering.",
    ],
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Web Design",
      "Frontend Engineering",
      "Cross-Browser Compatibility",
    ],
  },
];
