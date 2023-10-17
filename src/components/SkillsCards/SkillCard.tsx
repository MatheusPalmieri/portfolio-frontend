import { ISkill } from '@/interfaces/skill';
import { Group } from '@mantine/core';

import { SkillCard } from '../SkillCard/SkillCard';

interface SkillProps {
  skills: ISkill[];
}

export const SkillsCards = ({ skills }: SkillProps) => {
  return (
    <Group spacing='md' align='start' style={{ justifyContent: 'center' }}>
      {skills.map((skill: ISkill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </Group>
  );
};
