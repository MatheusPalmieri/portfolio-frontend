import { useIsMobile } from '@/helpers/isMobile';
import { BackgroundImage, Flex } from '@mantine/core';
import Background from 'public/images/background.png';

import { ContainerFluid } from '@/components/Containers/ContainerFluid';

import { Astronaut } from './Astronaut';
import { Introduction } from './Introduction';

export const Header = () => {
  const isMobile = useIsMobile();

  const introduction = {
    message: 'Seja bem-vindo ao meu Portfolio',
    name: 'Matheus Palmieri',
    career: ['Desenvolvedor Frontend', 'Desenvolvedor Backend', 'Desenvolvedor Full Stack'],
  };

  return (
    <Flex w='100%' h='100dvh'>
      <BackgroundImage src={Background.src.toLowerCase()} radius='sm'>
        <ContainerFluid
          props={{
            h: '100%',
            justify: 'space-between',
            style: { flexDirection: 'row', overflow: 'hidden' },
          }}
        >
          <Introduction data={introduction} />

          {!isMobile && <Astronaut />}
        </ContainerFluid>
      </BackgroundImage>
    </Flex>
  );
};
