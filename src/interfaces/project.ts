export enum ProjectTypeEnum {
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  FULLSTACK = 'Fullstack',
  MOBILE = 'Mobile',
  DESKTOP = 'Desktop',
  GAME = 'Game',
  OTHER = 'Other',
}

export interface IProject {
  id: string;
  name: string;
  description: string;
  preview: string;
  link: string;
  technologies: string[];
  slug: string;
  type: ProjectTypeEnum;
  repository: string;
  website?: string;
}
