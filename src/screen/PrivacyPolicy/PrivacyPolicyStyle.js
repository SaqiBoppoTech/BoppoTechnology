import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  header: {
    fontSize: CHANGE_BY_MOBILE_DPI(18),
    color: Colors.BLACK,
    marginBottom: CHANGE_BY_MOBILE_DPI(15),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
  },
  text: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK_DARK,
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
    fontFamily: Fonts.MANROPE_MEDIUM,
  },
  scrollChanges: {
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(12),
  },
});
