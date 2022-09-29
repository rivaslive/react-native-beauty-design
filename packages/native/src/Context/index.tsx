import React from 'react';
import {
  ThemeProviderProps,
  ThemeProvider as InternalThemeProvider,
} from './theme/context';
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

export { ThemeProvider, useMessage };
