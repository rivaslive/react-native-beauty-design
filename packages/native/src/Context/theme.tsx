import { Appearance, Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';
import React, { createContext, useEffect, useState } from 'react';
import {
  fonts,
  fontSizes,
  FontSizesProps,
  FontTypes,
  titleFontSizes,
  TitleFontSizesProps,
} from './fonts';
import { ColorType, colorsDark, colorsLight } from './colors';

const { width } = Dimensions.get('window');

interface ZIndexType {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  10: number;
  max: number;
}

interface SizingType {
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  max: number;
}

interface ThemeProps {
  theme: 'light' | 'dark';
  isDark: boolean;
  fonts: FontTypes;
  fontSizes: FontSizesProps;
  titleFontSizes: TitleFontSizesProps;
  zIndices: ZIndexType;
  borderRadius: SizingType;
  paddingSizes: SizingType;
  marginSizes: SizingType;
  colors: {
    [key: ColorType | string]: string;
  };
}

const initialValue: ThemeProps = {
  theme: 'light',
  isDark: false,
  fonts: fonts as FontTypes,
  fontSizes,
  titleFontSizes,
  zIndices: {
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    10: 1000,
    max: 9999,
  },
  borderRadius: {
    xxs: scale(1),
    xs: scale(2),
    sm: scale(4),
    md: scale(5),
    lg: scale(8),
    xl: scale(12),
    xxl: scale(14),
    max: scale(20),
  },
  paddingSizes: {
    xxs: scale(5),
    xs: scale(7),
    sm: scale(10),
    md: scale(12),
    lg: scale(14),
    xl: scale(20),
    xxl: scale(24),
    max: scale(30),
  },
  marginSizes: {
    xxs: scale(5),
    xs: scale(7),
    sm: scale(10),
    md: scale(12),
    lg: scale(14),
    xl: scale(20),
    xxl: scale(24),
    max: scale(30),
  },
  colors: colorsLight,
};

type OptionalThemeProps = Omit<
  Partial<ThemeProps>,
  'isDark' | 'device' | 'isIos' | 'isAndroid'
>;

interface ThemeContextProps extends ThemeProps {
  setTheme?: (newTheme: OptionalThemeProps) => void;
  width: number;
}

const ThemeContext = createContext<ThemeContextProps>({
  ...initialValue,
  width,
});

interface ThemeProviderProps {
  children: React.ReactNode;
  disableDarkMode?: boolean;
  theme?: OptionalThemeProps;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
  disableDarkMode = false,
}) => {
  const [internalTheme, setInternalTheme] = useState<ThemeProps>(initialValue);
  const colorScheme = Appearance.getColorScheme();
  const isDark: boolean = disableDarkMode ? false : colorScheme === 'dark';

  const setTheme = React.useCallback((_theme: OptionalThemeProps) => {
    setInternalTheme((prevTheme) => {
      return {
        isDark: prevTheme.isDark,
        theme: _theme?.theme ?? prevTheme?.theme,
        colors: Object.assign(prevTheme?.colors, _theme?.colors),
        fonts: Object.assign(prevTheme.fonts, _theme?.fonts),
        fontSizes: Object.assign(prevTheme.fontSizes, _theme?.fontSizes),
        titleFontSizes: Object.assign(
          prevTheme.titleFontSizes,
          _theme?.titleFontSizes
        ),
        marginSizes: Object.assign(prevTheme.marginSizes, _theme?.marginSizes),
        paddingSizes: Object.assign(
          prevTheme.paddingSizes,
          _theme?.paddingSizes
        ),
        zIndices: Object.assign(prevTheme.zIndices, _theme?.zIndices),
        borderRadius: Object.assign(
          prevTheme.borderRadius,
          _theme?.borderRadius
        ),
      };
    });
  }, []);

  useEffect(() => {
    if (theme) {
      setTheme(theme);
    }
  }, [setTheme, theme]);

  useEffect(() => {
    const colors = isDark ? colorsDark : colorsLight;
    setInternalTheme((prevTheme) => ({
      ...prevTheme,
      colors: Object.assign(colors, theme?.colors),
    }));
  }, [isDark, theme]);

  return (
    <ThemeContext.Provider
      value={{
        ...internalTheme,
        setTheme,
        width,
        isDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
