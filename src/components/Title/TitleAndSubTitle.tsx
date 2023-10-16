import { Flex, Title } from '@mantine/core';

interface TitleProps {
  children: string;
  subTitle?: string;
  align?: 'left' | 'center' | 'right';
}

export const TitleAndSubTitle = ({ children, subTitle, align = 'left' }: TitleProps) => {
  return (
    <Flex w='100%' direction='column' align={align} pos='relative' mt='lg' py='lg'>
      <Flex pos='relative' style={{ zIndex: 1 }}>
        <Title order={2} fz='40px'>
          {children}
        </Title>
      </Flex>
      <Flex pos='absolute' top='-24px' style={{ zIndex: 0 }}>
        <Title order={3} fz='64px' opacity='0.2'>
          {subTitle ?? children.toString()}
        </Title>
      </Flex>
    </Flex>
  );
};
