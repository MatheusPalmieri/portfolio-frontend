import { IProject } from '@/interfaces/project';

import { Projects } from './projects';

export const getProjects = async (): Promise<IProject[]> => Projects;

export const getProjectBySlug = async (slug: string): Promise<IProject> => {
  return Projects.find((p: IProject) => p.slug === slug) as IProject;
};
