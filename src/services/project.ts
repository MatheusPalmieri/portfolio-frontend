import { IProject } from '@/interfaces/project';

import { Projects } from './projects';

export const getProjects = (): IProject[] => Projects;

export const getProjectBySlug = (slug: string): IProject => {
  return Projects.find((p: IProject) => p.slug === slug) as IProject;
};
