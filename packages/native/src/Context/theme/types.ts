import { colorsLight } from './colors';

export type ColorType = keyof typeof colorsLight | string;

export type FontType =
  | 'thin'
  | 'light'
  | 'regular'
  | 'medium'
  | 'bold'
  | 'black';

export interface FontProps {
  fontFamily: string;
  fontWeight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

export interface FontTypes {
  thin: FontProps;
  light: FontProps;
  regular: FontProps;
  medium: FontProps;
  bold: FontProps;
  black: FontProps;
}

export interface FontSizesProps {
  tiny: number;
  xs: number;
  base: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface TitleFontSizesProps {
  level1: number;
  level2: number;
  level3: number;
  level4: number;
  level5: number;
}
