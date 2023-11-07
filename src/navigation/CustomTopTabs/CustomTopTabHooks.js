import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Animated, {
  interpolate,
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue
} from 'react-native-reanimated';
const CustomTopTabHooks = ({}) => {
//HOOKS
const headerWidths = getHeaderWidths();
const scrollY = useSharedValue(0);
const topScrollY = useSharedValue(0);
const bottomScrollRef = useAnimatedRef();
const scroll1 = useSharedValue(0);
const topScrollRef = useAnimatedRef();
const scroll2 = useSharedValue(0);

    return{
        headerWidths,
        scrollY,
        topScrollY,
        bottomScrollRef,
        scroll1,
        topScrollRef,
        scroll2
    }
}
export {CustomTopTabHooks}