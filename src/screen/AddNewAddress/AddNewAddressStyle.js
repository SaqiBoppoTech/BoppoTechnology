import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  btn: {
    marginTop: CHANGE_BY_MOBILE_DPI(20),
  },
  titleWrapper: {
    marginTop: CHANGE_BY_MOBILE_DPI(10),
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
  margin: {
    marginTop: CHANGE_BY_MOBILE_DPI(10),
  },
});
