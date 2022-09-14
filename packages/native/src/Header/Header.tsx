import React from 'react';
import { Animated, StyleSheet } from 'react-native';

import { Text } from '../Text';
import { useTheme } from '../Context/theme';
import type { HeaderProps } from './types';
import { scale } from 'react-native-size-matters';

const Header_Min_Height = 100;
const Header_Scroll_Height = Header_Min_Height * 0.7;

export const Header: React.FC<HeaderProps> = ({
  titleOnScroll,
  dynamicComponent,
}) => {
  const { scrollOffsetY, width, colors, zIndices } = useTheme();
  const [fadeInOpacity] = React.useState(new Animated.Value(0));
  const [opacityNumber, setOpacityNumber] = React.useState(0);
  const [heightDynamic, setHeightDynamic] = React.useState<number>(null);

  const onLayoutDynamic = (event) => {
    const { height } = event.nativeEvent.layout;
    setHeightDynamic((prev) => {
      if (prev > 0) {
        return prev;
      }
      const calcHeight = height - Header_Min_Height;
      return calcHeight < 1 ? Header_Min_Height + 5 : height;
    });
  };

  const fadeInAnimation = React.useCallback(
    (start: number, end: number) => {
      Animated.timing(fadeInOpacity, {
        toValue: start,
        duration: 0,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(fadeInOpacity, {
          toValue: end,
          duration: 200,
          delay: 0,
          useNativeDriver: true,
        }).start();
      });
    },
    [fadeInOpacity]
  );

  const animateDynamicHeight =
    heightDynamic !== null
      ? scrollOffsetY.interpolate({
          inputRange: [0, heightDynamic - Header_Scroll_Height],
          outputRange: [heightDynamic, 0],
          extrapolate: 'clamp',
        })
      : new Animated.Value(0);

  animateDynamicHeight?.addListener(({ value }) => {
    const TOLERANCE_HEIGHT = 2;
    setOpacityNumber(value <= TOLERANCE_HEIGHT ? 1 : 0);
  });

  const animateDynamicTranslate =
    heightDynamic !== null
      ? scrollOffsetY.interpolate({
          inputRange: [0, heightDynamic - Header_Scroll_Height],
          outputRange: [0, -heightDynamic],
          extrapolate: 'clamp',
        })
      : new Animated.Value(0);

  React.useEffect(() => {
    if (opacityNumber > 0) {
      fadeInAnimation(0, 1);
    } else {
      fadeInAnimation(1, 0);
    }
  }, [fadeInAnimation, opacityNumber]);

  return (
    <>
      {/* Title element */}
      <Animated.View
        style={StyleSheet.flatten([
          styles.header,
          {
            width,
            zIndex: zIndices.max,
            backgroundColor:
              opacityNumber === 1 ? 'rgba(0,0,0,.2)' : colors.foreground,
          },
        ])}
      >
        <Animated.View
          style={{
            opacity: fadeInOpacity,
          }}
        >
          {typeof titleOnScroll === 'string' ? (
            <Text bold>{titleOnScroll}</Text>
          ) : (
            titleOnScroll
          )}
        </Animated.View>
      </Animated.View>

      {/* dynamic child */}
      {/*<Animated.View
        onLayout={onLayoutDynamic}
        style={StyleSheet.flatten([
          styles.dynamicHead,
          animateDynamicHeight !== null && {
            height: animateDynamicHeight,
          },
          {
            width,
            zIndex: zIndices['10'],
          },
        ])}
      >
        <Animated.View
          onLayout={onLayoutDynamic}
          style={StyleSheet.flatten([
            {
              transform: [
                {
                  translateY: animateDynamicTranslate || 0,
                },
              ],
            },
          ])}
        >
          {dynamicComponent}
        </Animated.View>
      </Animated.View>*/}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
  },
  header: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    height: Header_Min_Height,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: scale(10),
    paddingHorizontal: scale(10),
    paddingBottom: 0,
  },
  dynamicHead: {
    overflow: 'hidden',
    paddingHorizontal: scale(10),
  },
});
