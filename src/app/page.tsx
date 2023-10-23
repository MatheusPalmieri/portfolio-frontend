'use client';
import { Flex } from '@mantine/core';

import { AffixButton } from '@/components/Affix';
import { Footer } from '@/components/Sections/Footer';
import { Header } from '@/components/Sections/Header';
import { Projects } from '@/components/Sections/Projects';
import { Skills } from '@/components/Sections/Skills';

export default function Page() {
  return (
    <main>
      <Header />
      <AffixButton />
      <Flex direction='column' gap={{ base: '40px', md: '70px' }} mt={{ base: '40px', md: '70px' }}>
        <Projects />
        <Skills />
      </Flex>
      <Footer />
    </main>
  );
}
