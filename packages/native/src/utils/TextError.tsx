import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { scale } from 'react-native-size-matters';

import { useTheme } from '../Context/theme/context';

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
    marginTop: scale(5),
    fontSize: scale(14),
    lineHeight: scale(16),
    textAlign: 'left',
  },
});
