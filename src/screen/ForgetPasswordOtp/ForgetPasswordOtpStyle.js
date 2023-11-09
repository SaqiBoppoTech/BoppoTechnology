import {StyleSheet} from 'react-native';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import { Colors, Fonts } from '../../global';

export const styles = StyleSheet.create({
  otpFontStyle: {
    fontSize:CHANGE_BY_MOBILE_DPI(18),
    color:Colors.BLACK,
    fontFamily:Fonts.MANROPE_BOLD,
    marginBottom:CHANGE_BY_MOBILE_DPI(3)
  },
  sendToFontStyle:{
    fontSize:CHANGE_BY_MOBILE_DPI(18),
    color:Colors.GRAY_DARK,
    fontFamily:Fonts.MANROPE_BOLD  
  },
  marginContainer:{
   marginTop:CHANGE_BY_MOBILE_DPI(20),
   marginHorizontal:CHANGE_BY_MOBILE_DPI(20)
  },
  enterOtpFontStyle:{
    fontSize:CHANGE_BY_MOBILE_DPI(16),
    color:Colors.BLACK,
    fontFamily:Fonts.MANROPE_BOLD  ,
    alignSelf:'center',
    marginVertical:CHANGE_BY_MOBILE_DPI(20)
  },
  container: {
    marginTop: 10,
  },
  number: {
    color: '#000',
    marginLeft: 15,
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 20,
  },
  resendotp: {
    fontSize:CHANGE_BY_MOBILE_DPI(14),
    color:Colors.BLACK,
    fontFamily:Fonts.INTER_REGULAR,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginVertical:CHANGE_BY_MOBILE_DPI(20)
  },
  title2: {
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  marginTopStyle:{
    marginTop:CHANGE_BY_MOBILE_DPI(20)
  },
  externalCustomButtonStyle:{
    marginTop:CHANGE_BY_MOBILE_DPI(20)
  },
  externalContainer: {
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
    
  },
  externalFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.WHITE,
    includeFontPadding: false
  },
  mainContainer:{
    flex:1,
    backgroundColor:Colors.WHITE
  }
});
