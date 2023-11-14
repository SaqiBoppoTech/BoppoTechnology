import {StyleSheet} from 'react-native';
import {Colors, Constant, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

export const styles = StyleSheet.create({
  name: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
  },
  textWrapper: {
    width: Constant.SCREEN_WIDTH - 170,
    justifyContent: 'center',
  },
  description: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_BOLD,
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
    marginRight: CHANGE_BY_MOBILE_DPI(5),
    width: CHANGE_BY_MOBILE_DPI(156),
  },
  quantity: {
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_MEDIUM,
    color: Colors.SCORPION,
  },
  count: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(12),
    fontFamily: Fonts.MANROPE_BOLD,
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
    marginVertical: CHANGE_BY_MOBILE_DPI(8),
  },
  counts: {
    color: Colors.GRAY_MEDIUM,
    fontSize: CHANGE_BY_MOBILE_DPI(11),
    fontFamily: Fonts.MANROPE_MEDIUM,
  },
  price: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
  },
  imgcontainer: {
    height: CHANGE_BY_MOBILE_DPI(105),
    width: CHANGE_BY_MOBILE_DPI(118),
  },
  contaier: {
    height: CHANGE_BY_MOBILE_DPI(150),
    width: CHANGE_BY_MOBILE_DPI(125),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: CHANGE_BY_MOBILE_DPI(2),
  },
  background: {
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    // position:'absolute',
    // top:0,
    // left:0,
    // right:0,
    // bottom:0
    // marginBottom: CHANGE_BY_MOBILE_DPI(117),
  },
  mainView: {
    margin: CHANGE_BY_MOBILE_DPI(6),
    backgroundColor: Colors.ALABASTER_GREY,
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
    width: CHANGE_BY_MOBILE_DPI(351),
  },
  nameWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  btn: {
    borderWidth: CHANGE_BY_MOBILE_DPI(0.2),
    borderColor: Colors.GRAY_MEDIUM,
  },
  rowView: {
    flexDirection: 'row',
    padding: CHANGE_BY_MOBILE_DPI(10),
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
  },
  viewOrderDetailBtn: {
    height: CHANGE_BY_MOBILE_DPI(51),
    borderBottomLeftRadius: CHANGE_BY_MOBILE_DPI(10),
    borderBottomRightRadius: CHANGE_BY_MOBILE_DPI(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewOrderDetailBtnText: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(12),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    includeFontPadding: false,
  },
  ratingStarBackGround: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: CHANGE_BY_MOBILE_DPI(3),
    marginRight: CHANGE_BY_MOBILE_DPI(5),
  },
  descriptionWrapper: {
    flexDirection: 'row',
    width: Constant.SCREEN_WIDTH - 180,
  },
});
