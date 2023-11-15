import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  imageContainer: {
    height: CHANGE_BY_MOBILE_DPI(137),
    width: CHANGE_BY_MOBILE_DPI(100),
    alignSelf: 'center',
    marginTop: CHANGE_BY_MOBILE_DPI(20),
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: CHANGE_BY_MOBILE_DPI(3),
    width: CHANGE_BY_MOBILE_DPI(140),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  headingText: {
    fontSize: CHANGE_BY_MOBILE_DPI(20),
    color: Colors.BLACK,
    fontFamily: Fonts.PLAYFAIR_DISPLAY_SEMIBOLD,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    marginVertical: CHANGE_BY_MOBILE_DPI(10),
  },
  exploreItemCardContainer: {
    height: CHANGE_BY_MOBILE_DPI(268),
    backgroundColor: Colors.WHITE,
    shadowColor: '#000',
    borderRadius: CHANGE_BY_MOBILE_DPI(5),
    width: CHANGE_BY_MOBILE_DPI(160),
    elevation: CHANGE_BY_MOBILE_DPI(2),
    borderEndWidth: CHANGE_BY_MOBILE_DPI(2),
    borderEndColor:Colors.GRAY_LIGHT
  },
  contentContainerStyle: {
    paddingBottom: CHANGE_BY_MOBILE_DPI(20),
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
  },
  titleFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(12),
    fontFamily: Fonts.MANROPE_MEDIUM,
    color: Colors.BLACK,
  },
  discountFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(10),
    fontFamily: Fonts.MANROPE_MEDIUM,
    color: Colors.GRAY_DARK,
    textDecorationLine: 'line-through',
  },
  priceFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.BLACK,
  },
  percentageFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(12),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.ALERT,
  },
  positionContainer: {
    position: 'absolute',
    top: CHANGE_BY_MOBILE_DPI(10),
    right: CHANGE_BY_MOBILE_DPI(10),
  },
  paddingConmtainer: {
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(10),
  },
  flexContainer: {
    flex: 1,
  },
  starWrapper: {
    marginVertical: CHANGE_BY_MOBILE_DPI(10),
  },
  star: {
    marginRight: CHANGE_BY_MOBILE_DPI(5),
  },
  freeDeliveryText: {
    fontSize: CHANGE_BY_MOBILE_DPI(12),
    fontFamily: Fonts.MANROPE_MEDIUM,
    color: Colors.BLACK,
  },
});
