import {useSafeAreaInsets} from 'react-native-safe-area-context';

const DEFAULT_HORIZONTAL_INSET = 16;
const DEFAULT_BOTTOM_INSET = 8;
const BOTTOM_NAVIGATION_HEIGHT = 58;

const useBottomNavigationSizes = () => {
  const {bottom, left, right} = useSafeAreaInsets();

  return {
    height: BOTTOM_NAVIGATION_HEIGHT,
    bottom: bottom + DEFAULT_BOTTOM_INSET,
    left: left + DEFAULT_HORIZONTAL_INSET,
    right: right + DEFAULT_HORIZONTAL_INSET,
  };
};

export default useBottomNavigationSizes;
