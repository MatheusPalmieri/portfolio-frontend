import { Button } from '@mantine/core';
import { Icon } from '@tabler/icons-react';

interface FilledProps {
  text: string;
  onClick: () => void;
  Icon?: Icon;
  bg?: string;
  bgh?: string;
  c?: string;
  ch?: string;
  loading?: boolean;
}

export const ButtonFilled = ({ text, onClick, Icon, bg, bgh, c, ch, loading }: FilledProps) => {
  return (
    <Button
      type='submit'
      fullWidth
      h='50px'
      loaderPosition='right'
      loading={loading}
      leftIcon={Icon && <Icon size='1.5em' />}
      styles={(theme) => ({
        root: {
          transition: '.3s',
          backgroundColor: bg ?? 'violet',
          '&:not([data-disabled])': theme.fn.hover({
            backgroundColor: theme.fn.darken(bgh ?? '#6741d9', 0.2),
            color: ch ?? theme.white,
          }),
          border: 0,
          color: c ?? theme.white,
          fontSize: theme.fontSizes.md,
          fontWeight: 600,
          letterSpacing: 1,
        },
      })}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
