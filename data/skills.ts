export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages for systems, algorithms, and application engineering.",
    iconName: "Code2",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "C", level: "Proficient" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Proficient" },
    ],
  },
  {
    title: "Web Development",
    description: "Modern frontend and full-stack web technologies and responsive design.",
    iconName: "Globe",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Proficient" },
      { name: "HTML5", level: "Expert" },
      { name: "CSS3", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Responsive Web Design", level: "Expert" },
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Deep neural networks, computer vision, and intelligent data systems.",
    iconName: "Cpu",
    skills: [
      { name: "Artificial Intelligence", level: "Proficient" },
      { name: "Machine Learning", level: "Proficient" },
      { name: "Deep Learning", level: "Proficient" },
      { name: "Convolutional Neural Networks (CNN)", level: "Proficient" },
      { name: "Computer Vision", level: "Proficient" },
      { name: "Generative AI", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Ecosystem",
    description: "Engineering toolchain, data science libraries, and cloud deployment.",
    iconName: "Wrench",
    skills: [
      { name: "Git", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
      { name: "VS Code", level: "Expert" },
      { name: "JupyterLab", level: "Advanced" },
      { name: "NumPy", level: "Advanced" },
      { name: "Matplotlib", level: "Proficient" },
      { name: "OpenCV", level: "Proficient" },
      { name: "Vercel", level: "Proficient" },
    ],
  },
];
