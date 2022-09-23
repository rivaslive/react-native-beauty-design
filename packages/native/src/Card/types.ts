import type { Component, ReactNode } from 'react';
import type { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native';

import type { RippleProps } from '../Ripple/type';
import type { ColorType } from '../Context/theme/colors';

export interface CardProps extends TouchableOpacityProps {
  Component?: typeof Component;
  children?: ReactNode;
  background?: ColorType;
  isPressable?: boolean;
  withBorder?: boolean;
  borderWidth?: number;
  isExpandCard?: number;
  expandContent?: ReactNode;
  rippleProps?: RippleProps;
  onClose?: (event: any) => void;
}

export interface CardHeaderProps {
  Component?: typeof Component;
  children?: ReactNode;
  withBackground?: boolean;
  background?: ColorType;
  isAbsolute?: boolean;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  style?: StyleProp<ViewStyle>;
}

export interface CardFooterProps extends Omit<CardHeaderProps, 'top'> {
  bottom?: number | string;
}

export interface CardBodyProps {
  Component?: typeof Component;
  children?: ReactNode;
  withPadding?: boolean;
  style?: StyleProp<ViewStyle>;
}

export interface CardDividerProps {
  background?: ColorType;
  height?: number | string;
  style?: StyleProp<ViewStyle>;
}
