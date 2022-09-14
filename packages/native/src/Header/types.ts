import { ReactNode } from 'react';

export interface HeaderProps {
  dynamicComponent: ReactNode;
  titleOnScroll: ReactNode | string;
}
