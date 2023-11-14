import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Constant, Fonts} from '../../global';

export const styles = StyleSheet.create({
  itemContainer: {
    height: CHANGE_BY_MOBILE_DPI(226),
    width: CHANGE_BY_MOBILE_DPI(351),
    margin: CHANGE_BY_MOBILE_DPI(6),
    backgroundColor: Colors.ALABASTER_GREY,
    borderRadius: CHANGE_BY_MOBILE_DPI(5),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  name: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_BOLD,
  },
  textWrapper: {
    width: Constant.SCREEN_WIDTH - 200,
    justifyContent: 'flex-start',
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
  },
  ratingStarBackGround: {
    marginRight: CHANGE_BY_MOBILE_DPI(1),
  },
  rate: {
    flexDirection: 'row',
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
    marginVertical: CHANGE_BY_MOBILE_DPI(8),
    marginTop: CHANGE_BY_MOBILE_DPI(5),
  },
  qtyStyleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
  },
  discountPriceText: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_BOLD,
  },
  dot: {
    backgroundColor: Colors.BLACK,
    height: CHANGE_BY_MOBILE_DPI(4),
    width: CHANGE_BY_MOBILE_DPI(4),
    borderRadius: CHANGE_BY_MOBILE_DPI(100),
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
    marginRight: CHANGE_BY_MOBILE_DPI(10),
  },
  qtyText: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontWeight: Fonts.MANROPE_BOLD,
  },
  priceText: {
    textDecorationLine: 'line-through',
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.DARK_WHITE,
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
    fontWeight: Fonts.MANROPE_BOLD,
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
  },
  buyAgainBtn: {
    width: CHANGE_BY_MOBILE_DPI(158),
    height: CHANGE_BY_MOBILE_DPI(33),
    borderRadius: CHANGE_BY_MOBILE_DPI(8),
    backgroundColor: Colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
  },
  buyAgainText: {
    color: Colors.WHITE,
  },
  counts: {
    color: Colors.DARK_WHITE,
    fontSize: CHANGE_BY_MOBILE_DPI(9),
    fontWeight: Fonts.MANROPE_MEDIUM,
    marginLeft: CHANGE_BY_MOBILE_DPI(5),
    textDecorationLine: 'underline',
  },
  imgcontainer: {
    height: CHANGE_BY_MOBILE_DPI(105),
    width: CHANGE_BY_MOBILE_DPI(118),
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  imgWrapper: {
    width: CHANGE_BY_MOBILE_DPI(125),
    height: CHANGE_BY_MOBILE_DPI(150),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  background: {
    backgroundColor: Colors.WHITE,
    marginBottom: CHANGE_BY_MOBILE_DPI(180),
  },
  alignContent: {
    flexDirection: 'row',
    padding: CHANGE_BY_MOBILE_DPI(10),
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
  },
  viewcancelDetailBtn: {
    height: CHANGE_BY_MOBILE_DPI(46),
    borderBottomLeftRadius: CHANGE_BY_MOBILE_DPI(6),
    borderBottomRightRadius: CHANGE_BY_MOBILE_DPI(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCancelDetailBtnText: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(12),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    includeFontPadding: false,
  },
  btn: {
    borderWidth: CHANGE_BY_MOBILE_DPI(0.2),
    borderColor: Colors.GRAY_MEDIUM,
  },
});
