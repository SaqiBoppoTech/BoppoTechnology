import { StyleSheet } from "react-native";
import { Colors, Constant, Fonts } from "../../global";
import { CHANGE_BY_MOBILE_DPI } from "../../global/constant";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    zIndex: 0,
    
  },
  bottomSection: {
    height: CHANGE_BY_MOBILE_DPI(270),
    width: Constant.SCREEN_WIDTH,
    borderTopLeftRadius: CHANGE_BY_MOBILE_DPI(20),
    borderTopRightRadius: CHANGE_BY_MOBILE_DPI(20),
    justifyContent: 'flex-end',
    paddingBottom: CHANGE_BY_MOBILE_DPI(20),
    backgroundColor: Colors.WHITE
  },
  flexEndContainer: {
    position: 'absolute',
    zIndex: 1000,
    bottom: Constant.CHANGE_BY_MOBILE_DPI(0)
  },
  sliderContainer: {
    height: Constant.SCREEN_HEIGHT / 1.2,
    width: Constant.SCREEN_WIDTH,
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topSection: {
    position: 'absolute',
    left: CHANGE_BY_MOBILE_DPI(0),
    right: CHANGE_BY_MOBILE_DPI(0),
    top: CHANGE_BY_MOBILE_DPI(0),
    bottom: CHANGE_BY_MOBILE_DPI(0),
    backgroundColor: Colors.WHITE
  },
  sliderFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(23),
    color: Colors.WHITE,
    fontFamily: Fonts.MANROPE_BOLD
  },
  barContainer: {
    marginHorizontal: CHANGE_BY_MOBILE_DPI(3)
  },
  bar: {
    height: CHANGE_BY_MOBILE_DPI(7.96),
    width: CHANGE_BY_MOBILE_DPI(7.96),
    borderRadius: CHANGE_BY_MOBILE_DPI(100),
    backgroundColor: Colors.GRAY_DARK
  },
  boxContainer: {
    height: CHANGE_BY_MOBILE_DPI(46),
    width: CHANGE_BY_MOBILE_DPI(67),
    borderRadius: CHANGE_BY_MOBILE_DPI(9),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BLACK

  },
  flexDirectionContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
  },
  skipFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.BLACK
  },
  indicatorContainerStyle: {
    top: CHANGE_BY_MOBILE_DPI(20)
  },
  parent : {
    height : Constant.SCREEN_HEIGHT / 1.32,
    width : Constant.SCREEN_WIDTH,
    transform : [ { scaleX : 1.32 } ],
    borderBottomStartRadius : 200,
    borderBottomEndRadius : 200,
    overflow : 'hidden',
},
child : {
    flex : 1,
    // transform : [ { scaleX : 0.5 } ],
    // backgroundColor : 'yellow',
    alignItems : 'center',
    justifyContent : 'center',
},
positionBottom:{
  position:'absolute',
  bottom:CHANGE_BY_MOBILE_DPI(20),
  left:CHANGE_BY_MOBILE_DPI(0),
  right:CHANGE_BY_MOBILE_DPI(0)
}
});