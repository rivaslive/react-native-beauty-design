import { css } from 'styled-components';
// @ts-ignore
import FiraMono from '../../public/fonts/FiraMono-Medium.ttf';

export const fonts = css`
  @font-face {
    font-family: 'Fira Mono';
    src: url(${FiraMono}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
`;
