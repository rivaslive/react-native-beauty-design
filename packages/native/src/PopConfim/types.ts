import type { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

type PopConfirmType = 'default' | 'delete';

export type PopConfirmProps = {
  children?: ReactNode;
  extra?: ReactNode;
  okText?: string;
  cancelText?: string;
  type?: PopConfirmType;
  visible?: boolean;
  onClose: () => void;
  onOk?: () => void;
};

export type PropHeaderProps = {
  title: string;
  description: string;
  image?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export type PropContentProps = {
  children?: ReactNode;
  withBorder?: boolean;
  style?: StyleProp<ViewStyle>;
};

export type PropFooterProps = {
  children?: ReactNode;
  withBorder?: boolean;
  noPadding?: boolean;
  style?: StyleProp<ViewStyle>;
};
