import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  stepContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepCircle: {
    borderRadius: CHANGE_BY_MOBILE_DPI(15),
    height: CHANGE_BY_MOBILE_DPI(30),
    width: CHANGE_BY_MOBILE_DPI(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
  },
  stepNumber: {
    textAlign: 'center',
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.WHITE,
    fontFamily: Fonts.MANROPE_BOLD,
  },
  stepText: {
    textAlign: 'center',
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_BOLD,
  },
});
