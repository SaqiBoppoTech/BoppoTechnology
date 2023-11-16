import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';

export const styles = StyleSheet.create({
  containerWrapper: {
    height: CHANGE_BY_MOBILE_DPI(50),
    width: '100%',
    borderRadius: CHANGE_BY_MOBILE_DPI(8),
    borderColor: Colors.BLACK,
    borderWidth: CHANGE_BY_MOBILE_DPI(1),
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(10),
    paddingVertical: CHANGE_BY_MOBILE_DPI(10),
    alignItems: 'center',
  },
  radio: {
    height: CHANGE_BY_MOBILE_DPI(20),
    width: CHANGE_BY_MOBILE_DPI(20),
    borderColor: Colors.BLACK,
    borderWidth: CHANGE_BY_MOBILE_DPI(2),
    borderRadius: CHANGE_BY_MOBILE_DPI(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioBg: {
    backgroundColor: Colors.GRAY_DARK,
    height: CHANGE_BY_MOBILE_DPI(12),
    width: CHANGE_BY_MOBILE_DPI(12),
    borderRadius: CHANGE_BY_MOBILE_DPI(20),
    margin: CHANGE_BY_MOBILE_DPI(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  container: {
    backgroundColor: Colors.WHITE,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    marginTop: CHANGE_BY_MOBILE_DPI(20),
  },
  imgWrapper: {
    justifyContent: 'center',
  },
  type: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(18),
    fontFamily: Fonts.INTER_MEDIUM,
    includeFontPadding: false,
  },
  btn: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    width: '100%',
  },
  imgView: {height: 24, width: 40},
  externalFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.WHITE,
    fontFamily: Fonts.MANROPE_BOLD,
    includeFontPadding: false,
  },
  newCustomerFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.BLACK,
    fontFamily: Fonts.LATO_BOLD,
    includeFontPadding: false,
  },
});
