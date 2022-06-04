import React, { FC, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as TextNative,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import type { AlignType } from '../@types/typography';
import type { ColorType } from '../Context/colors';
import type { FontSizesProps } from '../Context/fonts';

import { ButtonProps, Button } from '../Button';
import { useTheme } from '../Context/theme';

export interface TextProps {
  children?: any;
  color?: ColorType;
  lines?: number;
  readMore?: boolean;
  textReadMore?: string;
  textReadLess?: string;
  size?: keyof FontSizesProps | number;
  lineHeight?: keyof FontSizesProps | number;
  italic?: boolean;
  underline?: boolean;
  bold?: boolean;
  align?: AlignType;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  readMoreButtonProps?: Partial<ButtonProps>;

  [key: string]: unknown;
}

export const Text: FC<TextProps> = ({
  children,
  lines,
  lineHeight,
  size = 'base',
  color = 'text',
  readMore = false,
  textReadMore = 'Read more!',
  textReadLess = 'Read less!',
  align = 'left',
  bold = false,
  underline = false,
  italic = false,
  containerStyle = {},
  style = {},
  readMoreButtonProps = {},
  ...rest
}) => {
  const { colors, fonts, fontSizes } = useTheme();
  const [showMore, setShowMore] = useState<boolean>(false);

  const changeShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const font = bold ? 'bold' : 'regular';

  return (
    <View style={StyleSheet.flatten([containerStyle, styles.container])}>
      <TextNative
        {...rest}
        numberOfLines={showMore ? 0 : lines}
        style={StyleSheet.flatten([
          {
            fontFamily: fonts[font].fontFamily,
            fontWeight: fonts[font].fontWeight,
            textAlign: align,
            fontSize: fontSizes[size] || size,
            color: colors[color] || color,
          },
          lineHeight && {
            lineHeight: fontSizes[size] ? fontSizes[size] + 4 : size,
          },
          italic && styles.italic,
          underline && styles.underline,
          style,
        ])}
      >
        {children}
      </TextNative>
      {readMore && (
        <Button
          type="link"
          onPress={changeShowMore}
          {...readMoreButtonProps}
          style={StyleSheet.flatten([
            readMoreButtonProps?.style,
            styles.readMore,
          ])}
        >
          {showMore ? textReadLess : textReadMore}
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
  readMore: {
    marginRight: 0,
    marginLeft: 'auto',
  },
});
