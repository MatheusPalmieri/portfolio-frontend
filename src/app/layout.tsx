import RootStyleRegistry from './emotion';

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang='pt-BR'>
      <head />
      <body suppressHydrationWarning={true}>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
