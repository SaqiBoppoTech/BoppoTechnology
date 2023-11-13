import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'red',
    flex: 1,
  },
  // textWrapper: {
  //   marginTop: 10,
  //   backgroundColor: 'green',
  // },
  text: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
    marginTop: CHANGE_BY_MOBILE_DPI(10),
  },
  loginContainer: {
    borderRadius: CHANGE_BY_MOBILE_DPI(12),
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
  addressbtnStyle: {
    marginTop: CHANGE_BY_MOBILE_DPI(8),
  },
});
