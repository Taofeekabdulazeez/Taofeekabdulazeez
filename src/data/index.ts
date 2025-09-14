import { Github, Linkedin, Mail, X } from "lucide-react";
import { Socials } from "@/types";

export const socials: Socials[] = [
  {
    name: "LinkedIn",
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/taofeekabdulazeez/",
  },
  {
    name: "GitHub",
    Icon: Github,
    href: "https://github/TaofeekAbdulazeez",
  },
  {
    name: "Gmail",
    Icon: Mail,
    href: "mailto:taofeekabdulazeeztaiwo@gmail.com",
  },
  {
    name: "X",
    Icon: X,
    href: "https://x.com/SirFeeky",
  },
];

export const about = {
  professionalSummary: `I am a dedicated and results-driven software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Proficient in an assortment of technologies, including JavaScript, TypeScript, React, Node.js, and Python, I excel in both front-end and back-end development. My expertise lies in building scalable web applications, optimizing performance, and ensuring seamless user experiences. With a strong foundation in computer science principles and a keen eye for detail, I am committed to delivering high-quality code and continuously improving my skills to stay abreast of industry trends.`,
  residence: "Lagos, Nigeria",
  email: "taofeekabdulazeeztaiwo@gmail.com",
  memberships: [
    "Nigeria Association of Computing Students (NACOSS)",
    "Dareword Students Association",
    "Member, Nigerian Developers Community",
  ],
  status: "Open to work opportunities",
};

type ToolUsage = {
  name: string;
  usageLevel: number; // percentage (0–100), how much this role/project depends on the tool
};

type WorkExperience = {
  company: string;
  location?: string;
  role: string;
  startDate: string;
  endDate: string;
  techStack: Record<string, ToolUsage[]>;
  responsibilities: string[];
  achievements?: string[];
};

export const experiences: WorkExperience[] = [
  {
    company: "AssessLab",
    location: "Remote",
    role: "Software Engineer",
    startDate: "2023-04-13",
    endDate: "2023-09-20",
    techStack: {
      programmingLanguages: [
        { name: "TypeScript", usageLevel: 95 },
        { name: "JavaScript", usageLevel: 90 },
      ],
      frameworks: [
        { name: "NestJS", usageLevel: 90 },
        { name: "React", usageLevel: 85 },
        { name: "MobX", usageLevel: 80 },
      ],
      databases: [{ name: "PostgreSQL", usageLevel: 85 }],
      cloudPlatforms: [
        { name: "Render", usageLevel: 80 },
        { name: "Vercel", usageLevel: 80 },
      ],
      tools: [
        { name: "Git", usageLevel: 95 },
        { name: "Docker", usageLevel: 70 },
      ],
    },
    responsibilities: [
      "Designed and implemented a secure online assessment platform as an alternative to Google Forms.",
      "Built RESTful APIs and WebSocket-based real-time monitoring features using NestJS.",
      "Developed a modern, CBT-inspired user interface with React and TailwindCSS.",
      "Integrated role-based access control and collaborative organization features.",
    ],
    achievements: [
      "Improved exam security with IP tracking and duplicate submission prevention.",
      "Delivered a scalable platform capable of supporting thousands of candidates.",
    ],
  },
  {
    company: "Tech Solutions Inc.",
    location: "Lagos, Nigeria",
    role: "Frontend Developer",
    startDate: "2024-04-13",
    endDate: "2024-11-20",
    techStack: {
      programmingLanguages: [
        { name: "JavaScript", usageLevel: 90 },
        { name: "TypeScript", usageLevel: 85 },
      ],
      frameworks: [
        { name: "React", usageLevel: 85 },
        { name: "Next.js", usageLevel: 80 },
      ],
      tools: [
        { name: "Redux", usageLevel: 75 },
        { name: "TailwindCSS", usageLevel: 85 },
        { name: "Jest", usageLevel: 70 },
      ],
    },
    responsibilities: [
      "Developed and maintained interactive web applications using React and Next.js.",
      "Collaborated with backend engineers to integrate APIs securely.",
      "Implemented unit and integration testing strategies to improve reliability.",
    ],
    achievements: [
      "Reduced page load time by 40% through performance optimization.",
      "Boosted user engagement by implementing a modern, responsive UI.",
    ],
  },
];
