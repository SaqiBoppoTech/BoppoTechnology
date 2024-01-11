import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },

  text: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_SEMIBOLD,
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
    marginTop: CHANGE_BY_MOBILE_DPI(15),
  },
  loginContainer: {
    borderRadius: CHANGE_BY_MOBILE_DPI(12),
  },
  externalFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.WHITE,
    fontFamily: Fonts.MANROPE_BOLD,
    includeFontPadding: false,
  },
  newCustomerFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.BLACK,
    fontFamily: Fonts.LATO_BOLD,
    includeFontPadding: false,
  },
  addressbtnStyle: {
    marginTop: CHANGE_BY_MOBILE_DPI(8),
  },
  line: {
    backgroundColor: Colors.GRAY_DARK,
    height: CHANGE_BY_MOBILE_DPI(1),
    marginBottom: CHANGE_BY_MOBILE_DPI(15),
    marginTop: CHANGE_BY_MOBILE_DPI(5),
  },
  btn: {
    marginVertical: CHANGE_BY_MOBILE_DPI(10),
  },
  underLine: {
    height: CHANGE_BY_MOBILE_DPI(1),
    backgroundColor: Colors.ALTO,
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
  },
  renderMainView: {
    backgroundColor: Colors.LIGHT_WHITE,
    flex: 1,
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
    marginTop: CHANGE_BY_MOBILE_DPI(3),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(5),
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
  },
  imageViewWrapper: {
    flexDirection: 'row',
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
    marginTop: CHANGE_BY_MOBILE_DPI(5),
  },
  imageWrapper: {
    height: CHANGE_BY_MOBILE_DPI(150),
    width: CHANGE_BY_MOBILE_DPI(150),
  },
  containWrapper: {
    flex: 1,
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
    marginRight: CHANGE_BY_MOBILE_DPI(5),
    gap: CHANGE_BY_MOBILE_DPI(4),
    paddingVertical: CHANGE_BY_MOBILE_DPI(5),
  },
  name: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK_DARK,
    fontFamily: Fonts.MANROPE_SEMIBOLD,
  },

  discount: {
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.GRAY_DARK,
    fontSize: CHANGE_BY_MOBILE_DPI(12),
    textDecorationLine: 'line-through',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: CHANGE_BY_MOBILE_DPI(10),
  },
  price: {
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(16),
  },

  quantity: {
    fontFamily: Fonts.MANROPE_SEMIBOLD,
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(12),
  },
});
