import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  carosalContainer: {
    height: CHANGE_BY_MOBILE_DPI(300),
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    zIndex:0
  },
  positionAlignment: {
    bottom: CHANGE_BY_MOBILE_DPI(-35)
  },
  iconPositionContainer: {
    position: 'absolute',
    top: CHANGE_BY_MOBILE_DPI(0),
    right: CHANGE_BY_MOBILE_DPI(20)
  },
  heartSvgStyle: {
    marginBottom: CHANGE_BY_MOBILE_DPI(10)
  },
  marginContainer: {
    marginTop: CHANGE_BY_MOBILE_DPI(20)
  },
  topTabContainer: {
    // flex: 1,
    // paddingBottom:CHANGE_BY_MOBILE_DPI(3),
    zIndex:100
  },
  labelFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.PRIMARY,
  },
  labelBlurFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.BLACK,
  },
  bottomBar: {
    height: CHANGE_BY_MOBILE_DPI(5),
    backgroundColor: Colors.TRANSPARENT,
    marginTop: CHANGE_BY_MOBILE_DPI(8)
  },
  barContainerStyle: {
    marginRight: CHANGE_BY_MOBILE_DPI(30)
  },
  contentContainerStyle: {
    marginTop: CHANGE_BY_MOBILE_DPI(20),
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
    // paddingBottom: CHANGE_BY_MOBILE_DPI(5),
    backgroundColor: 'white',
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.20,
    // shadowRadius: 1.41,
    // elevation: 2,
  },
  addToContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: CHANGE_BY_MOBILE_DPI(61),
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,

    // elevation: 0,
    backgroundColor: Colors.WHITE
  },
  flexContainer: {
    flex: 1
  },
  addToCartSubContainer: {
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
    flex: 1

  },
  buyNowContainer: {
    backgroundColor: Colors.BLACK,
    alignItems: 'center',
    justifyContent: "center",
    flex: 1
  },
  addToCartFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.BLACK,
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
    includeFontPadding: false
  },
  buyNowFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.WHITE
  },
  positionContainer: {
    position: 'absolute',
    bottom: CHANGE_BY_MOBILE_DPI(10),
    left: CHANGE_BY_MOBILE_DPI(0),
    right: CHANGE_BY_MOBILE_DPI(0)
  },
  marginBottomContainer: {
    flex: 1,
    marginBottom: CHANGE_BY_MOBILE_DPI(80)
  },
  elevationContainer: {
    backgroundColor: Colors.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 1,
  }
});
