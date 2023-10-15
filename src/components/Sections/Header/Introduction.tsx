import { Flex, Paper, Text, Title } from '@mantine/core';

import { Typing } from '@/components/Typing';
import { BlinkingText } from '@/components/Typing/BlinkingText';

export const Introduction = () => (
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
        <Text fw='bold'>Seja bem-vindo ao meu Portfolio</Text>
      </Paper>
    </Flex>

    <Title order={1} fz='56px' color='white'>
      Matheus Palmieri
    </Title>

    <Title order={2} size='h3' fw='400'>
      <Typing
        career={['Desenvolvedor Frontend', 'Desenvolvedor Backend', 'Desenvolvedor Full Stack']}
        time={200}
      />

      <BlinkingText margin={2} />
    </Title>
  </Flex>
);
