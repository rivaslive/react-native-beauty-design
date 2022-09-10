import { SizeType } from '../@types/input';
import { ColorType } from '../Context/colors';
import { ReactElement } from 'react';

type RadioType = 'circle' | 'square';

export type NumberStringValue = string | number;

export interface RadioProps {
  activeColor?: ColorType;
  deactiveColor?: ColorType;
  label: string;
  size?: SizeType;
  type?: RadioType;
  value: NumberStringValue;
  onPress?: (value: NumberStringValue) => void;
  isActive?: boolean;
}

type AlignType = 'horizontal' | 'vertical';

export interface RadioGroupProps {
  activeColor?: ColorType;
  align?: AlignType;
  children?: ReactElement<RadioProps> | ReactElement<RadioProps>[];
  deactiveColor?: ColorType;
  defaultValue?: NumberStringValue;
  error?: boolean;
  onChange?: (key: NumberStringValue) => void;
  textError?: string;
  value?: NumberStringValue;
  size?: SizeType;
  type?: RadioType;
}
