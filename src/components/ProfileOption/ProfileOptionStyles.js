import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: '50%',
    backgroundColor: Colors.WHITE,
    height: CHANGE_BY_MOBILE_DPI(45),
    justifyContent: 'center',
    borderRadius: CHANGE_BY_MOBILE_DPI(6),
  },
  text: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    textAlign: 'center',
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_MEDIUM,
  },
});
