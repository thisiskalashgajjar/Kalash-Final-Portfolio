export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'ai' | 'tools';
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}