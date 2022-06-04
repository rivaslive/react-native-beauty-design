import React from 'react';
import { SizeType } from '../@types/input';
import { ColorType } from '../Context/colors';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export type RadioType = 'circle' | 'square';

export interface RadioProps {
  value: string;
  label: string;
  type?: RadioType;
  size?: SizeType;
  onPress?: (key: string) => void;
  activeKey?: string;
  activeColor?: ColorType;
  deactiveColor?: ColorType;
}

export const Radio: React.FC<RadioProps> = ({
  onPress,
  value,
  label,
  activeKey,
  activeColor,
  deactiveColor,
  type = 'circle',
  size = 'middle',
}) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.button}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
