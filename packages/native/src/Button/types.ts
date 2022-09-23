import type { ReactNode, Component } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import type { ColorType } from '../Context/theme/colors';
import type { TextProps } from '../Text';

export type ButtonSize = 'small' | 'middle' | 'large' | 'xLarge';
export type ButtonType = 'solid' | 'link' | 'flat' | 'outline';

export interface ButtonProps {
  children: string | ReactNode;
  onPress?: (event?: any) => void;
  loading?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  disableTransform?: boolean;
  color?: ColorType;
  shadow?: boolean;
  textColor?: ColorType;
  textAlign?: 'left' | 'center' | 'right';
  size?: ButtonSize;
  icon?: ReactNode;
  borderRadius?: number;
  type?: ButtonType;
  Component?: typeof Component;
  shape?: 'circle' | 'round';
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  textProps?: Omit<TextProps, 'children' | 'style'>;
  textStyle?: StyleProp<TextStyle>;
}
