import { useState } from 'react';

import { ISkill } from '@/interfaces/skill';
import { Card, Flex, Text } from '@mantine/core';

interface SkillProps {
  skill: ISkill;
}

export const SkillCard = ({ skill }: SkillProps) => {
  const [hoverMouser, setHoverMouse] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const filterBoolean = hoverMouser || active;

  return (
    <Card
      w='140px'
      h='140px'
      shadow='sm'
      p='lg'
      radius='md'
      withBorder
      onPointerOverCapture={() => setHoverMouse(true)}
      onPointerLeave={() => setHoverMouse(false)}
      onClick={() => setActive((prev) => !prev)}
      style={{ cursor: 'pointer' }}
    >
      <Flex
        direction='column'
        px='lg'
        align='center'
        justify='space-between'
        style={{
          filter: `brightness(${filterBoolean ? 100 : 0}%) opacity(${
            filterBoolean ? 100 : 90
          }%) invert(${filterBoolean ? 0 : 50}%)`,
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Card.Section>
          <i
            className={`devicon-${skill.icon}-${skill.extension} colored`}
            style={{ fontSize: '70px', color: skill.color }}
          />
        </Card.Section>

        <Card.Section>
          <Text color={skill.color} ta='center'>
            {skill.name}
          </Text>
        </Card.Section>
      </Flex>
    </Card>
  );
};
