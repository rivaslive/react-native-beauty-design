import React, { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  Text,
  TextProps,
  ActivityIndicator,
  View,
} from 'react-native';

import type { ColorType } from '../Context/colors';

import { useTheme } from '../Context/theme';
import { getColorForBackground, getOpacity } from '../utils';

export type ButtonSize = 'small' | 'middle' | 'large' | 'xLarge';
export type ButtonType = 'solid' | 'link' | 'flat' | 'outline';

export interface ButtonProps extends TouchableOpacityProps {
  children: string | ReactNode;
  onPress?: (event?: any) => void;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
  shadow?: boolean;
  textColor?: ColorType;
  size?: ButtonSize;
  icon?: ReactNode;
  borderRadius?: number;
  type?: ButtonType;
  shape?: 'circle' | 'round';
  style?: StyleProp<ViewStyle>;
  styleInternal?: StyleProp<ViewStyle>;
  textProps?: Omit<TextProps, 'children'>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  textColor,
  disabled,
  loading,
  shadow,
  size = 'middle',
  color = 'primary',
  type = 'solid',
  shape = 'round',
  styleInternal = {},
  textProps = {},
  style = {},
  ...rest
}) => {
  const { colors, borderRadius, isDark, fonts, fontSizes } = useTheme();

  const isSolid = type === 'solid';
  const internalColor = colors[color] || color;
  const colorText = textColor || getColorForBackground(internalColor);

  return (
    <TouchableOpacity
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
      <View style={StyleSheet.flatten([styles.button, styleInternal])}>
        <Text
          {...textProps}
          style={StyleSheet.flatten([
            fonts.bold,
            {
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
            textProps?.style,
          ])}
        >
          {children}
          {loading ? ' ' : ''}
        </Text>

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
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loading: {
    lineHeight: 0,
    paddingTop: 2,
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
