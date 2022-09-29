import React, { useCallback } from 'react';
import type { Settings } from 'react-slick';

// components
import DotSlidersComponent from 'components/Molecules/DotSliders';

// theme
import { ColorVariant } from 'styles/theme/theme';
import { CustomPagination } from 'components/Molecules/DotSliders/DotSliders';

type SettingsType = (p?: {
  dotColor?: ColorVariant;
  bgColor?: ColorVariant;
}) => Settings;

export default function useSlick(ref: any = null) {
  // Handlers
  const nextSlider = useCallback(() => {
    ref?.current?.slickNext();
  }, [ref]);

  const prevSlider = useCallback(() => {
    ref?.current?.slickPrev();
  }, [ref]);

  const defaultSettings = React.useCallback<SettingsType>(
    (props) => {
      return {
        arrows: false,
        dots: true,
        customPaging: (index) => (
          <CustomPagination
            key={index}
            onClick={() => ref?.current?.slickGoTo(index)}
            color={props?.dotColor}
            bgColor={props?.bgColor}
          />
        ),
        appendDots: (dots) => (
          <DotSlidersComponent
            dots={dots}
            bgColor={props?.bgColor}
            dotColor={props?.dotColor}
            onPrev={prevSlider}
            onNext={nextSlider}
          />
        ),
      };
    },
    [nextSlider, prevSlider, ref]
  );

  return {
    nextSlider,
    prevSlider,
    CustomPagination,
    defaultSettings,
  };
}
