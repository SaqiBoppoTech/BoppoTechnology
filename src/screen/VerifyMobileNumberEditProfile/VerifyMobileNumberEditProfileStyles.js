import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  bg: {
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    marginBottom: CHANGE_BY_MOBILE_DPI(60),
  },
  btn: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    width: '100%',
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
  space: {
    marginBottom: CHANGE_BY_MOBILE_DPI(20),
  },
  enterOtpFontStyle:{
    fontSize:CHANGE_BY_MOBILE_DPI(16),
    color:Colors.BLACK,
    fontFamily:Fonts.MANROPE_BOLD  ,
    alignSelf:'center',
    marginVertical:CHANGE_BY_MOBILE_DPI(20)
  },
  resendotp: {
    fontSize:CHANGE_BY_MOBILE_DPI(14),
    color:Colors.BLACK,
    fontFamily:Fonts.INTER_REGULAR,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginVertical:CHANGE_BY_MOBILE_DPI(20)
  },
});
