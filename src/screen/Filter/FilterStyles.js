import {StyleSheet} from 'react-native';
import {Colors} from '../../global';

export const style = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
  },
  filterType: {
    backgroundColor: Colors.WILDSAND,
    flex: 1.3,
  },
  filterContent: {
    flex: 2,
  },
});
