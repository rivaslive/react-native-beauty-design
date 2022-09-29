export const basic = `import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme, Switch, Icon } from 'react-native-beauty-design';

const MyScreen = () => {
  const { setTheme } = useTheme();

  return (
    <Switch
      thumbStyle={{ marginTop: 100 }}
      onChange={(isDark: boolean) => {
        setTheme({
          isDark: isDark
        })
      }}
      icon={{
        false: (
          <Icon
            name="sunny"
            type="ionicon"
            color="white"
          />
        ),
        true: (
          <Icon
            name="moon"
            type="ionicon"
            color="white"
          />
        ),
      }}
    />
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <MyScreen />
      </ThemeProvider>
    </SafeAreaProvider>
)};
`;
