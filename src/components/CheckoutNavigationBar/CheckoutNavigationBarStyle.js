import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Constant, Fonts} from '../../global';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
  },
  dottedLine: {
    height: CHANGE_BY_MOBILE_DPI(1),
    width: CHANGE_BY_MOBILE_DPI(90),
    borderWidth: CHANGE_BY_MOBILE_DPI(0.8),
    borderColor: Colors.BLACK,
    borderStyle: 'dashed',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(5),
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
  },
  stepNumber: {
    textAlign: 'center',
    fontSize: CHANGE_BY_MOBILE_DPI(12),
    color: Colors.WHITE,
    fontFamily: Fonts.MANROPE_BOLD,
  },
  stepText: {
    textAlign: 'center',
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_BOLD,
  },

  text: {
    color: Colors.BLACK,
  },
  textWrapper: {
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: CHANGE_BY_MOBILE_DPI(55),
  },
});
