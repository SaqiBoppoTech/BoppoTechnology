import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },

  text: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_SEMIBOLD,
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
    marginTop: CHANGE_BY_MOBILE_DPI(15),
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
  line: {
    backgroundColor: Colors.GRAY_DARK,
    height: CHANGE_BY_MOBILE_DPI(1),
    marginBottom: CHANGE_BY_MOBILE_DPI(15),
    marginTop: CHANGE_BY_MOBILE_DPI(5),
  },
  btn: {
    marginVertical: CHANGE_BY_MOBILE_DPI(10),
  },
  underLine:{
    height:CHANGE_BY_MOBILE_DPI(1),
    backgroundColor:Colors.ALTO,
    marginTop:CHANGE_BY_MOBILE_DPI(10),
    marginBottom:CHANGE_BY_MOBILE_DPI(10)
  }
});
