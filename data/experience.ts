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
  certificateImageUrl?: string;
  certificatePdfUrl?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "sashverse-technologies",
    company: "Sashverse Technologies Pvt. Ltd.",
    role: "Digital Marketing Intern",
    type: "Internship",
    duration: "17 Apr 2026 – 26 Jun 2026",
    location: "Hyderabad, Telangana, India",
    performanceRating: "Very Good",
    certificateImageUrl: "/certificates/sashverse-internship-certificate.webp",
    certificatePdfUrl: "/certificates/sashverse-internship-certificate.pdf",
    description:
      "Contributed to live digital marketing campaigns, content generation, and brand visibility initiatives across cross-functional teams adhering to Agile and SDLC methodologies.",
    responsibilities: [
      "Worked on live campaigns across SEO, social media, email, and content marketing; assisted in planning, executing, and optimizing strategies.",
      "Contributed to brand awareness, audience engagement, and lead generation; created social media content, blogs, and marketing materials.",
      "Collaborated with content, design, and development teams following Agile and SDLC practices.",
      "Maintained brand consistency across blogs, social media channels, and campaign collateral.",
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
    id: "staxtech-aiml-intern",
    company: "StaxTech",
    role: "Artificial Intelligence & Machine Learning Intern",
    type: "Internship",
    duration: "May 2025 (1 Month)",
    location: "Hyderabad, Telangana, India",
    certificateImageUrl: "/certificates/staxtech-aiml-internship.webp",
    certificatePdfUrl: "/certificates/staxtech-aiml-internship.pdf",
    description:
      "Completed an intensive 1-month engineering internship focusing on Artificial Intelligence and Machine Learning implementation (Certificate ID: STAXP037) signed by Pawan Kushwaha, Founder & CEO.",
    responsibilities: [
      "Completed a 1-month engineering internship focusing on Artificial Intelligence and Machine Learning pipelines.",
      "Worked on data preprocessing, feature analysis, and evaluating ML model performance on real-world datasets.",
      "Explored supervised and unsupervised learning algorithms, intelligent automation, and system integration.",
      "Awarded official Certificate of Internship (ID: STAXP037) recognizing successful project completion.",
    ],
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
      "Data Preprocessing",
      "Model Evaluation",
      "Algorithm Design",
      "System Integration",
    ],
  },
];
