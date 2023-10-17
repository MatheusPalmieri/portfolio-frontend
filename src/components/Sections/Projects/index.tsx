import { useEffect, useState } from 'react';

import { IProject } from '@/interfaces/project';
import getProjects from '@/services/project';
import { IconSourceCode } from '@tabler/icons-react';

import { ContainerFluid } from '@/components/Container/ContainerFluid';
import { ProjectsCards } from '@/components/ProjectsCards';
import { TitleAndSubtitle } from '@/components/Title/TitleAndSubTitle';

export const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const handleGetProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response.data as IProject[]);
      } catch (error) {
        console.error('Error on get projects', error);
      }
    };
    handleGetProjects();
  }, []);

  return (
    <ContainerFluid
      props={{
        direction: 'column',
      }}
    >
      <TitleAndSubtitle subTitle='Projects' Icon={IconSourceCode} align='center'>
        Projetos
      </TitleAndSubtitle>

      <ProjectsCards projects={projects} />
    </ContainerFluid>
  );
};
