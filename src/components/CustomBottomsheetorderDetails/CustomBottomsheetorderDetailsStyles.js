import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

export const style = StyleSheet.create({
  bottomSheetWrapper: {
    backgroundColor: Colors.WHITE,
    padding: CHANGE_BY_MOBILE_DPI(25),
    height: CHANGE_BY_MOBILE_DPI(265),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mainBottomsheetWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonsWrapper: {
    height: CHANGE_BY_MOBILE_DPI(48),
    borderColor: Colors.BLACK,
    borderWidth: CHANGE_BY_MOBILE_DPI(2),
    width: CHANGE_BY_MOBILE_DPI(301),
    borderRadius: CHANGE_BY_MOBILE_DPI(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.BLACK,
  },
});
