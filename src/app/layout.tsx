import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';

import RootStyleRegistry from './emotion';

import '@/global/style.css';

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
      <head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'
        />
      </head>

      <body suppressHydrationWarning={true}>
        <RootStyleRegistry>{children}</RootStyleRegistry>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
