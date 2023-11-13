import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_WHITE,
    margin: CHANGE_BY_MOBILE_DPI(10),
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
    paddingTop: CHANGE_BY_MOBILE_DPI(5),
  },

  description: {
    color: Colors.BLACK_DARK,
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(10),
    paddingTop: CHANGE_BY_MOBILE_DPI(10),
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_MEDIUM,
  },
  buttonText: {
    fontSize: CHANGE_BY_MOBILE_DPI(15),
    color: Colors.BLACK,
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
    fontFamily: Fonts.MANROPE_BOLD,
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
