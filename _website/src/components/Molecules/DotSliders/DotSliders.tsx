/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react';

// components
import { Left, Right } from 'components/Atoms/Icons';

// styles
import { colors, ColorVariant } from 'styles/theme/theme';
import {
  DotsWrapperModalProject,
  DotsWrapperUl,
  StylePrevNextButton,
} from './style';

interface IProps {
  onPrev: () => void;
  onNext: () => void;
  dots: React.ReactNode;
  dotColor?: ColorVariant;
  bgColor?: ColorVariant;
  style?: React.CSSProperties;
  className?: string;
}

const DotSliders = ({
  onPrev,
  dots,
  onNext,
  dotColor,
  bgColor = 'transparent',
  ...rest
}: IProps) => {
  return (
    <DotsWrapperModalProject {...rest}>
      <DotsWrapperUl $dotColor={dotColor} $bgColor={colors[bgColor]}>
        <StylePrevNextButton
          $bgColor={colors[bgColor]}
          $dotColor={dotColor}
          className="prev-button"
          icon={<Left />}
          onClick={onPrev}
        />
        {dots}
        <StylePrevNextButton
          $bgColor={colors[bgColor]}
          $dotColor={dotColor}
          className="next-button"
          icon={<Right />}
          onClick={onNext}
        />
      </DotsWrapperUl>
    </DotsWrapperModalProject>
  );
};

interface Color {
  color?: ColorVariant;
  bgColor?: string;
  onClick?: () => void;
}

export const CustomPagination = ({
  color,
  bgColor = 'transparent',
  onClick,
}: Color) => {
  const getColor = (bgInternalColor: string, internalColor?: ColorVariant) => {
    if (bgInternalColor !== 'transparent' && !internalColor) {
      return 'white';
    }
    if (bgInternalColor !== 'transparent' && internalColor) {
      return colors[internalColor];
    }
    if (bgInternalColor === 'transparent' && internalColor) {
      return colors[internalColor];
    }
    return colors.primary;
  };
  return (
    <div
      onClick={onClick}
      style={{
        width: '10px',
        height: '10px',
        backgroundColor: getColor(bgColor, color),
        borderRadius: 75,
        marginRight: '5px',
        opacity: 0.24,
      }}
    />
  );
};

export default React.memo(DotSliders);
