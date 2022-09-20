import React, { useCallback } from 'react';
import {
  Animated,
  Image as ImageNative,
  ImageLoadEventData,
  ImageProps as RNImageProps,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  View,
  Pressable,
  ViewStyle,
  Text,
} from 'react-native';
import { ImageSrcType } from '../@types/image';

export type ImageProps = Omit<RNImageProps, 'source'> & {
  Component?: typeof React.Component;
  onPress?(): void;
  onLongPress?(): void;
  source: ImageSrcType;
  height?: number | string;
  width?: number | string;
  ImageComponent?: typeof React.Component;
  PlaceholderContent?: React.ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
  childrenContainerStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<ViewStyle>;
  transition?: boolean;
  children?: React.ReactNode;
  transitionDuration?: number;
};

export const Image: React.FC<ImageProps> = ({
  onPress,
  onLongPress,
  source,
  Component = onPress || onLongPress ? Pressable : View,
  placeholderStyle,
  PlaceholderContent,
  containerStyle,
  childrenContainerStyle = null,
  style = {},
  ImageComponent = ImageNative,
  onLoad,
  children,
  transition,
  height,
  width,
  transitionDuration = 360,
  ...props
}) => {
  const placeholderOpacity = React.useRef(new Animated.Value(1));

  const onLoadHandler = useCallback(
    (event: NativeSyntheticEvent<ImageLoadEventData>) => {
      if (transition) {
        Animated.timing(placeholderOpacity.current, {
          toValue: 0,
          duration: transitionDuration,
          useNativeDriver: true,
        }).start();
      } else {
        placeholderOpacity.current.setValue(0);
      }
      onLoad?.(event);
    },
    [transition, transitionDuration, onLoad]
  );

  const hasImage = Boolean(source);

  const sourceResolve = typeof source === 'string' ? { uri: source } : source;

  return (
    <Component
      {...{ onPress, onLongPress }}
      accessibilityIgnoresInvertColors={true}
      style={StyleSheet.flatten([styles.container, containerStyle])}
    >
      <ImageComponent
        {...props}
        {...{ transition, transitionDuration }}
        source={sourceResolve}
        onLoad={onLoadHandler}
        style={StyleSheet.flatten([
          StyleSheet.absoluteFill,
          { width, height },
          style,
        ])}
      />
      {/* Transition placeholder */}
      <Animated.View
        pointerEvents={hasImage ? 'none' : 'auto'}
        accessibilityElementsHidden={hasImage}
        importantForAccessibility={hasImage ? 'no-hide-descendants' : 'yes'}
        style={[
          StyleSheet.absoluteFillObject,
          {
            opacity: hasImage ? placeholderOpacity.current : 1,
          },
        ]}
      >
        <View
          style={StyleSheet.flatten([
            { width, height },
            style,
            styles.placeholder,
            placeholderStyle,
          ])}
        >
          {React.isValidElement(PlaceholderContent)
            ? PlaceholderContent
            : PlaceholderContent && <Text>{PlaceholderContent}</Text>}
        </View>
      </Animated.View>
      {/* Children for Image */}
      <View
        style={StyleSheet.flatten([
          { width, height },
          childrenContainerStyle ?? style,
        ])}
      >
        {children}
      </View>
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
    overflow: 'hidden',
  },
  placeholder: {
    backgroundColor: '#bdbdbd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Image.displayName = 'Image';
