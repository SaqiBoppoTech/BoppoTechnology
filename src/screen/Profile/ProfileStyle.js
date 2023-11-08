import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginBottom: CHANGE_BY_MOBILE_DPI(70),
  },

  btn: {
    marginVertical: CHANGE_BY_MOBILE_DPI(10),
  },

  settingWrapper: {
    backgroundColor: Colors.LIGHT_WHITE,
    justifyContent: 'space-evenly',
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(12),
    paddingVertical: CHANGE_BY_MOBILE_DPI(5),
  },
  settingTitle: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.BLACK_DARK,
    textAlign: 'left',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    fontFamily: Fonts.MANROPE_BOLD,
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
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
