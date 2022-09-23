import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useTheme } from '../Context/theme/context';
import type { CardDividerProps } from './types';

const Divider: React.FC<CardDividerProps> = ({
  height = 1,
  background = 'border',
  style = {},
}) => {
  const { colors } = useTheme();

  return (
    <View
      style={StyleSheet.flatten([
        {
          height,
          backgroundColor: colors[background] || background,
        },
        style,
      ])}
    />
  );
};

export default Divider;
