'use client';
import { useEffect, useRef, useState } from 'react';

import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import { Projects } from '@/sections/Projects';
import { Skills } from '@/sections/Skills';
import { Flex } from '@mantine/core';

import { AffixButton } from '@/components/Affix';
import { DialogCookies } from '@/components/DialogCookies';

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
