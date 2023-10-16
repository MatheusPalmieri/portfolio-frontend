import { IProject } from '@/interfaces/project';
import { Group } from '@mantine/core';

import { ProjectCard } from '../ProjectCard';

interface ProjectsCardsProps {
  projects: IProject[];
}

export const ProjectsCards = ({ projects }: ProjectsCardsProps) => {
  return (
    <Group spacing='md' align='start' style={{ justifyContent: 'center' }}>
      {projects.map((project: IProject) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Group>
  );
};
