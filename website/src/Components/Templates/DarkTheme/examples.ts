export const basic = `import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  ThemeProvider,
  Switch,
  Icon,
  useTheme,
} from 'react-native-beauty-design';

const MyScreen = () => {
  const { setTheme, theme } = useTheme();

  return (
    <View style={styles.container}>
      <Switch
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
    </View>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <MyScreen />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
`;
