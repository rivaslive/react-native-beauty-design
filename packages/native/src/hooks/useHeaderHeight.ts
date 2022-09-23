import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { getDefaultHeaderHeight } from '../utils/header';

export default function useHeaderHeight() {
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const propsHeight = {
    layout: frame,
    modal: false,
    headerStatusBarHeight: insets.top,
  };

  return getDefaultHeaderHeight(
    propsHeight.layout,
    propsHeight.modal,
    propsHeight.headerStatusBarHeight
  );
}
