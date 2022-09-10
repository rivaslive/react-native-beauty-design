import React from 'react';
import { NextSeo } from 'next-seo';
// @ts-ignore
import htmlToFormattedText from 'html-to-formatted-text';

// utils
import { decodeUTF8Text } from 'utils/utils';
import { defaultName } from 'utils/defaultVersion';

interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  altImage?: string;
  notDash?: boolean;
}

const Seo = ({
  notDash = false,
  title = 'Beauty design',
  altImage = 'Beauty design',
  description = 'The best UI components library for React Native',
  canonical = 'https://www.beauty-design.app/',
  image = 'https://www.beauty-design.app/share.png',
}: SeoProps) => {
  const newTitle = `${title}${!notDash ? ` -` : ''} ${defaultName}`;
  const newDescription = decodeUTF8Text(htmlToFormattedText(description));
  return (
    <NextSeo
      title={newTitle}
      description={newDescription}
      canonical={canonical}
      openGraph={{
        url: canonical,
        title: newTitle,
        description: newDescription,
        images: [
          {
            url: image,
            width: 1366,
            height: 768,
            alt: altImage,
            type: 'image/png',
          },
        ],
        site_name: altImage,
      }}
      additionalMetaTags={[
        {
          property: 'url',
          content: canonical,
        },
        {
          property: 'image',
          content: image,
        },
        {
          property: 'image:alt',
          content: altImage,
        },
        {
          property: 'image:type',
          content: 'image/png',
        },
        {
          property: 'site_name',
          content: altImage,
        },
        {
          property: 'title',
          content: title,
        },
        {
          property: 'og:title',
          content: title,
        },
      ]}
    />
  );
};

export default Seo;
