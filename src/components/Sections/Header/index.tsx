import { useIsMobile } from '@/helpers/isMobile';
import { BackgroundImage, Flex } from '@mantine/core';
import Background from 'public/images/background.png';

import { ContainerFluid } from '@/components/Containers/ContainerFluid';

import { Astronaut } from './Astronaut';
import { Introduction } from './Introduction';

export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <Flex w='100vw' h='100vh'>
      <BackgroundImage src={Background.src.toLowerCase()} radius='sm'>
        <ContainerFluid
          props={{
            h: '100%',
            justify: 'space-between',
            style: { overflow: 'hidden' },
          }}
        >
          <Introduction />

          {!isMobile && <Astronaut />}
        </ContainerFluid>
      </BackgroundImage>
    </Flex>
  );
};
