import { ActionIcon, Button, Card, Flex, Group, Skeleton } from '@mantine/core';

export const ProjectCardLoader = () => {
  return (
    <Card radius='md' p='0' px='md' shadow='lg' w='300px' maw='300px'>
      <Card.Section>
        <Skeleton visible>
          <Flex w='100%' h={180} />
        </Skeleton>
      </Card.Section>

      <Flex direction='column' p='md'>
        <Card.Section>
          <Group spacing={7} mt={5}>
            {[1, 2, 3].map((idx: number) => (
              <Skeleton key={idx} w={50} height={20} />
            ))}
          </Group>
        </Card.Section>

        <Card.Section mt='md'>
          <Skeleton height={30} />

          <Skeleton w='75%' height={20} mt='md' />
          <Skeleton w='75%' height={20} mt='xs' />
        </Card.Section>

        <Card.Section>
          <Group mt='xs'>
            <Button
              variant='light'
              color='violet'
              radius='md'
              style={{ flex: 1 }}
              loaderProps={{ type: 'dots' }}
              loading
            >
              Carregando
            </Button>
            <ActionIcon variant='default' radius='md' size={36} loading></ActionIcon>
          </Group>
        </Card.Section>
      </Flex>
    </Card>
  );
};
