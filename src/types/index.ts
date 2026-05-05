export interface StackItem {
  name: string;
  tier: 'principal' | 'ferramenta' | 'secundário' | 'explorando';
  proficiency: number;
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'demo' | 'linkedin' | 'mobile' | 'web';
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  status: 'development' | 'completed' | 'maintenance';
  tags: string[];
  links: ProjectLink[];
  order: number;
  caseStudy: {
    problem: string;
    solution: string;
    architecture: string;
    results: string[];
    socialProof?: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  impact?: string;
  current?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  year: number;
}
