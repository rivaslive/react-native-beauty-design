import type { ReactNode } from 'react';
import type { ViewStyle } from 'react-native';
import type { SizeType } from '../@types/input';
import type { ColorType } from '../Context/theme/colors';

export type BadgeVariant = 'default' | 'flat' | 'dot' | 'bordered';
export type BadgeType = 'rounded' | 'square';
export type BadgePlacements =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left';

export interface BadgeProps {
  content?: number | string;
  size?: SizeType;
  isPressable?: boolean;
  onPress?: (e: any) => void;
  bold?: boolean;
  disableOutline?: boolean;
  type?: BadgeType;
  variant?: BadgeVariant;
  color?: ColorType;
  background?: ColorType;
  style?: ViewStyle;
  placement?: BadgePlacements;
  wrapperStyle?: ViewStyle;
  childrenStyle?: ViewStyle;
  isInvisible?: boolean;
  enableShadow?: boolean;
  children?: ReactNode;
}
