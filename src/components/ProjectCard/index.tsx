import { useState } from 'react';

import { IProject } from '@/interfaces/project';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, Flex } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, about, slug, resources, technologies } = project;

  const router = useRouter();
  const { hovered, ref } = useHover();

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const features = technologies.map((technology, idx) => (
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
      style={{
        cursor: 'pointer',
        transform: hovered ? 'scale(1.005)' : 'scale(1.0)',
        transition: 'transform .3s',
      }}
      ref={ref}
      onClick={() => router.push(`/${slug}`)}
    >
      <Card.Section>
        <Image src={resources.banner} alt={`Banner referente ao projeto: ${name}`} height={180} />
      </Card.Section>

      <Flex direction='column' p='md'>
        <Card.Section>
          <Group spacing={7} mt={5}>
            {features}
          </Group>
        </Card.Section>

        <Card.Section mt='md'>
          <Text fz='lg' fw={500}>
            {name}
          </Text>

          <Text fz='sm' mt='xs'>
            {about ?? 'Sem detalhes'}
          </Text>
        </Card.Section>

        <Card.Section>
          <Group mt='xs'>
            <Button variant='light' color='violet' radius='md' style={{ flex: 1 }}>
              Ver detalhes
            </Button>
            <ActionIcon
              variant='default'
              radius='md'
              size={36}
              onClick={(event) => {
                setIsFavorite((isFavCurrent) => !isFavCurrent);
                event.stopPropagation();
              }}
            >
              {isFavorite ? <IconHeartFilled stroke={1.5} /> : <IconHeart stroke={1.5} />}
            </ActionIcon>
          </Group>
        </Card.Section>
      </Flex>
    </Card>
  );
};
