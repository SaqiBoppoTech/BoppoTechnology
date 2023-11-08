import {StyleSheet} from 'react-native';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import { Colors, Fonts } from '../../global';

export const styles = StyleSheet.create({
  mainContainer:{
   flex:1,
   backgroundColor:Colors.WHITE
  },
  flexContainer:{
  flex:1
  },
  selectioFontStyle: {
   fontSize:CHANGE_BY_MOBILE_DPI(18),
   color:Colors.BLACK,
   fontFamily:Fonts.MANROPE_BOLD,
   marginHorizontal:CHANGE_BY_MOBILE_DPI(20),
   marginTop:CHANGE_BY_MOBILE_DPI(15),
   marginBottom:CHANGE_BY_MOBILE_DPI(10)
  },
  container: {
  },
  externalCustomButtonStyle:{
    marginBottom:CHANGE_BY_MOBILE_DPI(20)
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
  titleExternalStyle:{
    marginBottom:CHANGE_BY_MOBILE_DPI(15)
  }
});
