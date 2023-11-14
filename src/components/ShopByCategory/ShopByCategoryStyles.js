import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

export const styles = StyleSheet.create({
  topDealsContainer: {
    height: CHANGE_BY_MOBILE_DPI(230),
    width: CHANGE_BY_MOBILE_DPI(159),
    backgroundColor: Colors.WHITE,
    marginRight: CHANGE_BY_MOBILE_DPI(15),
    zIndex: 0
  },
  imageback: {
    height:CHANGE_BY_MOBILE_DPI(150),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: CHANGE_BY_MOBILE_DPI(15),
    zIndex: 0
  },
  // item: {
  //   width: 150, // Adjust the width as needed
  //   height: 150, // Adjust the height as needed
  //   margin: 10,
  //   position: 'relative', // Add margin between items
  // },
  image: {
    height:CHANGE_BY_MOBILE_DPI(130),
    width:CHANGE_BY_MOBILE_DPI(64)
  },
  backGround: {
    backgroundColor: Colors.PAPAYA_WHIP,
    height: CHANGE_BY_MOBILE_DPI(295)
  },
  headingColor: {
    fontSize: CHANGE_BY_MOBILE_DPI(20),
    color: Colors.BLACK,
    fontFamily: Fonts.PLAYFAIR_DISPLAY_BOLD,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    marginVertical: CHANGE_BY_MOBILE_DPI(10)
  },
  contentContainerStyle: {
    marginLeft: CHANGE_BY_MOBILE_DPI(20)
  },
  titleFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(12),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_BOLD,
  },
  categoryFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.ALERT,
    fontFamily: Fonts.MANROPE_EXTRA_BOLD
  },
  fontContainer: {
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    alignItems:'center'
  },
  offerImageContainer: {
    height: CHANGE_BY_MOBILE_DPI(60),
    width: CHANGE_BY_MOBILE_DPI(110)
  },
  offerFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(10),
    color: Colors.BLACK,
    fontFamily: Fonts.LATO_MEDIUM, bottom: CHANGE_BY_MOBILE_DPI(1)
  },
  positionContainer: {
    position: "absolute",
    left: CHANGE_BY_MOBILE_DPI(0),
    zIndex: 100
  },
  positionRectangleContainer: {

  },
  positionOffer: {
    position: "absolute",
    zIndex: 100,
    alignItems: "center",
    height: CHANGE_BY_MOBILE_DPI(35),
    width: CHANGE_BY_MOBILE_DPI(120),
    includeFontPadding: false,
    flexDirection: "row",
    left: CHANGE_BY_MOBILE_DPI(10)
  }
});
