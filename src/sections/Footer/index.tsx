import { useIsMobile } from '@/helpers/isMobile';
import { Badge, Flex, Group, Text, Title } from '@mantine/core';
import {
  Icon,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconMail,
} from '@tabler/icons-react';

import { IconLink } from '@/components/Button/Icon/Link';
import { ContainerFluid } from '@/components/Container/ContainerFluid';

interface ISocialMedia {
  id: string;
  name: string;
  link: string;
  icon: Icon;
}

const socialMedia: ISocialMedia[] = [
  {
    id: '1',
    name: 'GitHub',
    link: 'https://github.com/MatheusPalmieri',
    icon: IconBrandGithub,
  },
  {
    id: '2',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/matheusandrepalmieri/',
    icon: IconBrandLinkedin,
  },
  {
    id: '3',
    name: 'YouTube',
    link: 'https://www.youtube.com/@matheuspalmieridev',
    icon: IconBrandYoutube,
  },
  {
    id: '4',
    name: 'E-mail',
    link: 'mailto:matheuspalmieridev+contato-portifolio@gmail.com',
    icon: IconMail,
  },
];

export const Footer = () => {
  const isMobile = useIsMobile();
  const flex = isMobile
    ? { flexDirection: 'column', justifyContent: 'space-between' }
    : { flexDirection: 'row' };

  return (
    <Flex p='0' mt='lg' py={{ base: 'lg' }} bg='#111' h={{ base: '300px', md: '200px' }}>
      <ContainerFluid
        props={{
          style: flex,
        }}
      >
        <Flex w={{ base: '100%', md: '50%' }} direction='column' justify='flex-end'>
          <Badge
            size='lg'
            radius='sm'
            variant='gradient'
            gradient={{ from: 'rgba(170, 54, 124, 0.5)', to: 'rgba(74, 47, 189, 0.5)', deg: 90 }}
            w='fit-content'
          >
            Desenvolvedor Full Stack
          </Badge>

          <Title>&lt;Matheus&#47;Palmieri&gt;</Title>
        </Flex>

        <Flex
          w={{ base: '100%', md: '50%' }}
          direction='column'
          align={{ base: 'flex-start', md: 'flex-end' }}
          justify='flex-end'
        >
          <Group>
            {socialMedia.map((social) => (
              <IconLink key={social.id} Icon={social.icon} redirect={social.link} />
            ))}
          </Group>

          <Text mt='sm' color='#abb'>
            Criado e desenvolvido por Matheus Palmieri.
          </Text>
        </Flex>
      </ContainerFluid>
    </Flex>
  );
};
