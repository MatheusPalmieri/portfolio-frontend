import { Flex, Paper, Text, Title } from '@mantine/core';

import { Glitch } from '@/components/Title/Glitch';
import { Typing } from '@/components/Typing';
import { BlinkingText } from '@/components/Typing/BlinkingText';

interface IntroductionProps {
  data: {
    message: string;
    name: string;
    career: string[];
  };
}

export const Introduction = ({ data }: IntroductionProps) => (
  <Flex
    w={{ base: '100%', md: '50%' }}
    h={{ base: '50%', md: '100%' }}
    direction='column'
    justify={{ base: 'flex-start', md: 'center' }}
  >
    <Flex>
      <Paper
        w='fit-content'
        bg={`linear-gradient(
                  90.21deg,
                  rgba(170, 54, 124, 0.5) -5.91%,
                  rgba(74, 47, 189, 0.5) 111.58%
                )`}
        shadow='sm'
        radius='sm'
        p='xs'
      >
        <Text fw='bold'>{data.message}</Text>
      </Paper>
    </Flex>

    <Glitch text={data.name} />

    <Title order={2} size='h3' fw='400'>
      <Typing career={data.career} time={100} />

      <BlinkingText margin={2} />
    </Title>
  </Flex>
);
