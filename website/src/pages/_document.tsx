import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
