import React from 'react';
import { scale } from 'react-native-size-matters';
import { StyleSheet, Animated, Easing } from 'react-native';

import { Text } from '../Text';
import { Ripple } from '../Ripple';
import { useCollapse } from './Context';
import { useTheme } from '../Context/theme';
import type { CollapseInternalItemProps, CollapseItemProps } from './types';

const Panel: React.FC<CollapseItemProps> = (props) => {
  let rotate = React.useRef<Animated.Value>(new Animated.Value(0)).current;

  const { colors, paddingSizes, fontSizes } = useTheme();

  const {
    openKeys,
    onChange,
    icon,
    borderColor,
    iconPosition,
    showArrow,
    headerColor,
    contentColor,
    borderless,
  } = useCollapse();

  const {
    children,
    title,
    subTitle,
    id,
    styleHeader,
    styleContent,
    isFirstElement,
  } = props as CollapseInternalItemProps;

  const isOpen = openKeys.includes(id);
  const spin = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  // memos
  const internalOpenIcon = React.useMemo(() => {
    if (icon && showArrow) {
      return (
        <Animated.View
          style={StyleSheet.flatten([
            { transform: [{ rotate: spin }] },
            iconPosition === 'left' && styles.iconLeft,
            iconPosition === 'right' && styles.iconRight,
          ])}
        >
          {icon}
        </Animated.View>
      );
    }
    return null;
  }, [icon, iconPosition, showArrow, spin]);

  // effects
  React.useEffect(() => {
    // First set up animation
    Animated.timing(rotate, {
      toValue: isOpen ? 1 : 0,
      duration: 150,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }).start();
  }, [isOpen, rotate]);

  return (
    <Animated.View>
      <Ripple
        onPress={() => onChange(id)}
        disableRipple={false}
        disableTransform={true}
        style={StyleSheet.flatten([
          styles.header,
          {
            paddingVertical: paddingSizes.lg,
            paddingHorizontal: paddingSizes.card,
            borderTopWidth: isFirstElement || borderless ? 0 : 1,
            borderColor: colors[borderColor] || borderColor,
            backgroundColor: colors[headerColor] || headerColor,
          },
          styleHeader,
        ])}
      >
        <>
          {iconPosition === 'left' ? internalOpenIcon : null}
          <Animated.View style={styles.headerContent}>
            {typeof title === 'string' ? (
              <Text size={fontSizes.sm} fontWeight="500">
                {title}
              </Text>
            ) : (
              title
            )}

            {typeof subTitle === 'string' ? (
              <Text size={fontSizes.xs} color="accents5">
                {subTitle}
              </Text>
            ) : (
              subTitle
            )}
          </Animated.View>
          {iconPosition === 'right' ? internalOpenIcon : null}
        </>
      </Ripple>
      <Animated.View
        style={StyleSheet.flatten([
          styles.content,
          {
            height: isOpen ? 'auto' : 0,
            display: isOpen ? 'flex' : 'none',
            paddingVertical: isOpen ? paddingSizes.card : 0,
            paddingHorizontal: isOpen ? paddingSizes.card : 0,
            backgroundColor: colors[contentColor] || contentColor,
          },
          styleContent,
        ])}
      >
        {typeof children === 'object' ? children : <Text>{children}</Text>}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flex: 1,
  },
  content: {
    backgroundColor: 'transparent',
  },
  iconLeft: {
    marginRight: scale(5),
  },
  iconRight: {
    marginLeft: scale(5),
  },
});

export default Panel;
