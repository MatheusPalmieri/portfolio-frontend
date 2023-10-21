import { useState } from 'react';

import { IProject } from '@/interfaces/project';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, Flex } from '@mantine/core';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const router = useRouter();

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const features = project.technologies.map((technology, idx) => (
    <Badge variant='light' color='gray' key={idx}>
      {technology}
    </Badge>
  ));

  return (
    <Card
      radius='md'
      p='0'
      px='md'
      shadow='lg'
      w='300px'
      maw='300px'
      style={{ cursor: 'pointer' }}
      onClick={() => router.push(`/${project.slug}`, { scroll: false })}
    >
      <Card.Section>
        <Image src={project.preview} alt={project.name} height={180} />
      </Card.Section>

      <Flex direction='column' p='md'>
        <Card.Section>
          <Group spacing={7} mt={5}>
            {features}
          </Group>
        </Card.Section>

        <Card.Section mt='md'>
          <Text fz='lg' fw={500}>
            {project.name}
          </Text>

          <Text fz='sm' mt='xs'>
            {project.description}
          </Text>
        </Card.Section>

        <Card.Section>
          <Group mt='xs'>
            <Button radius='md' style={{ flex: 1 }}>
              Show details
            </Button>
            <ActionIcon
              variant='default'
              radius='md'
              size={36}
              onClick={() => setIsFavorite((isFavCurrent) => !isFavCurrent)}
            >
              {isFavorite ? <IconHeartFilled stroke={1.5} /> : <IconHeart stroke={1.5} />}
            </ActionIcon>
          </Group>
        </Card.Section>
      </Flex>
    </Card>
  );
};
