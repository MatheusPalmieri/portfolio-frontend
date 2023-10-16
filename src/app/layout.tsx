'use client';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

import { Footer } from '@/components/Sections/Footer';

import RootStyleRegistry from './emotion';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Exploração de projetos Frontend, Backend, Mobile e Full Stack. Experiências, inovação e soluções de software. Matheus Palmieri.',
  keywords:
    'Desenvolvimento, Frontend, Backend, Mobile, Full Stack, Matheus Palmieri, Projetos, Software, Como Fazer, Portfolio',
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang='pt-BR'>
      <head />
      <body suppressHydrationWarning={true}>
        <RootStyleRegistry>{children}</RootStyleRegistry>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
