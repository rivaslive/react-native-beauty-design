export const basic = `import React from 'react';
import { ThemeProvider } from 'react-native-beauty-design';

const App = () => {
  return (
    <ThemeProvider>
      ...
    </ThemeProvider>
)};`;

export const editingTheme = `import React from 'react';
import { ThemeProvider } from 'react-native-beauty-design';

const theme = {
  colors: {
    newColor: '#f1f1f1'
  }
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      ...
    </ThemeProvider>
)};`;

export const themeObject = `{
  "type": "light", // light / dark
  "theme": {
    "colors": {},
    "space": {},
    "fontSizes": {},
    "fonts": {},
    "fontWeights": {},
    "lineHeights": {},
    "letterSpacings": {},
    "sizes": {},
    "borderWidths": {},
    "borderStyles": {},
    "radii": {},
    "shadows": {},
    "zIndices": {},
    "transitions": {}
  }
}`;
