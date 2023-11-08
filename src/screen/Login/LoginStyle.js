import { Colors, Fonts } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
const { StyleSheet } = require('react-native');
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  title: {
    fontSize: CHANGE_BY_MOBILE_DPI(22),
    color: Colors.BLACK,
    fontFamily:Fonts.INTER_BOLD,
    marginLeft:CHANGE_BY_MOBILE_DPI(20),
    marginTop: CHANGE_BY_MOBILE_DPI(30),
    marginBottom:CHANGE_BY_MOBILE_DPI(30)
  },
  forgetPassword: {
    textAlign: 'center',
    marginVertical: CHANGE_BY_MOBILE_DPI(20),
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.BLACK,
    fontFamily:Fonts.LATO_BOLD,
    includeFontPadding:false
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:CHANGE_BY_MOBILE_DPI(20)
  },
  loginImageStyle: {
    width: CHANGE_BY_MOBILE_DPI(300),
    height: CHANGE_BY_MOBILE_DPI(300),
  },
  imageContainer:{
    backgroundColor:'#fff',
    borderBottomRightRadius:CHANGE_BY_MOBILE_DPI(20),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginContainer:{
    borderRadius:CHANGE_BY_MOBILE_DPI(12)
  },
  externalFontStyle:{
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.WHITE,
    fontFamily:Fonts.MANROPE_BOLD,
    includeFontPadding:false
  },
  newCustomerFontStyle:{
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.BLACK,
    fontFamily:Fonts.LATO_BOLD,
    includeFontPadding:false
  },
  marginTopStyle:{
    marginBottom:CHANGE_BY_MOBILE_DPI(20)
  }
});
