import { Flex, Title } from '@mantine/core';
import { Icon } from '@tabler/icons-react';

interface TitleProps {
  children: string;
  subTitle?: string;
  IconTitle?: Icon;
  align?: 'left' | 'center' | 'right';
}

export const TitleAndSubTitle = ({ children, subTitle, IconTitle, align = 'left' }: TitleProps) => {
  return (
    <Flex w='100%' direction='column' align={align} pos='relative' mt='md' py='lg'>
      <Flex pos='relative' style={{ zIndex: 1 }}>
        <Title order={2} fz='40px'>
          {children}
        </Title>
      </Flex>

      <Flex pos='absolute' top='-16px' style={{ zIndex: 0 }} align='center'>
        {IconTitle && <IconTitle size={64} opacity='0.2' />}
        <Title order={3} fz='64px' opacity='0.2' lh='0' mb='6px'>
          {subTitle ?? children.toString()}
        </Title>
      </Flex>
    </Flex>
  );
};
