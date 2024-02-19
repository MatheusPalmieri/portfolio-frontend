import { useState, useLayoutEffect } from 'react';

import { Flex, Image, Transition } from '@mantine/core';
import AstronautImage from 'public/images/astronaut.svg';

const translateY = {
  in: { opacity: 1, transform: 'translateY(0)' },
  out: { opacity: 0, transform: 'translateY(50px)' },
  transitionProperty: 'opacity, transform',
};

export const Astronaut = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [classAnimate, setClassAnimate] = useState<string>('');

  useLayoutEffect(() => {
    setOpened(true);
    setTimeout(() => {
      setClassAnimate('floating');
    }, 1000);
  }, []);

  return (
    <Flex
      w={{ base: '100%', md: '50%' }}
      h='100%'
      align='center'
      pos={{ base: 'absolute', md: 'inherit' }}
      style={{
        zIndex: -1,
        overflow: 'hidden',
        top: 100,
        right: 0,
      }}
    >
      <Transition
        mounted={opened}
        transition={translateY}
        duration={1000}
        timingFunction='ease'
        keepMounted
      >
        {(transitionStyle) => (
          <>
            <style>
              {`
               @keyframes upAndDown {
                0% {
                    transform: translateY(0px);
                }
                25% {
                    transform: translateY(20px);
                }
                75% {
                    transform: translateY(-20px);
                }

                100% {
                    transform: translateY(0px);
                }
               }
     
               .floating {
                 animation: upAndDown 3s linear infinite;
               }
             `}
            </style>
            <Image
              src={AstronautImage.src.toLowerCase()}
              miw='400px'
              maw='600px'
              w='auto'
              fit='contain'
              style={{ ...transitionStyle, zIndex: 1 }}
              alt='Astronauta com um foguete e um planeta ao fundo.'
              className={classAnimate}
            />
          </>
        )}
      </Transition>
    </Flex>
  );
};
