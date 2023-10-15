import { Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface ContainerFluidProps {
  children: React.ReactNode;
  props?: any;
}

export const ContainerFluid = ({ children, props }: ContainerFluidProps) => {
  const matches = useMediaQuery('(min-width: 1440px)');

  return (
    <Container fluid w='1280px' display='flex' p={matches ? '0' : 'lg'} {...props}>
      {children}
    </Container>
  );
};
