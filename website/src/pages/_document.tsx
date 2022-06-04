import React from 'react';
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID;
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          {/* GOOGLE FONTS */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-904NQF9ECE"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
								window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-904NQF9ECE');
							`,
            }}
          />
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
								dataLayer = [];
							`,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTAG_ID as string}');
          `,
            }}
          />
          {/* End Google Tag Manager */}

          <meta name="msapplication-TileImage" content="/favicon.png" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta
            name="keywords"
            content="react-native, React Native, npm, docs, beauty-design, react native beauty-design, beauty design, provider, title, button, tabs, cards, api"
          />
          <meta name="author" content="rivaslive" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe
              width="0"
              height="0"
              style={{ display: 'none', visibility: 'hidden' }}
              src={`https://www.googletagmanager.com/ns.html?id=${
                GTAG_ID as string
              }`}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
