import 'antd/dist/antd.css';
import 'animate.css/animate.css';
import 'slick-carousel/slick/slick.css';

import React, { useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ConfigProvider } from 'antd';
import { useRouter } from 'next/router';
import enUS from 'antd/lib/locale/en_US';
import { ThemeProvider } from 'styled-components';

import * as ga from 'lib/ga';
import * as menuComponents from 'assets/menu';

// apollo
import { useApollo } from 'apollo/config';
import { ComponentProps, ComponentProvider } from 'context/components';

// components
import NProgress from 'components/Atoms/NProgress';
import Seo from 'components/Atoms/Seo/Seo';

import GlobalStyle from 'styles/general';

function MyApp({ Component, pageProps }: AppProps) {
  const [isHome, setIsHome] = useState<boolean>(false);
  const [componentList, setComponentList] = useState<ComponentProps[]>([]);
  // @ts-ignore
  const client = useApollo(pageProps?.initialApolloState);
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  React.useEffect(() => {
    const version = router?.query?.version;
    if (version && typeof version === 'string') {
      try {
        // @ts-ignore
        menuComponents[version].forEach((item) => {
          if (item.children) {
            setComponentList((prev) => {
              return [...prev, ...item.children];
            });
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
  }, [router?.query]);

  React.useEffect(() => {
    const pathname = router?.pathname;
    if (pathname === '/') {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [router?.pathname]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Beauty Design</title>
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <Seo />
      <ApolloProvider client={client}>
        <ConfigProvider locale={enUS}>
          <NProgress />
          <ComponentProvider items={componentList}>
            <ThemeProvider theme={{ isHome }} key={`theme-${isHome}`}>
              <GlobalStyle />
            </ThemeProvider>
            <Component {...pageProps} />
          </ComponentProvider>
        </ConfigProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
