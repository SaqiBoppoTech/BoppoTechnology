import {StyleSheet} from 'react-native';
import {Colors} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

export const style = StyleSheet.create({
  container: {
    height: CHANGE_BY_MOBILE_DPI(50),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(16),
  },
});
