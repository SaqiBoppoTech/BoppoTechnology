import {StyleSheet} from 'react-native';
import { Colors, Fonts } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

export const styles = StyleSheet.create({
  mainContainer: {
  flex:1,
  backgroundColor:Colors.WHITE
  },
  carosalContainer:{
    height:CHANGE_BY_MOBILE_DPI(300),
    marginTop:CHANGE_BY_MOBILE_DPI(10)
  },
  positionAlignment:{
    bottom:CHANGE_BY_MOBILE_DPI(-35)
  },
  iconPositionContainer:{
    position:'absolute',
    top:CHANGE_BY_MOBILE_DPI(0),
    right:CHANGE_BY_MOBILE_DPI(20)
  },
  heartSvgStyle:{
    marginBottom:CHANGE_BY_MOBILE_DPI(10)
  },
  marginContainer:{
    marginTop:CHANGE_BY_MOBILE_DPI(20)
  },
  topTabContainer:{
    flex:1
  },
  labelFontStyle:{
    fontSize:CHANGE_BY_MOBILE_DPI(14),
    fontFamily:Fonts.MANROPE_BOLD,
    color:Colors.HALLOWINE_ORANGE,
  },
  labelBlurFontStyle:{
    fontSize:CHANGE_BY_MOBILE_DPI(14),
    fontFamily:Fonts.MANROPE_BOLD,
    color:Colors.BLACK,
  },
  bottomBar:{
    height:CHANGE_BY_MOBILE_DPI(5),
    backgroundColor:Colors.TRANSPARENT,
    marginTop:CHANGE_BY_MOBILE_DPI(8)
  },
  barContainerStyle:{
    marginRight:CHANGE_BY_MOBILE_DPI(20)
  },
  contentContainerStyle:{
    marginTop:CHANGE_BY_MOBILE_DPI(20),
    marginLeft:CHANGE_BY_MOBILE_DPI(20),
    paddingBottom:CHANGE_BY_MOBILE_DPI(5)
  }
});
