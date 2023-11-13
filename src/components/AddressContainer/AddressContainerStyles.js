import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

export const styles = StyleSheet.create({
  defaultTitle: {
    backgroundColor: Colors.GAINSBORO,
    borderRadius: CHANGE_BY_MOBILE_DPI(15),
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(10),
    paddingVertical: CHANGE_BY_MOBILE_DPI(2),
  },
  container: {
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
    fontFamily: Fonts.MANROPE_BOLD,
  },

  mainContainer: {
    backgroundColor: Colors.LIGHT_WHITE,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
    marginTop: CHANGE_BY_MOBILE_DPI(12),
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: CHANGE_BY_MOBILE_DPI(30),
    marginRight: CHANGE_BY_MOBILE_DPI(20),
    marginTop: CHANGE_BY_MOBILE_DPI(15),
    alignItems: 'center',
  },
  name: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
  },
  typeofAddress: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    textAlign: 'center',
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_BOLD,
    includeFontPadding: false,
  },
  streetAddress: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK_DARK,
    marginTop: CHANGE_BY_MOBILE_DPI(3),
    fontFamily: Fonts.MANROPE_MEDIUM,
    includeFontPadding: false,
  },
  addressView: {
    marginHorizontal: CHANGE_BY_MOBILE_DPI(30),
    marginTop: CHANGE_BY_MOBILE_DPI(8),
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
  iconWrapper: {
    flexDirection: 'row',
    gap: CHANGE_BY_MOBILE_DPI(20),
  },
});
