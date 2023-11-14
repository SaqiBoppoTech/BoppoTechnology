import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Gallery_GREY,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
    borderRadius: CHANGE_BY_MOBILE_DPI(5),
    justifyContent: 'space-between',
    paddingVertical: CHANGE_BY_MOBILE_DPI(10),
  },
  title: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(15),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(15),
    marginBottom: CHANGE_BY_MOBILE_DPI(15),
  },
  discountPlanWrapper: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    marginBottom: CHANGE_BY_MOBILE_DPI(15),
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
  },
  remove: {
    backgroundColor: Colors.BLACK,
    width: CHANGE_BY_MOBILE_DPI(100),
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
    alignItems: 'center',
    height: CHANGE_BY_MOBILE_DPI(40),
    justifyContent: 'center',
    borderColor: Colors.GREY_200,
    borderWidth: CHANGE_BY_MOBILE_DPI(2),
  },
  removetxt: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.WHITE,
    fontFamily: Fonts.LATO_BOLD,
    textAlign: 'center',
  },
  container2: {
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
    height: CHANGE_BY_MOBILE_DPI(50),
    borderRadius: CHANGE_BY_MOBILE_DPI(5),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(15),
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(10),
  },
  save: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    paddingLeft: CHANGE_BY_MOBILE_DPI(10),
  },
});
