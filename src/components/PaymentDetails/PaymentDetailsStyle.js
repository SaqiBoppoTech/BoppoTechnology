import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
export const style = StyleSheet.create({
  typeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(40),
    marginVertical: CHANGE_BY_MOBILE_DPI(6),
  },
  type: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    color: Colors.BLACK,
  },
  price: {
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.BLACK,
  },
  total: {
    fontSize: CHANGE_BY_MOBILE_DPI(20),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    color: Colors.GREY_200,
  },
  totalContainer: {
    borderRadius: CHANGE_BY_MOBILE_DPI(5),
    borderColor: Colors.BLACK,
    borderWidth: CHANGE_BY_MOBILE_DPI(1),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(15),
    marginVertical: CHANGE_BY_MOBILE_DPI(10),
    height: CHANGE_BY_MOBILE_DPI(52),
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainView: {
    backgroundColor: Colors.Alabaster_GREY,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
    marginVertical: CHANGE_BY_MOBILE_DPI(15),
    borderRadius: CHANGE_BY_MOBILE_DPI(5),
    height: CHANGE_BY_MOBILE_DPI(260),
  },
  txt: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.BLACK,
    marginLeft: CHANGE_BY_MOBILE_DPI(30),
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    marginBottom: CHANGE_BY_MOBILE_DPI(12),
  },
});
