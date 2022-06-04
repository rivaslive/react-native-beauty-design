import { scale } from 'react-native-size-matters';
import { Platform } from 'react-native';

export type FontType =
  | 'thin'
  | 'light'
  | 'regular'
  | 'medium'
  | 'bold'
  | 'black';

interface FontProps {
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

const isIOS = Platform.OS === 'ios';

export const fonts = {
  thin: {
    fontFamily: isIOS ? 'Helvetica' : 'sans-serif-thin',
    fontWeight: '100',
  },
  light: {
    fontFamily: isIOS ? 'Helvetica-Light' : 'sans-serif-light',
    fontWeight: '200',
  },
  regular: {
    fontFamily: isIOS ? 'Helvetica' : 'sans-serif',
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: isIOS ? 'Helvetica' : 'sans-serif-medium',
    fontWeight: '600',
  },
  bold: {
    fontFamily: isIOS ? 'Helvetica' : 'sans-serif',
    fontWeight: 'bold',
  },
  black: {
    // note(brentvatne): sans-serif-black is only supported on Android 5+,
    // we can detect that here and use it in that case at some point.
    fontFamily: isIOS ? 'Helvetica' : 'sans-serif',
    fontWeight: 'bold',
  },
};

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

export const fontSizes: FontSizesProps = {
  tiny: scale(12),
  xs: scale(14),
  base: scale(16),
  sm: scale(18),
  md: scale(20),
  lg: scale(22),
  xl: scale(24),
};

export const titleFontSizes: TitleFontSizesProps = {
  level1: scale(40),
  level2: scale(30),
  level3: scale(25),
  level4: scale(20),
  level5: scale(18),
};

export interface LetterSpacingsProps {
  tighter: number;
  tight: number;
  normal: number;
  wide: number;
  wider: number;
  widest: number;
}
