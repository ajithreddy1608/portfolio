export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialId: string;
  verificationUrl: string;
  imageUrl?: string;
  skills: string[];
  description: string;
  featured: boolean;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "coursera-public-speaking",
    title: "Introduction to Public Speaking",
    issuer: "University of Washington (via Coursera)",
    credentialId: "EXX2CLZ2RH3Y",
    verificationUrl: "https://www.coursera.org/account/accomplishments/verify/EXX2CLZ2RH3Y",
    imageUrl:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~EXX2CLZ2RH3Y/CERTIFICATE_LANDING_PAGE~EXX2CLZ2RH3Y.jpeg",
    skills: ["Effective Communication", "Audience Analysis", "Speech Structuring", "Professional Presentation"],
    description:
      "Comprehensive certification demonstrating mastery of dynamic verbal communication, persuasive speech delivery, audience engagement strategies, and confidence in technical presentation.",
    featured: true,
  },
];
