import {Colors, Constant, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
  },
  orderDetailView: {
    height: CHANGE_BY_MOBILE_DPI(119),
    width: Constant.SCREEN_WIDTH,
    backgroundColor: Colors.WILSONWHITE,
    justifyContent: 'center',
    borderBottomWidth: CHANGE_BY_MOBILE_DPI(1),
    borderColor: Colors.GRAY_MEDIUM,
  },
  paymentModeWrapper: {
    flexDirection: 'row',
    width: CHANGE_BY_MOBILE_DPI(160),
    justifyContent: 'space-between',
    marginLeft: CHANGE_BY_MOBILE_DPI(15),
  },
  orderDetailTextTop: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(17),
    fontFamily: Fonts.MANROPE_BOLD,
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
    marginLeft: CHANGE_BY_MOBILE_DPI(15),
  },
  orderId: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_BOLD,
    marginBottom: CHANGE_BY_MOBILE_DPI(2),
    marginLeft: CHANGE_BY_MOBILE_DPI(15),
  },
  paypal: {
    color: Colors.MINESHAFT,
  },
  paymentModeText: {
    color: Colors.DARK_WHITE,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_BOLD,
  },
  productContainer: {
    width: Constant.SCREEN_WIDTH,
  },
  orderTrackingWrappe: {
    borderColor: Colors.GRAY_MEDIUM,
    borderBottomWidth: CHANGE_BY_MOBILE_DPI(1),
  },
  orderDetailWrapper: {
    borderBottomWidth: CHANGE_BY_MOBILE_DPI(1),
    borderBottomColor: Colors.GRAY_MEDIUM,
    justifyContent: 'center',
  },
  orderDetailText: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_MEDIUM,
    color: Colors.BLACK,
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
  },
  priceDetails: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    color: Colors.BLACK,
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
  },
  totalPriceWrapper: {
    flexDirection: 'row',
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
    justifyContent: 'space-between',
    width: Constant.SCREEN_WIDTH - 180,
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
  },
  totalProductPriceText: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_BOLD,
    color:Colors.TUNDORA
  },
  totalProductPriceValue: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    color: Colors.BLACK,
  },
  supplyDiscountText: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_BOLD,
    color:Colors.TUNDORA
  },
  supplyDiscountValue: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    color: Colors.PRIMARY,
  },
  supplyDiscountWrapper: {
    flexDirection: 'row',
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
    justifyContent: 'space-between',
    width: Constant.SCREEN_WIDTH - 180,
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
  },
  orderTotalWrapperBorder: {
    borderBottomWidth: CHANGE_BY_MOBILE_DPI(1),
    borderBottomColor: Colors.GRAY_MEDIUM,
    height: CHANGE_BY_MOBILE_DPI(52),
    justifyContent: 'center',
  },
  orderTotalWrapper: {
    flexDirection: 'row',
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
    width: Constant.SCREEN_WIDTH - 180,
    justifyContent: 'space-between',
  },
  orderTotalText: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    color: Colors.BLACK,
  },
  orderTotalValue: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    color: Colors.PRIMARY,
  },
  deliveryAddressWrapper: {
    paddingBottom: CHANGE_BY_MOBILE_DPI(50),
  },
  deliveryAddressText: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_BOLD,
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
  },
});
