export interface EducationItem {
  university: string;
  degree: string;
  department: string;
  specialization: string;
  academicYear: string;
  section: string;
  location: string;
  description: string;
  relevantSubjects: string[];
  academicProjects: string[];
}

export const educationData: EducationItem = {
  university: "Aurora Deemed to be University",
  degree: "Bachelor of Technology (B.Tech)",
  department: "Department of Computer Science and Engineering",
  specialization: "Artificial Intelligence and Machine Learning (CSE-AIML)",
  academicYear: "Third Year",
  section: "Section 3C",
  location: "Hyderabad / Telangana, India",
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
    "Plant Leaf Disease Detection Using CNN and Random Forest",
    "Processor Architecture Simulation & AI Benchmarking (CPU, GPU, TPU)",
    "Emergency Blood Donor Geo-Matching System (RedConnect)",
  ],
};
