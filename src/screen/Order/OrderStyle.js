import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ALABASTER_GREY,
    height: CHANGE_BY_MOBILE_DPI(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  screenContainer: {},
  externalTopTabContainerStyle: {
    marginRight: CHANGE_BY_MOBILE_DPI(15),
  },
  externalTopTabStyle: {
    marginVertical: CHANGE_BY_MOBILE_DPI(9),
  },
  contentContainerStyle: {
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(25),
    backgroundColor: Colors.WHITE,
    elevation: CHANGE_BY_MOBILE_DPI(2),
    marginVertical: CHANGE_BY_MOBILE_DPI(2),
    paddingTop: CHANGE_BY_MOBILE_DPI(10),
    flex:1
  },
  barContainerStyle: {
    marginRight: CHANGE_BY_MOBILE_DPI(30),
  },
  bottomBar: {
    height: CHANGE_BY_MOBILE_DPI(5),
    backgroundColor: Colors.TRANSPARENT,
    marginTop: CHANGE_BY_MOBILE_DPI(8),
  },
  labelFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.PRIMARY,
  },
  labelBlurFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.BLACK,
  },
});
