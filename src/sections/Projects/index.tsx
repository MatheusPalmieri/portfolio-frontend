import { useEffect, useState } from 'react';

import { IProject } from '@/interfaces/project';
import { getProjects } from '@/services/project';
import { IconSourceCode } from '@tabler/icons-react';

import { ContainerFluid } from '@/components/Container/ContainerFluid';
import { ProjectsCards } from '@/components/ProjectsCards';
import { TitleAndSubtitle } from '@/components/Title/TitleAndSubTitle';

export const Projects = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const handleGetProjects = async () => {
      try {
        setProjects((await getProjects()) as IProject[]);
      } catch (error) {
        console.error('Error on get projects', error);
      } finally {
        setLoading(false);
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
      {projects.length > 0 && (
        <TitleAndSubtitle subTitle='Projects' Icon={IconSourceCode} align='center'>
          Projetos
        </TitleAndSubtitle>
      )}

      <ProjectsCards projects={projects} loading={loading} />
    </ContainerFluid>
  );
};
