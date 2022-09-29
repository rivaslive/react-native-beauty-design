import '@/styles/global.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';

import { darkTheme, lightTheme } from '@/styles/stitches.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider
        defaultTheme="dark"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
