import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { useTheme } from '../Context/theme';

export const TextError: React.FC<{ children: string }> = ({ children }) => {
  const { colors } = useTheme();

  return (
    <Text
      numberOfLines={1}
      style={StyleSheet.flatten([styles.text, { color: colors.error }])}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 5,
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'left',
  },
});
