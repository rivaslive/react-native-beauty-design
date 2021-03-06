import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

import { useTheme } from '../Context/theme';
import type { FontType } from '../Context/fonts';
import type { ColorType } from '../Context/colors';
import type { AlignType, LevelType, TransformType } from '../@types/typography';

export interface TitleProps extends TextProps {
  level?: LevelType;
  color?: ColorType;
  font?: FontType;
  align?: AlignType;
  transform?: TransformType;
}

export const Title: React.FC<TitleProps> = ({
  children,
  font = 'bold',
  color = 'text',
  align = 'left',
  transform = 'none',
  level = 1,
  style = {},
}) => {
  const { colors, titleFontSizes, fonts } = useTheme();

  return (
    <Text
      style={StyleSheet.flatten([
        {
          fontSize: titleFontSizes[`level${level}`],
          fontFamily: fonts[font].fontFamily,
          fontWeight: fonts[font].fontWeight,
        },
        { textAlign: align, textTransform: transform },
        { color: colors[color] || color },
        stylesLevel[level],
        style,
      ])}
    >
      {children}
    </Text>
  );
};

const stylesLevel = StyleSheet.create({
  1: {
    marginBottom: 20,
  },
  2: {
    marginBottom: 15,
  },
  3: {
    marginBottom: 10,
  },
  4: {
    marginBottom: 5,
  },
  5: {
    marginBottom: 0,
  },
});
