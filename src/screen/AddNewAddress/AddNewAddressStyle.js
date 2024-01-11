import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  btn: {
    marginTop: CHANGE_BY_MOBILE_DPI(30),
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
    marginTop: CHANGE_BY_MOBILE_DPI(20),
  },
  space: {
    marginBottom: CHANGE_BY_MOBILE_DPI(15),
  },

  checkMainView: {
    flexDirection: 'row',
    gap: CHANGE_BY_MOBILE_DPI(20),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(15),
    marginBottom: CHANGE_BY_MOBILE_DPI(15),
    alignItems: 'center',
  },
  checkbox: {
    width: CHANGE_BY_MOBILE_DPI(20),
    height: CHANGE_BY_MOBILE_DPI(20),
    borderWidth: CHANGE_BY_MOBILE_DPI(1),
    borderColor: Colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: CHANGE_BY_MOBILE_DPI(4),
    borderColor: Colors.GRAY_MEDIUM,
  },
  checked: {
    backgroundColor: '#fff',
  },
  checkWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Checktext: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK,
    textAlign: 'center',
    fontFamily: Fonts.MANROPE_MEDIUM,
  },
});
