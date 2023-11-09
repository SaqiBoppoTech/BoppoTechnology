import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

export const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
  },
  container: {
    backgroundColor: 'red',
    margin: CHANGE_BY_MOBILE_DPI(10),
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
    paddingVertical: CHANGE_BY_MOBILE_DPI(15),
  },
  name: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK_DARK,
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
  },
  discount: {
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.GRAY_DARK,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    textDecorationLine: 'line-through',
  },

  imageWrapper: {
    height: CHANGE_BY_MOBILE_DPI(150),
    width: CHANGE_BY_MOBILE_DPI(120),
    objectFit: 'cover',
    alignItems: 'center',
    marginRight: CHANGE_BY_MOBILE_DPI(10),
  },
  rowWrapper: {
    flexDirection: 'row',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
  },
  nameView: {
    justifyContent: 'space-between',
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    height: CHANGE_BY_MOBILE_DPI(45),
    justifyContent: 'space-between',
    borderBottomRightRadius: CHANGE_BY_MOBILE_DPI(10),
    borderBottomLeftRadius: CHANGE_BY_MOBILE_DPI(10),
  },
  editWrapper: {
    backgroundColor: Colors.LIGHT_WHITE,
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: CHANGE_BY_MOBILE_DPI(10),
    borderBottomLeftRadius: CHANGE_BY_MOBILE_DPI(10),
  },
  removeWrapper: {
    backgroundColor: Colors.LIGHT_WHITE,
    width: '48%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: CHANGE_BY_MOBILE_DPI(10),
    borderBottomRightRadius: CHANGE_BY_MOBILE_DPI(10),
  },
  optionText: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_MEDIUM,
  },
  line: {
    borderBottomWidth: CHANGE_BY_MOBILE_DPI(1),
    borderColor: Colors.GAINSBORO,
    marginTop: CHANGE_BY_MOBILE_DPI(10),
  },
  verticalLine: {
    width: CHANGE_BY_MOBILE_DPI(1),
    backgroundColor: Colors.GAINSBORO,
  },
  RatingRowView: {
    flexDirection: 'row',
    gap: CHANGE_BY_MOBILE_DPI(10),
  },
  customer: {
    fontFamily: Fonts.MANROPE_MEDIUM,
    color: Colors.GRAY_DARK,
    fontSize: CHANGE_BY_MOBILE_DPI(10),
  },
  priceContainer: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    alignItems: 'center',
    gap: CHANGE_BY_MOBILE_DPI(10),
  },
  price: {
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(16),
  },
  circle: {
    height: CHANGE_BY_MOBILE_DPI(5),
    width: CHANGE_BY_MOBILE_DPI(5),
    backgroundColor: Colors.BLACK,
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
  },
  quantity: {
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
  },
  btn: {
    borderRadius: CHANGE_BY_MOBILE_DPI(12),
    height: CHANGE_BY_MOBILE_DPI(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(110),
  },
  btnText: {
    color: Colors.WHITE,
    fontSize: CHANGE_BY_MOBILE_DPI(12),
    fontWeight: '500',
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
  },
});
