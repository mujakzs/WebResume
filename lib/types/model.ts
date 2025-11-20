import { LucideIcon } from 'lucide-react';

// Core Data Structures
export interface Certification {
  title: string;
  organization: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
}

export interface Experience {
  title: string;
  company: string;
  years: string;
}

export interface SocialLink {
  name: string;
  iconName: string;
  link: string;
}

// The complete Profile Model
export interface Profile {
  name: string;
  title: string;
  location: string;
  number: string;
  bio: string;
  bioFull?: string;
  beyondCoding: string;
  techStack: { frontend: string[]; backend: string[]; devops: string[]; architecture?: string[] ; DevTools?: string[] };
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  recommendation: { quote: string; author: string; role: string };
  social: { email: string; linkedin: string; github: string; instagram: string };
  membership: { name: string; link: string }[];
}