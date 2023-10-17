import { ActionIcon, Affix, Transition, rem } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';

export const AffixButton = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition='slide-up' mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <ActionIcon
            aria-label='Scroll to top'
            size='40px'
            variant='light'
            style={transitionStyles}
            color='violet'
            onClick={() => scrollTo({ y: 0 })}
          >
            <IconArrowUp style={{ width: rem(24), height: rem(24) }} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
};
