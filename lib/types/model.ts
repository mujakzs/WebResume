import { LucideIcon } from 'lucide-react';

// Core Data Structures
export interface Certification {
  title: string;
  organization: string;
  image?: string; // relative path under /public/images/
  issued?: string;
  expires?: string;
  credentialId?: string;
  url?: string; // external verification or issuer link
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
  current?: boolean; // marks if this is the current role
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