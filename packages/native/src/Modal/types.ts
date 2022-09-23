import { StyleProp, ViewStyle } from 'react-native';
import type { ReactNode, Component } from 'react';
import type { IconProps } from '../Icon';

type PositionType = 'top' | 'bottom' | 'center';

export type ModalProps = {
  children?: ReactNode;
  extra?: ReactNode;
  hiddenBar?: boolean;
  closable?: boolean;
  fullScreen?: boolean;
  scrollable?: boolean;
  maskClosable?: boolean;
  maskComponent?: typeof Component;
  position?: PositionType;
  visible?: boolean;
  onClose?: () => void;
  maskStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  buttonCloseStyle?: StyleProp<ViewStyle>;
  closeProps?: IconProps;
  animationType?: 'fade' | 'slide' | 'none';
};
