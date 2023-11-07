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
const { width } = Dimensions.get('screen');
const headers = [
  'header1',
  'header header 2',
  'header3',
  'header header4',
  'header5',
  'header header6',
  'header7',
  'header header8',
  'header9',
  'header1nsdfvdsfsdnbvfbvdsnfvndsvnfv0',
];
const getHeaderWidths = () => {
  const obj = {};
  headers.forEach((x, i) => {
    obj[i] = useSharedValue(0);
  });
  return obj;
};
export default function DummyTest() {
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
      output1.push(cellWidth);
      output2.push(sumWidth);
      sumWidth += cellWidth;
    });
    const moveValue = interpolate(scrollY.value, input, output2);
    const barWidth = interpolate(scrollY.value, input, output1);
    console.log('======>>',barWidth)
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
    transform: [{ translateX: -topScrollY.value }],
  }));
  const onPressHeader = index => {
    scroll1.value = index;
  };
  return (
    <View style={styles.flex}>
      <Animated.ScrollView
        ref={topScrollRef}
        style={styles.topScroll}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={topScrollHandler}>
        {headers.map((item, index) => (
          <View
            onLayout={e =>
              (headerWidths[index].value = e.nativeEvent.layout.width)
            }
            key={item}
            style={{ flex: Object.is(index,1) ? 2 : 1 }}>
            <TouchableOpacity
              style={styles.headerItem}
              onPress={() => onPressHeader(index)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
      <Animated.View style={[styles.bar, barWidthStyle]}>
        <Animated.View
          style={[StyleSheet.absoluteFill, styles.barInner, barMovingStyle]}
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
          <Item index={index} key={item} />
        ))}
      </Animated.ScrollView>
    </View>
  );
}
function Item({ index }) {
  return (
    <Animated.View style={styles.item}>
      <Text style={styles.txt}>{index + 1}</Text>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  topScroll: {
    flexGrow: 0,
  },
  item: {
    height: '100%',
    width: width,
    backgroundColor: 'grey',
    borderWidth: 5,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  bar: {
    height: 3,
    alignSelf: 'flex-start',
  },
  barInner: {
    backgroundColor: '#000',
  },
  txt: {
    fontSize: 30,
    color: '#fff',
  },
});