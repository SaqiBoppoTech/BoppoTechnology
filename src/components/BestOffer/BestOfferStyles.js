import { Colors, Constant, Fonts } from "../../global";
import { CHANGE_BY_MOBILE_DPI } from "../../global/constant";

const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({

  imageContainer: {
    height: CHANGE_BY_MOBILE_DPI(137),
    width: CHANGE_BY_MOBILE_DPI(100),
    alignSelf:"center",
    marginTop:CHANGE_BY_MOBILE_DPI(20)
  },

  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:CHANGE_BY_MOBILE_DPI(3)
  },

  image: {
    width: '100%',
    height: '100%',
  },
  backGround: {
    backgroundColor:Colors.WHITE,
    paddingTop:CHANGE_BY_MOBILE_DPI(5)
  },
  headingText: {
    fontSize: CHANGE_BY_MOBILE_DPI(20),
    color: Colors.BLACK,
    fontFamily: Fonts.PLAYFAIR_DISPLAY_SEMIBOLD,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    marginVertical: CHANGE_BY_MOBILE_DPI(10)
  },
  exploreItemCardContainer: {
    height: CHANGE_BY_MOBILE_DPI(268),
    backgroundColor: Colors.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
    borderRadius: CHANGE_BY_MOBILE_DPI(5),
    marginRight: CHANGE_BY_MOBILE_DPI(20),
    width: CHANGE_BY_MOBILE_DPI(160)
  },
  contentContainerStyle: {
    paddingVertical: CHANGE_BY_MOBILE_DPI(15),
    paddingLeft: CHANGE_BY_MOBILE_DPI(20)
  },
  titleFontStyle:{
    fontSize:CHANGE_BY_MOBILE_DPI(12),
    fontFamily:Fonts.MANROPE_MEDIUM,
    color:Colors.BLACK
  },
  discountFontStyle:{
    fontSize:CHANGE_BY_MOBILE_DPI(10),
    fontFamily:Fonts.MANROPE_MEDIUM,
    color:Colors.GRAY_DARK
  },
  priceFontStyle:{
    fontSize:CHANGE_BY_MOBILE_DPI(14),
    fontFamily:Fonts.MANROPE_BOLD,
    color:Colors.BLACK
  },
  percentageFontStyle:{
    fontSize:CHANGE_BY_MOBILE_DPI(12),
    fontFamily:Fonts.MANROPE_BOLD,
    color:Colors.ALERT
  },
  positionContainer:{
    position:'absolute',
  top:CHANGE_BY_MOBILE_DPI(10),
  right:CHANGE_BY_MOBILE_DPI(10)
  },
  paddingConmtainer:{
    paddingHorizontal:CHANGE_BY_MOBILE_DPI(10)
  },
  flexContainer:{
    flex:1
  },
  topTabparticualrContainer:{
    marginRight:CHANGE_BY_MOBILE_DPI(15)
  },
  offerTopTabMainContainer:{
    paddingHorizontal:CHANGE_BY_MOBILE_DPI(20),
    backgroundColor:Colors.GRAY_LIGHT + 99,
    paddingTop:CHANGE_BY_MOBILE_DPI(11),
    width:Constant.SCREEN_WIDTH,
  },
  topTabFontStyle:{
    fontSize:CHANGE_BY_MOBILE_DPI(14),
    fontFamily:Fonts.MANROPE_BOLD,
    color:Colors.BLACK,
    marginBottom:CHANGE_BY_MOBILE_DPI(10)
  },
  underLine:{
    height:CHANGE_BY_MOBILE_DPI(4),
    backgroundColor:Colors.BLACK
  },
  categoryCardContainer:{
    marginRight:CHANGE_BY_MOBILE_DPI(15)
  }
});