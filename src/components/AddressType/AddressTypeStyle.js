import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    height: CHANGE_BY_MOBILE_DPI(45),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
    flexDirection: 'row',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
  },
  title: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    textAlign: 'center',
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_MEDIUM,
  },
  defaultTitle: {
    backgroundColor: '#DDDDDD',
    borderRadius: CHANGE_BY_MOBILE_DPI(15),
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(10),
    paddingVertical: CHANGE_BY_MOBILE_DPI(2),
  },
  wrapper: {
    flexDirection: 'row',
    gap: CHANGE_BY_MOBILE_DPI(50),
    alignItems: 'center',
  },
  default: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    textAlign: 'center',
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_MEDIUM,
    includeFontPadding: false,
  },
  rotate: {transform: [{rotate: '180deg'}]},
});
