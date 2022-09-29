import { css } from 'styled-components';

export const codeTheme = css`
  pre[class*='language-'],
  code[class*='language-'] {
    background: rgb(54, 52, 73);
    color: #fcfcfa;
    text-shadow: 0 1px rgb(54, 52, 73);
    font-family: 'Fira Mono', Monaco, 'Lucida Console', 'Liberation Mono',
      'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Selection */

  code[class*='language-']::-moz-selection,
  code[class*='language-'] *::-moz-selection,
  pre[class*='language-'] *::-moz-selection {
    background: hsl(220, 13%, 28%);
    color: inherit;
    text-shadow: none;
  }

  code[class*='language-']::selection,
  code[class*='language-'] *::selection,
  pre[class*='language-'] *::selection {
    background: hsl(221, 9%, 35%);
    color: inherit;
    text-shadow: none;
  }

  /* Code blocks */

  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 14px;

    code div {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      font-family: 'Fira Mono', Monaco, 'Lucida Console', 'Liberation Mono',
        'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace;
    }
  }

  /* Inline code */

  :not(pre) > code[class*='language-'] {
    padding: 0.2em 0.3em;
    border-radius: 0.3em;
    white-space: normal;
  }

  /*********************************************************
  * Tokens
  */

  .namespace {
    opacity: 0.7;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #6a9955;
  }

  .token.punctuation {
    color: #d4d4d4;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #b5cea8;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.inserted {
    color: #ce9178;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #d4d4d4;
    background: rgb(54, 52, 73);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #ff6188 !important;
  }

  .token.function {
    color: #dcdcaa;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #d16969;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.constant {
    color: #9cdcfe;
  }

  .token.class-name,
  .token.builtin {
    color: #4ec9b0;
  }

  .token.parameter {
    color: #9cdcfe;
  }

  .token.interpolation {
    color: #9cdcfe;
  }

  .token.punctuation.interpolation-punctuation {
    color: #569cd6;
  }

  .token.boolean {
    color: #569cd6;
  }

  .token.property {
    color: #9cdcfe;
  }

  .token.selector {
    color: #d7ba7d;
  }

  .token.tag {
    color: #569cd6;
  }

  .token.attr-name {
    color: #9cdcfe;
  }

  .token.attr-value {
    color: #ce9178;
  }

  .token.entity {
    color: #4ec9b0;
    cursor: unset;
  }

  .token.namespace {
    color: #4ec9b0;
  }

  /*********************************************************
  * Language Specific
  */

  pre[class*='language-javascript'],
  code[class*='language-javascript'] {
    color: #4ec9b0;
  }

  pre[class*='language-css'],
  code[class*='language-css'] {
    color: #ce9178;
  }

  pre[class*='language-html'],
  code[class*='language-html'] {
    color: #d4d4d4;
  }

  .language-html .token.punctuation {
    color: #808080;
  }

  /*********************************************************
  * Line highlighting
  */

  pre[data-line] {
    position: relative;
  }

  pre[class*='language-'] > code[class*='language-'] {
    position: relative;
    z-index: 1;
  }
`;
