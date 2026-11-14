export interface ExperienceItem {
  id: string;
  company: string;
  product?: string;
  role: string;
  type: string;
  duration: string;
  location?: string;
  responsibilities: string[];
  skills: string[];
  description: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "sashverse-workverse",
    company: "Sashverse Technologies Pvt. Ltd.",
    product: "Workverse",
    role: "Digital Marketing Intern",
    type: "Internship",
    duration: "17 April 2026 – 26 June 2026",
    location: "India",
    description:
      "Selected as a Digital Marketing Intern for the Workverse platform product team, orchestrating end-to-end digital outreach, audience research, multi-channel marketing campaigns, and visual asset production.",
    responsibilities: [
      "Social media channel management and audience engagement strategies.",
      "Instagram content creation, brand storytelling, and interactive reels production.",
      "Digital marketing strategy planning, metrics evaluation, and campaign iteration.",
      "Promotional poster, motion graphic, and visual media creation for product features.",
      "Targeted email marketing planning, subscriber segmentation, and campaign drafts.",
      "In-depth market research and competitive analysis in the product sector.",
      "Potential client identification, lead qualification, and digital outreach.",
      "Execution of multi-channel digital marketing and conversion-focused activities.",
    ],
    skills: [
      "Digital Marketing",
      "Market Research",
      "Content Creation",
      "Social Media Management",
      "Email Marketing",
      "Campaign Planning",
      "Client Research",
    ],
  },
];
