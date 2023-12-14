import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Constant, Fonts} from '../../global';

export const styles = StyleSheet.create({
  alertBackgroundColor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContainer: {
    backgroundColor: 'white',
    borderRadius: CHANGE_BY_MOBILE_DPI(15),
    width: Constant.SCREEN_WIDTH - 70,
  },
  messageFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(20),
    fontFamily: Fonts.INTER_BOLD,
    color: Colors.BLACK,
    textAlign: 'center',
  },
  descriptionFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.INTER_MEDIUM,
    color: Colors.BLACK,
    textAlign: 'center',
  },
  horizontalLine: {
    height: CHANGE_BY_MOBILE_DPI(1),
    backgroundColor: Colors.GRAY_MEDIUM,
  },
  leftFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.INTER_MEDIUM,
    color: Colors.PRIMARY,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(5),
  },
  rightFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.INTER_MEDIUM,
    color: Colors.PRIMARY,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(5),
  },
  buttonDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    height: CHANGE_BY_MOBILE_DPI(50),
  },
  verticalLine: {
    backgroundColor: Colors.GRAY_MEDIUM,
    width: CHANGE_BY_MOBILE_DPI(1),
    height: CHANGE_BY_MOBILE_DPI(50),
  },
  flexContainer: {
    flex: 1,
    alignItems: 'center',
  },
  marginVerticalStyle: {
    marginVertical: CHANGE_BY_MOBILE_DPI(20),
  },
});
