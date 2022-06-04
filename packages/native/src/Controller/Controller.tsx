import React, { FC, useEffect, useState } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

// components
import { Icon } from '../Icon';
import { Text } from '../Text';
import { Button } from '../Button';
import { useTheme } from '../Context/theme';
import { TextError } from '../utils/TextError';

export interface ControllerProps {
  value?: number;
  min?: number;
  max?: number;
  borderColor?: string;
  color?: string;
  width?: number;
  onChange?: (count: number) => void;
  onIncrease?: (count: number) => void;
  onDecrease?: (count: number) => void;
  minOverflow?: () => void;
  maxOverflow?: () => void;
  textError?: string;
  error?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const Controller: React.FC<ControllerProps> = ({
  value,
  max,
  min,
  onChange,
  onIncrease,
  onDecrease,
  minOverflow,
  maxOverflow,
  style,
  textError,
  width = 135,
  error = false,
  color = 'text',
  borderColor = 'accents4',
}) => {
  const { colors, borderRadius } = useTheme();
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    if (typeof value === 'number') {
      setCount(value);
    }
  }, [value]);

  useEffect(() => {
    if (onChange) {
      onChange(count);
    }
  }, [count, onChange]);

  const onAdd = () => {
    setCount((prev) => {
      let newCount = prev + 1;
      if (max && newCount > max) {
        maxOverflow && maxOverflow();
        return prev;
      }
      onIncrease && onIncrease(newCount);
      return newCount;
    });
  };

  const onPrev = () => {
    setCount((prev) => {
      let newCount = prev - 1;
      if (typeof min === 'number' && newCount < min) {
        minOverflow && minOverflow();
        return prev;
      }
      onDecrease && onDecrease(newCount);
      return newCount;
    });
  };

  return (
    <View style={StyleSheet.flatten([styles.wrapper, { width }])}>
      <View
        style={StyleSheet.flatten([
          styles.content,
          {
            backgroundColor: colors.inputColor,
            borderRadius: borderRadius.lg,
            borderColor: error
              ? colors.error
              : colors[borderColor] || borderColor,
          },
          style,
        ])}
      >
        <View style={styles.item}>
          <Button
            icon
            type="link"
            color="black"
            onPress={onPrev}
            styleInternal={styles.button}
            textProps={{
              style: StyleSheet.flatten([
                {
                  color: colors.accents3,
                },
                styles.icon,
              ]),
            }}
          >
            <Icon
              size={18}
              name="minus"
              type="antdesign"
              color={error ? colors.error : colors[borderColor] || borderColor}
            />
          </Button>
        </View>

        <View style={styles.item}>
          <Text size={16} color={colors[color] || color} bold>
            {count}
          </Text>
        </View>

        <View style={styles.item}>
          <Button
            icon
            type="link"
            color="black"
            onPress={onAdd}
            styleInternal={styles.button}
            textProps={{
              style: StyleSheet.flatten([
                {
                  color: colors.accents3,
                },
                styles.icon,
              ]),
            }}
          >
            <Icon
              size={18}
              name="plus"
              type="antdesign"
              color={error ? colors.error : colors[borderColor] || borderColor}
            />
          </Button>
        </View>
      </View>
      {<TextError>{error && textError && textError}</TextError>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    borderWidth: 1,
  },
  icon: {
    marginTop: 5,
  },
  item: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    paddingLeft: 9,
    paddingRight: 9,
    margin: 0,
  },
});
