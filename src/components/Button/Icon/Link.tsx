import { ActionIcon } from '@mantine/core';
import { Icon } from '@tabler/icons-react';

interface IconLinkProps {
  Icon: Icon;
  redirect: string;
}

export const IconLink = ({ Icon, redirect }: IconLinkProps) => {
  return (
    <ActionIcon
      bg='#222'
      size='50px'
      radius='xl'
      style={{ border: '1px solid white', transition: '.3s' }}
      onClick={() => window.open(redirect, '_blank')}
    >
      <Icon />
    </ActionIcon>
  );
};
