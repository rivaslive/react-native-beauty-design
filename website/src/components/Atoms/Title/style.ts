import { ReactNode } from 'react';
import { Button, Typography } from 'antd';
import styled, { css } from 'styled-components';
import { TitleProps } from 'antd/lib/typography/Title';
import { colors, mediaQueries } from 'styles/theme/theme';

const { Title } = Typography;

export type TextTransformType =
  | 'uppercase'
  | 'lowercase'
  | 'capitalize'
  | 'none';

export const cssTitleVariant = {
  ROBOT_28_39_400: css`
    // font-family: {fontNames.roboto};
    font-size: 28px;
    line-height: 39px;
    font-weight: 400;
  `,
  ROBOT_24_28_500: css`
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
  `,
  ROBOT_36_50_500: css`
    font-size: 36px;
    line-height: 50px;
    font-weight: 700;
  `,
  ROBOT_19_29_600: css`
    font-size: 19px;
    line-height: 29px;
    font-weight: 600;
    letter-spacing: -0.97px;
  `,
  ROBOT_24_36_600: css`
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
    letter-spacing: -1.2px;
  `,
  ROBOT_48_72_700: css`
    font-size: 48px;
    line-height: 72px;
    font-weight: 700;
    letter-spacing: -2.4px;
  `,
  ROBOT_19_25_800: css`
    font-size: 19px;
    line-height: 25px;
    font-weight: 800;
  `,
  ROBOT_40_44_800: css`
    font-size: 40px;
    line-height: 44px;
    font-weight: 800;
  `,
  ROBOT_60_65_800: css`
    font-size: 60px;
    line-height: 65px;
    font-weight: 800;
  `,
  ROBOT_70_77_800: css`
    font-size: 70px;
    line-height: 70px;
    font-weight: 800;
  `,
  POPPINS_18_22_800: css`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    line-height: 22px;
    font-weight: 800;
  `,
  POPPINS_19_25_800: css`
    font-family: 'Poppins', sans-serif;
    font-size: 19px;
    line-height: 25px;
    font-weight: 800;
  `,
  POPPINS_24_32_800: css`
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    line-height: 32px;
    font-weight: 800;
  `,
  POPPINS_40_44_800: css`
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
    line-height: 44px;
    font-weight: 800;
  `,
  POPPINS_60_65_800: css`
    font-family: 'Poppins', sans-serif;
    font-size: 60px;
    line-height: 65px;
    font-weight: 800;
  `,
  POPPINS_70_77_800: css`
    font-family: 'Poppins', sans-serif;
    font-size: 50px;
    line-height: 55px;
    font-weight: 800;

    ${mediaQueries.minTablet} {
      font-size: 70px;
      line-height: 70px;
    }
  `,
};

export type VariantType = keyof typeof cssTitleVariant;

export interface IProps extends TitleProps {
  $variant: VariantType;
  $color?: string;
  $isLink?: boolean;
  $textTransform: TextTransformType;
}

export interface ITitleProps extends TitleProps {
  variant?: VariantType;
  isLink?: boolean;
  children?: ReactNode;
  color?: string;
  textTransform?: TextTransformType;
}

const transforms = {
  none: `none`,
  uppercase: `uppercase`,
  lowercase: `lowercase`,
  capitalize: `capitalize`,
};

export const StyleLink = styled(Button)`
  padding: 0 0 0 5px;
  border: none;
  height: 0;
  opacity: 0.8;
  transition: opacity 0.25s ease 0s;

  .anticon {
    color: black;
  }
`;

export const StyleTitleContent = styled.div`
  display: flex;
  scroll-margin-top: 84px;

  &:hover {
    ${StyleLink} {
      opacity: 0.6;
    }
  }
`;

export const StyleTitle = styled(Title)<IProps>`
  &.ant-typography {
    margin-top: 0;
    margin-bottom: 10px;
    transition: opacity 150ms;
    color: ${({$color}) => {
      // @ts-ignore
      return colors[$color || 'black'] || 'black';
    }};
    text-transform: ${({ $textTransform }) => transforms[$textTransform]};

    ${({ $variant }) => cssTitleVariant[$variant]}

    &:hover {
      ${({ $isLink }) => $isLink && `opacity: 0.8;`}
    }
  }
`;
