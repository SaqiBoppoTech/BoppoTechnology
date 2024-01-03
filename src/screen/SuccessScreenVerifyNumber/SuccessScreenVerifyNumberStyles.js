import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Constant, Fonts} from '../../global';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  messageFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(22),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.BLACK,
    textAlign: 'center',
    marginTop: CHANGE_BY_MOBILE_DPI(25),
  },
  container: {
    top: CHANGE_BY_MOBILE_DPI(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    width: '100%',
  },
});
