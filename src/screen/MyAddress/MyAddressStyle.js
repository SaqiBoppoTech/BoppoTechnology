import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
  },
  btn: {
    position: 'absolute',
    bottom: CHANGE_BY_MOBILE_DPI(10),
    left: 0,
    width: '100%',
  },
  marginWrapper: {
    marginTop: CHANGE_BY_MOBILE_DPI(20),
  },
  externalFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.WHITE,
    fontFamily: Fonts.MANROPE_BOLD,
    includeFontPadding: false,
  },
  newCustomerFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.BLACK,
    fontFamily: Fonts.LATO_BOLD,
    includeFontPadding: false,
  },
});
