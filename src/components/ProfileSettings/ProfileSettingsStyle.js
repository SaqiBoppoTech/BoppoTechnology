import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';

export const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(22),
    marginVertical: CHANGE_BY_MOBILE_DPI(10),
  },
  text: {
    color: Colors.BLACK_DARK,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_MEDIUM,
    includeFontPadding: false,
  },
});
