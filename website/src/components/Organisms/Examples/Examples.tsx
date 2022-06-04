import { Typography } from 'antd';
import React, { useRef } from 'react';
import Slick, { Settings } from 'react-slick';

import useSlick from 'hooks/useSlick';

// components
import { WhyCard } from 'components/Molecules/Cards';

// data
import mockData from './mock.json';

// styles
import {
  StyleContentSlick,
  StyleContentTitle,
  StyleSeccondSection,
  StyleSubTitle,
  StyleTitle,
} from './style';

interface IProps {
  id?: string;
  className?: string;
}

const Examples = (props: IProps) => {
  const ref = useRef<Slick>(null);
  const { defaultSettings } = useSlick(ref);
  const settings: Settings = React.useMemo(() => {
    return {
      ...defaultSettings(),
      className: 'active',
      centerMode: true,
      infinite: true,
      centerPadding: '20px',
      slidesToShow: 3,
      slidesPerRow: 1,
      speed: 500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  }, [defaultSettings]);
  return (
    <StyleSeccondSection {...props}>
      <StyleContentTitle>
        <StyleSubTitle variant="POPPINS_40_44_800">How do I look</StyleSubTitle>
        <StyleTitle variant="POPPINS_70_77_800">Examples UI</StyleTitle>
        <Typography.Text type="warning">
          Patience, Building examples...
        </Typography.Text>
        <StyleContentSlick>
          <Slick ref={ref} {...settings}>
            {mockData.map(({ id, title, summary, image }) => (
              <WhyCard
                key={id}
                isExample
                image={image}
                title={title}
                summary={summary}
                className="why-card"
              />
            ))}
          </Slick>
        </StyleContentSlick>
      </StyleContentTitle>
    </StyleSeccondSection>
  );
};

export default Examples;
