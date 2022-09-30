import React from 'react';
import Head from 'next/head';

type HeadingSeoProps = {
  title?: string;
  description?: string;
  image?: string;
};

const HeadSeo = ({ description, title, image }: HeadingSeoProps) => {
  return (
    <Head>
      {title ? <title>Beauty Design - {title}</title> : <></>}
      {description ? (
        <>
          <meta
            property="description"
            content={`${description} fro Beauty Design.`}
          />
          <meta
            property="og:description"
            content={`${description} fro Beauty Design.`}
          />
          <meta
            property="twitter:description"
            content={`${description} fro Beauty Design.`}
          />
        </>
      ) : (
        <></>
      )}
    </Head>
  );
};

export default HeadSeo;
