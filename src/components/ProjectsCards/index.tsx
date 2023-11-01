import { IProject } from '@/interfaces/project';
import { Group } from '@mantine/core';

import { ProjectCardLoader } from '../Loaders/ProjectCardLoader';
import { ProjectCard } from '../ProjectCard';

interface ProjectsCardsProps {
  projects: IProject[];
  loading: boolean;
}

export const ProjectsCards = ({ projects, loading }: ProjectsCardsProps) => {
  return (
    <Group spacing='md' align='start' style={{ justifyContent: 'center' }}>
      {loading
        ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx: number) => <ProjectCardLoader key={idx} />)
        : projects.map((project: IProject) => <ProjectCard key={project._id} project={project} />)}
    </Group>
  );
};
