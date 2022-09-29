import styled, { css } from 'styled-components';
import { Button } from 'antd';
import { colors, ColorVariant } from '../../../styles/theme/theme';

export const DotsWrapperModalProject = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  margin: auto;
`;

interface Dots {
  $bgColor: string;
  $dotColor?: ColorVariant;
}

const defaultMarginButtons = '30px';

const getColor = (bgColor: string, dotColor?: ColorVariant) => {
  if (bgColor !== 'transparent' && !dotColor) {
    return css`
      background: ${bgColor};
      color: white;
    `;
  }
  if (bgColor !== 'transparent' && dotColor) {
    return css`
      background: ${bgColor};
      color: ${colors[dotColor]};
    `;
  }
  if (bgColor === 'transparent' && dotColor) {
    return css`
      background: ${bgColor};
      color: ${colors[dotColor]};
    `;
  }
  return css`
    background: ${bgColor};
    color: ${colors.primary};
  `;
};

export const DotsWrapperUl = styled.ul<Dots>`
  background-color: ${({ $bgColor }) => $bgColor};
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  margin: auto;
  list-style-type: none;
  padding: 10px;

  .slick-active > div {
    background: ${({ $bgColor, $dotColor }) =>
      getColor($bgColor, $dotColor)} !important;
    opacity: 1 !important;
  }
`;

export const StylePrevNextButton = styled(Button)<Dots>`
  &.ant-btn {
    height: 14px;
    width: 20px;
    line-height: 12px;
    padding: 0;
    margin: 0;
    border: none;
    box-shadow: none;
    background: transparent !important;
    background: ${({ $bgColor, $dotColor }) =>
      getColor($bgColor, $dotColor)} !important;

    .anticon {
      font-size: 12px;
    }

    &.prev-button {
      margin-right: ${defaultMarginButtons};
    }

    &.next-button {
      margin-left: ${defaultMarginButtons};
    }
  }
`;
