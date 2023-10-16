import { useEffect, useState } from 'react';

import { IProject } from '@/interfaces/project';
import getProjects from '@/services/project';
import { IconSourceCode } from '@tabler/icons-react';

import { ContainerFluid } from '@/components/Containers/ContainerFluid';
import { ProjectsCards } from '@/components/ProjectsCards';
import { TitleAndSubTitle } from '@/components/Title/TitleAndSubTitle';

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
      <TitleAndSubTitle subTitle='Projects' IconTitle={IconSourceCode} align='center'>
        Projetos
      </TitleAndSubTitle>

      <ProjectsCards projects={projects} />
    </ContainerFluid>
  );
};
