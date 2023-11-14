import { Colors } from '../../global';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ALABASTER_GREY,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
