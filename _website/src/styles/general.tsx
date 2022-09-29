import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { fonts } from 'styles/fonts';
import { codeTheme } from 'styles/codeTheme';
import { colors, fontNames } from './theme/theme';

const GlobalStyle = createGlobalStyle<any>`
  ${normalize}
  ${fonts}
  body {
    overflow-x: hidden;
    font-family: ${fontNames.roboto};
    scroll-behavior: smooth;
    font-size: 16px;
    line-height: 28px;
    background-color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;
    overflow-y: ${({ theme }: any) => (theme?.isHome ? 'scroll' : 'hidden')};
  }

  ::selection {
    background: ${colors.primary};
  }

  * {
    scroll-behavior: smooth;
    font-size: 16px;
    line-height: 28px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;
  }

  label {
    font-size: 1rem;
    line-height: 20px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    font-family: ${fontNames.roboto};
  }

  .max-width {
    max-width: 100%;
  }

  .ant-message {
    margin-top: 100px;
  }

  .block-code {
    position: relative;

    .hljs {
      border-radius: 12px;
    }
  }

  button.block-code__copy {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;

    .anticon {
      color: #eaeaea;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border: none;
      opacity: 0.7;
      color: white;
    }

    &:focus,
    &:active {
      background-color: rgba(255, 255, 255, 0.1);
      border: none;
      opacity: 1;
      color: white;
    }
  }

  ${codeTheme}
`;

export default GlobalStyle;
