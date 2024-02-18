import { ExtensionEnum, ISkill } from '@/interfaces/skill';
import { Flex } from '@mantine/core';
import { IconGitCompare } from '@tabler/icons-react';

import { ContainerFluid } from '@/components/Container/ContainerFluid';
import { SkillsCards } from '@/components/SkillsCards/SkillCard';
import { TitleAndSubtitle } from '@/components/Title/TitleAndSubTitle';

const skills: ISkill[] = [
  {
    id: '1',
    name: 'JavaScript',
    icon: 'javascript',
    color: '#FFDF00',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '2',
    name: 'TypeScript',
    icon: 'typescript',
    color: '#007ACC',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '3',
    name: 'Python',
    icon: 'python',
    color: '#3776AB',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '4',
    name: 'PHP',
    icon: 'php',
    color: '#777BA3',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '5',
    name: 'Node',
    icon: 'nodejs',
    color: '#339933',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '6',
    name: 'Express',
    icon: 'express',
    color: '#000000',
    extension: ExtensionEnum.ORIGINAL_WORDMARK,
  },
  {
    id: '7',
    name: 'NestJS',
    icon: 'nestjs',
    color: '#E0234E',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '8',
    name: 'React',
    icon: 'react',
    color: '#61DAFB',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '9',
    name: 'React Native',
    icon: 'react',
    color: '#61DAFB',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '10',
    name: 'NextJS',
    icon: 'nextjs',
    color: '#000000',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '11',
    name: 'VueJS',
    icon: 'vuejs',
    color: '#4FC08D',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '12',
    name: 'Laravel',
    icon: 'laravel',
    color: '#FF2D20',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '13',
    name: 'MongoDB',
    icon: 'mongodb',
    color: '#47A248',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '14',
    name: 'MySQL',
    icon: 'mysql',
    color: '#4479A1',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '15',
    name: 'Firebase',
    icon: 'firebase',
    color: '#FFCA28',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '16',
    name: 'HTML 5',
    icon: 'html5',
    color: '#FF5F1E',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '17',
    name: 'CSS 3',
    icon: 'css3',
    color: '#2196F3',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '18',
    name: 'Bootstrap',
    icon: 'bootstrap',
    color: '#7952B3',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '19',
    name: 'Git',
    icon: 'git',
    color: '#F05032',
    extension: ExtensionEnum.PLAIN,
  },
  {
    id: '20',
    name: 'Figma',
    icon: 'figma',
    color: '#F24E1E',
    extension: ExtensionEnum.PLAIN,
  },
];

export const Skills = () => {
  return (
    <Flex>
      <ContainerFluid>
        <TitleAndSubtitle subTitle='Habilidades' Icon={IconGitCompare} align='center'>
          Skills
        </TitleAndSubtitle>
        <SkillsCards skills={skills} />
      </ContainerFluid>
    </Flex>
  );
};
