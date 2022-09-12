import type { ReactNode } from 'react';
import type { ViewStyle } from 'react-native';
import type { SizeType } from '../@types/input';
import type { ColorType } from '../Context/colors';

export type SwitchType = 'square' | 'rounded';

export interface SwitchProps {
  textError?: string;
  error?: boolean;
  value?: boolean;
  bordered?: boolean;
  size?: SizeType;
  type?: SwitchType;
  defaultValue?: boolean;
  activeColor?: ColorType;
  disabledColor?: ColorType;
  thumbActiveColor?: ColorType;
  thumbDisabledColor?: ColorType;
  borderColor?: ColorType;
  onChange?: (value: boolean) => void;
  thumbStyle?: ViewStyle;
  style?: ViewStyle;
  icon?: {
    false?: ReactNode;
    true?: ReactNode;
  };
}
