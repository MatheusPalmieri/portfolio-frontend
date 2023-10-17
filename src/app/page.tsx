'use client';
import { AffixButton } from '@/components/Affix';
import { Footer } from '@/components/Sections/Footer';
import { Header } from '@/components/Sections/Header';
import { Projects } from '@/components/Sections/Projects';

export default function Page() {
  return (
    <main>
      <Header />
      <AffixButton />
      <Projects />
      <Footer />
    </main>
  );
}
