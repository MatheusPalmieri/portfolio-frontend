'use client';
import { Container, Title, Text, Button, rem, Flex } from '@mantine/core';
import Link from 'next/link';

import { Illustration } from './Illustration';

export default function Page() {
  return (
    <Flex h='100dvh' align='center'>
      <Container p={{ base: 'lg', md: '0' }} py={rem('80px')}>
        <div
          style={{
            position: 'relative',
          }}
        >
          <Illustration
            {...{
              position: 'absolute',
              inset: 0,
              opacity: 0.75,
              color: '#333',
            }}
          />
          <div
            style={{
              paddingTop: rem('60px'),
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Title ta='center' fw='900' fz={rem('38px')}>
              Nada para ver aqui
            </Title>
            <Text c='dimmed' size='lg' ta='center' maw={rem('540px')} m='auto' my='md'>
              A página que você está tentando abrir não existe. Você pode ter digitado o endereço
              incorretamente ou a página foi movida para outro URL. Se você acha que isso é um erro,
              entre em contato com o suporte.
            </Text>

            <Flex justify='center'>
              <Button color='violet' size='md' component={Link} href='/'>
                Voltar à página inicial
              </Button>
            </Flex>
          </div>
        </div>
      </Container>
    </Flex>
  );
}
