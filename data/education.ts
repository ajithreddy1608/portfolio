export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  score?: string;
  statusBadge?: string;
  location?: string;
  description?: string;
  specialization?: string;
  relevantSubjects?: string[];
  academicProjects?: string[];
}

export const educationHistory: EducationEntry[] = [
  {
    institution: "Aurora Deemed to be University",
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Artificial Intelligence and Machine Learning (CSE-AIML)",
    period: "2024 – 2028",
    statusBadge: "Currently 3rd Year",
    location: "Hyderabad, Telangana, India",
    description:
      "Pursuing an intensive undergraduate engineering curriculum emphasizing modern software engineering, artificial intelligence algorithms, computer vision pipelines, deep learning architectures, and scalable computing systems.",
    relevantSubjects: [
      "Data Structures & Algorithms",
      "Artificial Intelligence",
      "Machine Learning & Pattern Recognition",
      "Computer Architecture & Organization",
      "Database Management Systems (DBMS)",
      "Operating Systems & System Programming",
      "Object-Oriented Programming (Python / C++)",
      "Computer Networks",
    ],
    academicProjects: [
      "Processor Architecture Simulation & AI Benchmarking",
      "RedConnect — Centralized Healthcare Platform",
      "Online Resume Builder Application",
      "EV Charging Station Discovery & Booking Platform",
    ],
  },
  {
    institution: "Sri Chaitanya Junior College",
    degree: "Intermediate Education (Class XI & XII)",
    period: "2024",
    score: "86%",
    location: "Hyderabad, Telangana, India",
    description:
      "Rigorous pre-university academic curriculum focusing on Mathematics, Physics, and Chemistry, establishing strong foundational analytical and problem-solving capabilities.",
  },
  {
    institution: "Lotus Lap High School",
    degree: "Secondary School Certificate (SSC)",
    period: "2022",
    score: "90%",
    location: "Hyderabad, Telangana, India",
    description:
      "Completed foundational schooling with academic excellence (90%), participating in mathematics olympiads and science exhibitions.",
  },
];

export const primaryEducation = educationHistory[0];
