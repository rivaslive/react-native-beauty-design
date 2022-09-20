import { Animated, Appearance, Dimensions } from 'react-native';
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

const { width, height } = Dimensions.get('window');

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
  card: number;
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
  borderWidth: number;
  borderRadius: SizingType;
  paddingSizes: SizingType;
  marginSizes: SizingType;
  activeOpacity: number;
  colors: {
    [key in ColorType]: string;
  };
}

const initialValue: ThemeProps = {
  theme: 'light',
  isDark: false,
  fonts: fonts as FontTypes,
  fontSizes,
  titleFontSizes,
  activeOpacity: 0.6,
  zIndices: {
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    10: 1000,
    max: 9999,
  },
  borderWidth: 2,
  borderRadius: {
    xxs: scale(1),
    xs: scale(2),
    sm: scale(4),
    md: scale(5),
    card: scale(20),
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
    card: scale(15),
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
    card: scale(20),
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
  height: number;
  scrollOffsetY: Animated.Value;
  onScroll: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  ...initialValue,
  width,
  height,
  scrollOffsetY: new Animated.Value(0),
  onScroll() {},
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
  let scrollOffsetY = React.useRef(new Animated.Value(0)).current;

  const [internalTheme, setInternalTheme] = useState<ThemeProps>(
    JSON.parse(JSON.stringify(initialValue))
  );
  const colorScheme = Appearance.getColorScheme();
  const isDark: boolean = disableDarkMode ? false : colorScheme === 'dark';

  const onScroll = React.useMemo(
    () =>
      Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
        { useNativeDriver: false }
      ),
    [scrollOffsetY]
  );

  const setTheme = React.useCallback((_theme: OptionalThemeProps) => {
    setInternalTheme((prevTheme) => {
      return {
        isDark: prevTheme.isDark,
        theme: _theme?.theme ?? prevTheme.theme,
        borderWidth: _theme?.borderWidth ?? prevTheme.borderWidth,
        activeOpacity: _theme?.activeOpacity ?? prevTheme.activeOpacity,
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

  const output = React.useMemo(() => {
    return {
      ...internalTheme,
      setTheme,
      width,
      height,
      isDark,
      scrollOffsetY,
      onScroll,
    };
  }, [internalTheme, isDark, setTheme, scrollOffsetY, onScroll]);

  return (
    <ThemeContext.Provider value={output}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
