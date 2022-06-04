import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-beauty-design';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const colors = {
  magenta: '#9E4F88',
  opaityWhiteText: 'rgba(0, 0, 0, .6)',
  opaityBlackText: 'rgba(255, 255, 255, .6)',
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar />
        <ThemeProvider theme={{ colors }}>
          <Navigation colorScheme={colorScheme} />
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}
