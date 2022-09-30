import React from 'react';
import {
  ThemeProviderProps,
  ThemeProvider as InternalThemeProvider,
} from './theme/context';
import {
  colorsDark,
  colorsLight,
  paddingSizes,
  marginSizes,
  zIndices,
  borderRadius,
} from './theme/defaultValues';
import { MessageProvider, useMessage } from './message/context';

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
  disableDarkMode = false,
}) => {
  return (
    <InternalThemeProvider theme={theme} disableDarkMode={disableDarkMode}>
      <MessageProvider>{children}</MessageProvider>
    </InternalThemeProvider>
  );
};

export {
  ThemeProvider,
  useMessage,
  colorsDark,
  colorsLight,
  paddingSizes,
  marginSizes,
  zIndices,
  borderRadius,
};
