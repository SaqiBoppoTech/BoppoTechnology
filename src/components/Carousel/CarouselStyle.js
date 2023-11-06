import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  indicator: {
    height: 8,
    width: 8,
    borderRadius: 10,
  },
  indicatorConatiner: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  indicatorPosition: {
    zIndex: 1,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
});
