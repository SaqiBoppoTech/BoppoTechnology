import {Colors, Constant, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
  },
  cancelDetailView: {
    height: CHANGE_BY_MOBILE_DPI(119),
    width: Constant.SCREEN_WIDTH,
    backgroundColor: Colors.WILSONWHITE,
    justifyContent: 'center',
    borderBottomWidth: CHANGE_BY_MOBILE_DPI(1),
    borderColor: Colors.GRAY_MEDIUM,
  },
  paymentModeWrapperCancel: {
    flexDirection: 'row',
    width: CHANGE_BY_MOBILE_DPI(160),
    justifyContent: 'space-between',
    marginLeft: CHANGE_BY_MOBILE_DPI(15),
  },
  cancelDetailTextTop: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(17),
    fontFamily: Fonts.MANROPE_BOLD,
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
    marginLeft: CHANGE_BY_MOBILE_DPI(15),
  },
  cancelId: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_BOLD,
    marginBottom: CHANGE_BY_MOBILE_DPI(2),
    marginLeft: CHANGE_BY_MOBILE_DPI(15),
  },
  paypalCancel: {
    color: Colors.MINESHAFT,
  },
  paymentModeTextCancel: {
    color: Colors.DARK_WHITE,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_BOLD,
  },
  productContainerCancel: {
    width: Constant.SCREEN_WIDTH,
  },
  cancelTrackingWrappe: {
    borderColor: Colors.GRAY_MEDIUM,
    borderBottomWidth: CHANGE_BY_MOBILE_DPI(1),
  },
  cancelDetailWrapper: {
    borderBottomWidth: CHANGE_BY_MOBILE_DPI(1),
    borderBottomColor: Colors.GRAY_MEDIUM,
    justifyContent: 'center',
  },
  cancelDetailText: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_MEDIUM,
    color: Colors.BLACK,
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
  },
  priceDetailsCancel: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    color: Colors.BLACK,
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
  },
  totalPriceWrapperCancel: {
    flexDirection: 'row',
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
    justifyContent: 'space-between',
    width: Constant.SCREEN_WIDTH - 180,
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
  },
  totalProductPriceTextCancel: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_BOLD,
    color:Colors.TUNDORA
  },
  totalProductPriceValueCancel: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    color: Colors.BLACK,
  },
  supplyDiscountTextCancel: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.TUNDORA,
  },
  supplyDiscountValueCancel: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    color: Colors.BLACK,
  },
  supplyDiscountWrapperCancel: {
    flexDirection: 'row',
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
    justifyContent: 'space-between',
    width: Constant.SCREEN_WIDTH - 180,
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
  },
  cancelTotalWrapperBorder: {
    borderBottomWidth: CHANGE_BY_MOBILE_DPI(1),
    borderBottomColor: Colors.GRAY_MEDIUM,
    height: CHANGE_BY_MOBILE_DPI(52),
    justifyContent: 'center',
  },
  cancelTotalWrapper: {
    flexDirection: 'row',
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
    width: Constant.SCREEN_WIDTH - 180,
    justifyContent: 'space-between',
  },
  cancelTotalText: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    color: Colors.BLACK,
  },
  cancelTotalValue: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    color: Colors.PRIMARY,
  },
  deliveryAddressWrapperCancel: {
    paddingBottom: CHANGE_BY_MOBILE_DPI(50),
  },
  deliveryAddressTextCancel: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_BOLD,
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
  },
});
