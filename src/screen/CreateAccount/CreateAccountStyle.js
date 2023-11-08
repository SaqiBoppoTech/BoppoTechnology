import { Colors, Fonts } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  mainContainer:{
  flex:1,
  backgroundColor:Colors.WHITE
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
   marginVertical:CHANGE_BY_MOBILE_DPI(20)
    },
  title: {
    textAlign: 'center',
     fontSize:CHANGE_BY_MOBILE_DPI(18),
     fontFamily:Fonts.MANROPE_BOLD,
    color: Colors.BLACK,
    marginVertical:CHANGE_BY_MOBILE_DPI(30)
  },
  box: {
   marginHorizontal:CHANGE_BY_MOBILE_DPI(20),
   alignItems:'center',
  },

  marginTopStyle:{
    marginTop:CHANGE_BY_MOBILE_DPI(20)
  },
  externalCustomButtonStyle:{
   marginTop:CHANGE_BY_MOBILE_DPI(40),
  },
  externalContainer:{
    borderRadius:CHANGE_BY_MOBILE_DPI(10)
  },
  externalFontStyle:{
    fontSize:CHANGE_BY_MOBILE_DPI(16),
    fontFamily:Fonts.MANROPE_BOLD,
   color: Colors.WHITE,
   includeFontPadding:false
  },
  newCustomerFontStyle:{
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.BLACK,
    fontFamily:Fonts.LATO_BOLD,
    includeFontPadding:false
  },
});
