import React from 'react';
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';

import { Ripple } from '../Ripple';
import { useTheme } from '../Context/theme/context';
import { getColorForBackground, getOpacity } from '../utils';

import type { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  textColor,
  disabled,
  loading,
  style,
  textStyle,
  contentStyle,
  disableTransform,
  disableRipple,
  shadow,
  textAlign = 'center',
  Component = Ripple,
  size = 'middle',
  color = 'primary',
  type = 'solid',
  shape = 'round',
  textProps = {},
  ...rest
}) => {
  const { colors, borderRadius, isDark, fonts, fontSizes, activeOpacity } =
    useTheme();

  const isSolid = type === 'solid';
  const internalColor = colors[color] || color;
  const colorText = textColor || getColorForBackground(internalColor);

  return (
    <Component
      disabled={disabled}
      disableRipple={disabled || disableRipple}
      activeOpacity={activeOpacity}
      disableTransform={disabled || disableTransform}
      onPress={loading || disabled ? undefined : onPress}
      {...rest}
      style={StyleSheet.flatten([
        {
          borderRadius: shape === 'circle' ? borderRadius.max : borderRadius.lg,
        },
        isSolid && {
          backgroundColor: internalColor,
        },
        type === 'flat' && {
          backgroundColor: getOpacity(internalColor, 0.3),
        },
        type === 'outline' && {
          borderWidth: 1,
          borderColor: internalColor,
        },
        shadow && [
          styles.shadow,
          {
            shadowColor: internalColor,
            shadowOpacity: isDark ? 0.9 : 0.5,
          },
        ],
        disabled &&
          isSolid && {
            backgroundColor: colors.accents5,
          },
        disabled &&
          !isSolid && {
            borderColor: colors.accents5,
          },
        type !== 'link' && styles[size],
        style,
      ])}
    >
      <View
        style={StyleSheet.flatten([
          styles.button,
          styles[`text_${textAlign}`],
          contentStyle,
        ])}
      >
        {loading && (
          <ActivityIndicator
            style={styles.loading}
            size={fontSizes.sm}
            color={
              type === 'flat'
                ? colors[textColor] || internalColor
                : colors[colorText] || colorText
            }
          />
        )}
        <Text
          {...textProps}
          style={StyleSheet.flatten([
            fonts.bold,
            {
              textAlign,
              fontSize: fontSizes.base,
              color: !isSolid ? internalColor : colors[colorText] || colorText,
            },
            type === 'flat' && {
              color: colors[textColor] || internalColor,
            },
            disabled &&
              !isSolid && {
                color: colors.accents5,
              },
            textStyle,
          ])}
        >
          {children}
        </Text>
      </View>
    </Component>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text_left: {
    justifyContent: 'flex-start',
  },
  text_center: {
    justifyContent: 'center',
  },
  text_right: {
    justifyContent: 'flex-end',
  },
  loading: {
    lineHeight: 0,
    paddingTop: 2,
    marginRight: 5,
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 12,
  },
  small: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 10,
    paddingLeft: 10,
  },
  middle: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 18,
    paddingLeft: 18,
  },
  large: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 18,
    paddingLeft: 18,
  },
  xLarge: {
    paddingTop: 22,
    paddingBottom: 22,
    paddingRight: 24,
    paddingLeft: 25,
  },
});
