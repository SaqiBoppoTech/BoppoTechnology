import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.GREY_SHADE_500,
    alignItems: 'center',
    width: CHANGE_BY_MOBILE_DPI(115),
    justifyContent: 'space-between',
    borderRadius: CHANGE_BY_MOBILE_DPI(4),
    height: CHANGE_BY_MOBILE_DPI(38),
  },
  blackContainer: {
    backgroundColor: Colors.BLACK,
    height: CHANGE_BY_MOBILE_DPI(38),
    width: CHANGE_BY_MOBILE_DPI(28),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: CHANGE_BY_MOBILE_DPI(4),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(5),
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: CHANGE_BY_MOBILE_DPI(30),
    justifyContent: 'center',
    borderRadius: CHANGE_BY_MOBILE_DPI(4),
  },
  resultText: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    textAlign: 'center',
    fontFamily: Fonts.MANROPE_MEDIUM,
  }
});
