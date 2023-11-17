import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

export const style = StyleSheet.create({
  container: {
    flex: 1, // Set flex to 1 to make the mainView take up all available space
    justifyContent: 'space-between', // Align items with space between them
    paddingBottom: CHANGE_BY_MOBILE_DPI(20), // Add some padding to the bottom for better spacing
  },
  received: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(28),
    fontFamily: Fonts.MANROPE_BOLD,
    marginVertical: CHANGE_BY_MOBILE_DPI(18),
  },
  time: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_MEDIUM,
    color: Colors.BLACK,
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderReceived: {
    backgroundColor: Colors.WHITE,
    flex: CHANGE_BY_MOBILE_DPI(1),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  orderReceivedText: {
    color: Colors.PRIMARY,
    fontSize: CHANGE_BY_MOBILE_DPI(28),
    fontFamily: Fonts.MANROPE_BOLD,
  },
  textContainer: {
    backgroundColor: Colors.WHITE,
    flex: CHANGE_BY_MOBILE_DPI(2),
    justifyContent: 'space-between',
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_BOLD,
    marginTop: CHANGE_BY_MOBILE_DPI(15),
    color: Colors.BLACK,
  },
});
