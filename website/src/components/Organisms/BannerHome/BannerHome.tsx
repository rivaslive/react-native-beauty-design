import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as ga from 'lib/ga';

// utils
import { defaultVersion } from 'utils/defaultVersion';

// components
import Button from 'components/Atoms/Button/Button';
import brand from '../../../../public/brand.svg';

// styles
import {
  StyleBanner,
  StyleContentTitle,
  StyleCTA,
  StyleFirstSection,
  StyleImage,
  StyleText,
  StyleTitle,
} from './style';

const BannerHome = () => {
  const onClick = () => {
    ga.push({
      event: 'get-staring',
    });
  };
  return (
    <StyleFirstSection>
      <StyleContentTitle>
        <StyleImage className="animate__animated animate__fadeIn animate__delay-2s">
          <Image
            alt=""
            src={brand}
            width={200}
            height={200}
            objectFit="contain"
          />
        </StyleImage>
        <StyleTitle
          variant="POPPINS_70_77_800"
          className="animate__animated animate__fadeInUp animate__faster"
        >
          Best React Native framework UI
        </StyleTitle>
        <StyleText className="animate__animated animate__fadeIn animate__faster">
          <b>Beauty Design</b> offers a very nice and modern interface that
          allows you to create native applications quickly and beautifully
        </StyleText>
        <StyleCTA className="animate__animated animate__fadeIn animate__delay-2s">
          <Button className="getting" type="primary">
            <Link href={`/${defaultVersion}/getting-started`} passHref>
              <a onClick={onClick}>Getting started</a>
            </Link>
          </Button>
        </StyleCTA>
      </StyleContentTitle>
      <StyleBanner />
    </StyleFirstSection>
  );
};

export default BannerHome;
