'use client';
import { useEffect, useRef, useState } from 'react';

import { Flex } from '@mantine/core';

import { AffixButton } from '@/components/Affix';
import { DialogCookies } from '@/components/DialogCookies';
import { Footer } from '@/components/Sections/Footer';
import { Header } from '@/components/Sections/Header';
import { Projects } from '@/components/Sections/Projects';
import { Skills } from '@/components/Sections/Skills';

export default function Page() {
  const ref = useRef<HTMLDivElement>(null);
  const [showCookiesDialog, setShowCookiesDialog] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref?.current) {
        const headerHeight = ref?.current?.clientHeight;
        const scrolled = window?.scrollY;
        setShowCookiesDialog(scrolled > headerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <Header />
      <AffixButton />
      <div ref={ref}>{showCookiesDialog && <DialogCookies />}</div>

      <Flex direction='column' gap={{ base: '40px', md: '70px' }} mt={{ base: '40px', md: '70px' }}>
        <Projects />
        <Skills />
      </Flex>
      <Footer />
    </main>
  );
}
