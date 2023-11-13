import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';

export const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    gap: CHANGE_BY_MOBILE_DPI(20),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(15),
    marginBottom: CHANGE_BY_MOBILE_DPI(15),
    alignItems: 'center',
  },
  checkbox: {
    width: CHANGE_BY_MOBILE_DPI(20),
    height: CHANGE_BY_MOBILE_DPI(20),
    borderWidth: CHANGE_BY_MOBILE_DPI(1),
    borderColor: Colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: CHANGE_BY_MOBILE_DPI(4),
    borderColor: Colors.GRAY_MEDIUM,
  },
  checked: {
    backgroundColor: '#fff',
  },
  checkWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK,
    textAlign: 'center',
    fontFamily: Fonts.MANROPE_MEDIUM,
  },
});
