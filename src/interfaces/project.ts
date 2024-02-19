export enum ProjectStatusEnum {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  DELETED = 'Deleted',
}

export enum ProjectCategoryEnum {
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  FULLSTACK = 'Full Stack',
  MOBILE = 'Mobile',
  OTHERS = 'Others',
}

export interface IProject {
  id: string;
  slug: string;
  name: string;
  about: string;
  description: string;
  resources: {
    banner: string;
    logo: string;
    video?: string;
  };
  category: ProjectCategoryEnum;
  technologies: string[];
  links: {
    repository: string;
    website?: string;
  };
  isHighlighted: boolean;
  status: ProjectStatusEnum;
}
