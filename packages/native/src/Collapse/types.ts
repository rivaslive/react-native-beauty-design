import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { ColorType } from '../Context/theme/types';

export type KeyType = string | number;
export type IconPosition = 'right' | 'left';

export type CollapseProps = {
  accordion?: boolean;
  borderColor?: ColorType;
  headerColor?: ColorType;
  contentColor?: ColorType;
  showArrow?: boolean;
  borderless?: boolean;
  children?: ReactNode;
  defaultOpenKeys?: KeyType[];
  openKeys?: KeyType[];
  style?: StyleProp<ViewStyle>;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  onChange?: (key: KeyType) => void;
};

export interface CollapseContextProps {
  openKeys: KeyType[];
  icon: ReactNode;
  borderColor: ColorType;
  headerColor: ColorType;
  contentColor: ColorType;
  iconPosition: IconPosition;
  onChange?: (key: KeyType) => void;
  showArrow?: boolean;
  borderless?: boolean;
}

export type CollapseItemProps = {
  id?: KeyType;
  title: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
  subTitle?: ReactNode;
  styleHeader?: StyleProp<ViewStyle>;
  styleContent?: StyleProp<ViewStyle>;
};

export type CollapseInternalItemProps = CollapseItemProps & {
  isFirstElement?: boolean;
  isLastElement?: boolean;
};
