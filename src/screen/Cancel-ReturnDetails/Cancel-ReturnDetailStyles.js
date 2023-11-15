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
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
  },
  totalProductPriceTextCancel: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.TUNDORA,
    flex: 1,
  },
  totalProductPriceValueCancel: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    color: Colors.BLACK,
    flex: 1.2,
  },
  supplyDiscountTextCancel: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.TUNDORA,
    flex: 1,
  },
  supplyDiscountValueCancel: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    color: Colors.PRIMARY,
    flex: 1.2,
  },
  supplyDiscountWrapperCancel: {
    flexDirection: 'row',
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
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
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
  },
  cancelTotalText: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    color: Colors.BLACK,
    flex: 1,
  },
  cancelTotalValue: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    color: Colors.PRIMARY,
    flex: 1.8,
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
