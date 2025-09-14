import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type Socials = {
  name: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  href: string;
};

export type WorkExperience = {
  company: string;
  location?: string;
  role: string;
  duration: string;
  techStack: {
    programmingLanguages: string[];
    frameworks?: string[];
    databases?: string[];
    cloudPlatforms?: string[];
    tools?: string[];
    others?: string[];
  };
  responsibilities: string[];
  achievements?: string[];
};
