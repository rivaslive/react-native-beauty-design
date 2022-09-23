import type { ReactNode } from 'react';
import type { ColorType } from '../Context/theme/colors';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface HeaderProps {
  heightDynamic: number;
  titleOnScroll: ReactNode | string;
  background?: ColorType;
  backgroundSticky?: ColorType;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  titlePosition?: 'left' | 'center' | 'right';
  titleStyle?: StyleProp<TextStyle>;
  headerStyle?: StyleProp<ViewStyle>;
}
