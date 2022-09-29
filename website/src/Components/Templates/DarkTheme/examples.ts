export const basic = `import React from 'react';
import {
  ThemeProvider,
  Switch,
  Icon,
  useTheme,
} from 'react-native-beauty-design';

const MyScreen = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Switch
      thumbStyle={{ marginTop: 100 }}
      value={theme === 'dark'}
      onChange={(isDark) => {
        setTheme({
          theme: isDark ? 'dark' : 'light',
        });
      }}
      icon={{
        false: <Icon name="sunny" type="ionicon" />,
        true: <Icon name="moon" type="ionicon" />,
      }}
    />
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <MyScreen />
    </ThemeProvider>
  );
}
`;
