import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';
export const styles = StyleSheet.create({
  input: {
    height: CHANGE_BY_MOBILE_DPI(56),
    borderWidth: 1,
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(20),
    borderRadius: CHANGE_BY_MOBILE_DPI(7),
    borderColor: Colors.GRAY_MEDIUM,
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.BLACK,
    fontFamily: Fonts.LATO_REGULAR,
    marginTop: CHANGE_BY_MOBILE_DPI(8),
    backgroundColor: Colors.ALTO + 10,
  },
  title: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_BOLD,
  },
  titleview: {
    flexDirection: 'row',
  },
  titleMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  asterisk: {
    color: Colors.ALERT,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.INTER_BOLD,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    fontWeight: '400',
    marginHorizontal: 15,
    marginBottom: 5,
  },
  inputError: {
    borderColor: 'red',
  },
  marginContainer: {
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
  },
});
