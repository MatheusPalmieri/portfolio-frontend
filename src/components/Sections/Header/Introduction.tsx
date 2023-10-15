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
  <Flex w='50%' h='100%' direction='column' justify='center'>
    <Flex>
      <Paper
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

    {/* <Title order={1} fz='56px' color='white'>
      {data.name}
    </Title> */}
    <Glitch text={data.name} />

    <Title order={2} size='h3' fw='400'>
      <Typing career={data.career} time={100} />

      <BlinkingText margin={2} />
    </Title>
  </Flex>
);
