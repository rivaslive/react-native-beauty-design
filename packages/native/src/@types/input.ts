import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export type SizeType = 'small' | 'middle' | 'large';

export const sizes = StyleSheet.create({
  small: {
    padding: scale(10),
    paddingRight: scale(8),
    paddingLeft: scale(8),
  },
  middle: {
    padding: scale(16),
    paddingRight: scale(14),
    paddingLeft: scale(14),
  },
  large: {
    padding: scale(22),
    paddingRight: scale(14),
    paddingLeft: scale(14),
  },
});
