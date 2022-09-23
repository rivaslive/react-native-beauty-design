import type { ReactNode, Component } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export type ElementType = 'default' | 'success' | 'info' | 'warning' | 'error';
export type MessageType = 'default' | 'shadow';

export interface MessageProps {
  content: string;
  type?: MessageType;
  withBoxShadow?: boolean;
  withIcon?: boolean;
  internalType?: ElementType;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<ViewStyle>;
  onPress?: () => void;
  Component?: typeof Component;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export type ElementListType = {
  id: string;
  closable: boolean;
  duration: number;
  top?: number;
  onPress?: () => void;
  component: JSX.Element;
};

export type MessageOptions = Partial<
  Omit<MessageProps, 'internalType' | 'content'>
> & {
  key?: any;
  duration?: number;
  closable?: boolean;
  onPress?: () => void;
};

export type MessageContextType = {
  message: {
    default: (content: string, opts?: MessageOptions) => void;
    success: (content: string, opts?: MessageOptions) => void;
    setHeight: (height: number) => void;
    error: (content: string, opts?: MessageOptions) => void;
    info: (content: string, opts?: MessageOptions) => void;
    warning: (content: string, opts?: MessageOptions) => void;
  };
};
