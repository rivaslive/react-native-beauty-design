import React from 'react';
import { StyleSheet, View } from 'react-native';
import { scale } from 'react-native-size-matters';

import { TextError } from '../utils/TextError';
import type { NumberStringValue, RadioGroupProps, RadioProps } from './types';

export const GAP = scale(10);

export const Group: React.FC<RadioGroupProps> = ({
  align = 'horizontal',
  children: _children,
  deactiveColor,
  value,
  error,
  onChange,
  size,
  type,
  textError,
  defaultValue,
  activeColor,
}) => {
  const [internalValue, setInternalValue] =
    React.useState<NumberStringValue>('');
  const [isError, setError] = React.useState<undefined | boolean>(false);

  const children = React.useMemo(() => {
    if (!_children) {
      return [];
    }
    if (React.Children.count(_children) === 1) {
      return [_children];
    }
    return _children;
  }, [_children]);

  const onInternalChange = (val: NumberStringValue) => {
    setInternalValue(val);
    setError(false);
    onChange && onChange(val);
  };

  React.useEffect(() => {
    setInternalValue((prev) => {
      if (prev !== value) {
        return value;
      }
      return prev;
    });
  }, [value]);

  React.useEffect(() => {
    setInternalValue((prev) => {
      if (!prev) {
        return defaultValue;
      }
      return prev;
    });
  }, [defaultValue]);

  React.useEffect(() => {
    typeof error === 'boolean' && setError(error);
  }, [error]);

  return (
    <View style={styles.wrapper}>
      <View style={StyleSheet.flatten([styles.content, styles[align]])}>
        {React.Children.map<React.ReactNode, React.ReactNode>(
          children,
          (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement<RadioProps>(child as any, {
                isActive: internalValue === child?.props?.value,
                activeColor: isError ? 'error' : activeColor,
                deactiveColor: isError ? 'error' : deactiveColor,
                size,
                type,
                ...(child?.props || {}),
                onPress: onInternalChange,
              });
            }
            return null;
          }
        )}
      </View>
      {isError && textError && <TextError>{textError}</TextError>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  content: {
    marginVertical: -(GAP / 2),
    marginHorizontal: -(GAP / 2),
  },
  vertical: {
    flexDirection: 'column',
  },
  horizontal: {
    flexDirection: 'row',
  },
});
