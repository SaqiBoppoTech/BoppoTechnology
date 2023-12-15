import { Colors, Fonts } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({


  backGround: {
    backgroundColor:Colors.BLACK,
    height: CHANGE_BY_MOBILE_DPI(283),
    paddingHorizontal:CHANGE_BY_MOBILE_DPI(20)
  },
  headerText: {
    fontSize:CHANGE_BY_MOBILE_DPI(20),
    fontFamily:Fonts.PLAYFAIR_DISPLAY_SEMIBOLD,
    color:Colors.WHITE,
    marginVertical:CHANGE_BY_MOBILE_DPI(10)
  },
  imageMainContainer:{
    height:CHANGE_BY_MOBILE_DPI(165),
    width:CHANGE_BY_MOBILE_DPI(165),
    backgroundColor:Colors.WHITE
  },
  sizeContainer:{
    width:CHANGE_BY_MOBILE_DPI(165)
  },
  imageStyle:{
    height:'100%',
    width:'100%'
  },
  contentContainerStyle:{
  },
  container:{
    marginRight:CHANGE_BY_MOBILE_DPI(15),
    
  },
  titleFontStyle:{
    fontSize:CHANGE_BY_MOBILE_DPI(14),
    color:Colors.WHITE,
    fontFamily:Fonts.MANROPE_BOLD,
    marginTop:CHANGE_BY_MOBILE_DPI(5)
  },
  priceFontSytle:{
    fontSize:CHANGE_BY_MOBILE_DPI(12),
    color:Colors.GRAY_DARK,
    fontFamily:Fonts.MANROPE_BOLD
  },
  flexContainer:{
    flex:1
  }
});
