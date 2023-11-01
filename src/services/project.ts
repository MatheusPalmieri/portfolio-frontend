import { IProject } from '@/interfaces/project';

import api from './api';

export const getProjects = async (): Promise<IProject[]> => (await api.get('/project')).data;

export const getProjectBySlug = async (slug: string): Promise<IProject> =>
  (await api.get(`/project/slug/${slug}`)).data;
