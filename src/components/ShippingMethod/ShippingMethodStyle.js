import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    backgroundColor: Colors.WHITE,
  },
  headingText: {
    color: Colors.BLACK_DARK,
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
  },
  lightText: {
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
    color: Colors.DARK_WHITE,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
  },
  container: {
    height: CHANGE_BY_MOBILE_DPI(50),
    borderRadius: CHANGE_BY_MOBILE_DPI(7),
    borderColor: 'black',
    borderWidth: CHANGE_BY_MOBILE_DPI(1),
    flexDirection: 'row',
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
    marginHorizontal:CHANGE_BY_MOBILE_DPI(10)
  },
  radioNameWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  radio: {
    height: CHANGE_BY_MOBILE_DPI(16),
    width: CHANGE_BY_MOBILE_DPI(16),
    borderColor: Colors.BLACK,
    borderWidth: CHANGE_BY_MOBILE_DPI(1),
    borderRadius: CHANGE_BY_MOBILE_DPI(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioBg: {
    backgroundColor: Colors.GRAY + 99,
    height: CHANGE_BY_MOBILE_DPI(10),
    width: CHANGE_BY_MOBILE_DPI(10),
    borderRadius: CHANGE_BY_MOBILE_DPI(20),
  },
  name: {
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
  },
  additionalPriceWrapper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  additionalPrice: {
    fontFamily: Fonts.LATO_BOLD,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK,
  },
  usd: {
    fontFamily: Fonts.LATO_BOLD,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.GREEN_DARK,
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
