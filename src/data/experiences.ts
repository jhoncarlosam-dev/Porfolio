export interface WorkExperience {
    id: number;
    position: string;
    company: string;
    timeFrame: string;
    technologies: string[];
    description?: string;
}

export const experiences: WorkExperience[] = [
    {
      id: 1,
      position: "Senior Frontend Developer",
      company: "Tech Corp",
      timeFrame: "2022 - Present",
      technologies: ["React", "TypeScript", "Tailwind"],
      description: "Led frontend development efforts for multiple high-impact projects, focusing on performance optimization and component reusability."
    },
    {
      id: 2,
      position: "Full Stack Developer",
      company: "Digital Solutions",
      timeFrame: "2020 - 2022",
      technologies: ["Node.js", "Express", "MongoDB"],
      description: "Developed and maintained full-stack applications, implementing RESTful APIs and improving database performance."
    },
    {
      id: 3,
      position: "Junior Developer",
      company: "Startup Inc",
      timeFrame: "2018 - 2020",
      technologies: ["JavaScript", "HTML", "CSS"],
      description: "Collaborated on frontend development tasks and learned modern web development practices in an agile environment."
    }
  ];