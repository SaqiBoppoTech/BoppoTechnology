
// //////////Coding 




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
import { styles } from './CustomTopTabStyle';
const { width } = Dimensions.get('screen');
const CustomTopTabs = ({ topTabData, CustomTabItem,externalHeaderItem}) => {
  // const { } = CustomTopTabHooks()
  const [focusedIndex, setFocusedIndex] = React.useState(0);
  let headers = topTabData
  const getHeaderWidths = () => {
    const obj = {};
    topTabData.forEach((x, i) => {
      obj[i] = useSharedValue(0);
    });
    return obj;
  };
  const headerWidths = getHeaderWidths();
  const scrollY = useSharedValue(0);
  const topScrollY = useSharedValue(0);
  const bottomScrollRef = useAnimatedRef();
  const scroll1 = useSharedValue(0);
  useDerivedValue(() => {
    scrollTo(bottomScrollRef, scroll1.value * width, 0, true);
  });
  const topScrollRef = useAnimatedRef();
  const scroll2 = useSharedValue(0);
  useDerivedValue(() => {
    scrollTo(topScrollRef, scroll2.value, 0, true);
  });

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.x;
  });
  const topScrollHandler = useAnimatedScrollHandler(event => {
    topScrollY.value = event.contentOffset.x;
  });
  const barWidthStyle = useAnimatedStyle(() => {
    const input = [];
    const output1 = [];
    const output2 = [];
    let sumWidth = 0;
    const keys = Object.keys(headerWidths);
    keys.map((key, index) => {
      input.push(width * index);
      const cellWidth = headerWidths[key].value;
      const decreasedWidth = cellWidth ;
      output1.push(cellWidth);
      output2.push(sumWidth);
      sumWidth += decreasedWidth;
    });
    const moveValue = interpolate(scrollY.value, input, output2);
    const barWidth = interpolate(scrollY.value, input, output1);
    scroll2.value = moveValue + barWidth / 2 - width / 2;
    return {
      width: barWidth,
      transform: [
        {
          translateX: moveValue,
        },
      ],
    };
  });
  // generate dynamic translateX of moving bar
  const barMovingStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -topScrollY.value  }],
  }));
  const onPressHeader = index => {
    scroll1.value = index;
    setFocusedIndex(index);

  };

  const CustomTab = () => {
    return (
      <View style={styles.item}>
        {CustomTabItem}
      </View>
    )
  }
  return (
    <View style={styles.flex}>
      <Animated.ScrollView
        ref={topScrollRef}
        style={styles.topScroll}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={topScrollHandler}>
        {headers.map((item, index) => {
            const isFocused = index === focusedIndex;
          return (
            <View
              onLayout={e =>
                (headerWidths[index].value = e.nativeEvent.layout.width)
              }
              key={item}
              style={{ flex: Object.is(index, 1) ? 2 : 1 }}>
              <TouchableOpacity
                style={[styles.headerItem,externalHeaderItem]}
                onPress={() => onPressHeader(index)}>
                <Text style={isFocused ? styles.topTabFontStyle :styles.topTabBlurFontStyle}>{item}</Text>
              </TouchableOpacity>
            </View>
          )
        }
        )}
      </Animated.ScrollView>
      <Animated.View style={[styles.bar, barWidthStyle]}>
        <Animated.View
          style={[ styles.barInner, barMovingStyle]}
        />
      </Animated.View>
      <Animated.ScrollView
        ref={bottomScrollRef}
        pagingEnabled
        contentContainerStyle={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}>
        {headers.map((item, index) => (
          <CustomTab />
        ))}
      </Animated.ScrollView>
    </View>
  );
}

export default CustomTopTabs;