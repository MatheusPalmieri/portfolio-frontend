'use client';
import { CacheProvider } from '@emotion/react';
import { useEmotionCache, MantineProvider } from '@mantine/core';
import { Analytics } from '@vercel/analytics/react';
import { useServerInsertedHTML } from 'next/navigation';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function RootStyleRegistry({ children }: { children: JSX.Element }) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });

  return (
    <CacheProvider value={cache}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
        {children}
      </MantineProvider>
      <Analytics />
    </CacheProvider>
  );
}
