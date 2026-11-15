export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages for algorithms, software systems, and data manipulation.",
    iconName: "Code2",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "C", level: "Proficient" },
      { name: "JavaScript", level: "Advanced" },
    ],
  },
  {
    title: "Web Development",
    description: "Responsive frontend engineering, modern styling, and cloud deployment.",
    iconName: "Globe",
    skills: [
      { name: "HTML", level: "Expert" },
      { name: "CSS", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Responsive Web Development", level: "Expert" },
      { name: "Vercel (deployment)", level: "Proficient" },
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Foundational AI algorithms, supervised/unsupervised learning, and neural networks.",
    iconName: "Cpu",
    skills: [
      { name: "Artificial Intelligence", level: "Proficient" },
      { name: "Machine Learning", level: "Proficient" },
      { name: "Deep Learning", level: "Proficient" },
    ],
  },
  {
    title: "Generative AI",
    description: "Large Language Models, semantic search, prompt architecture, and responsible AI.",
    iconName: "Sparkles",
    skills: [
      { name: "LLMs", level: "Proficient" },
      { name: "Retrieval-Augmented Generation (RAG)", level: "Proficient" },
      { name: "Prompt Engineering", level: "Advanced" },
      { name: "Responsible AI", level: "Proficient" },
    ],
  },
  {
    title: "Tools & Ecosystem",
    description: "Version control, code environments, and computational notebooks.",
    iconName: "Wrench",
    skills: [
      { name: "Git", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
      { name: "VS Code", level: "Expert" },
      { name: "Jupyter Notebook", level: "Advanced" },
    ],
  },
  {
    title: "Digital Marketing",
    description: "Growth campaigns, search optimization, and strategic content distribution.",
    iconName: "Layers",
    skills: [
      { name: "SEO", level: "Advanced" },
      { name: "Digital Marketing", level: "Advanced" },
      { name: "Content Marketing", level: "Advanced" },
    ],
  },
];

export const softSkills: string[] = [
  "Problem-Solving",
  "Communication",
  "Teamwork",
  "Leadership",
  "Time Management",
  "Creative Thinking",
  "Adaptability",
];

export const languagesList: string[] = ["English", "Telugu", "Hindi"];
