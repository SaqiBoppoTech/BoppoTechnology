import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../../global/constant';
import {MANROPE_BOLD} from '../../../global/typography';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    height: CHANGE_BY_MOBILE_DPI(59),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3,
    // backgroundColor:'red'
  },
  arrowWrapper: {
    justifyContent: 'center',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: CHANGE_BY_MOBILE_DPI(15),
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
  },
  title: {
    fontSize: CHANGE_BY_MOBILE_DPI(18),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_MEDIUM,
    includeFontPadding: false,
  },
  searchWrapper: {
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
  },
  cartWrapper: {
    marginRight: CHANGE_BY_MOBILE_DPI(20),
  },
  filter: {
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_MEDIUM,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    marginRight: CHANGE_BY_MOBILE_DPI(15),
  },

  rowWrapper: {
    height: CHANGE_BY_MOBILE_DPI(45),
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    position: 'absolute',
    backgroundColor: Colors.PRIMARY,
    height: CHANGE_BY_MOBILE_DPI(20),
    width: CHANGE_BY_MOBILE_DPI(20),
    bottom: CHANGE_BY_MOBILE_DPI(22),
    right: CHANGE_BY_MOBILE_DPI(13),
    borderRadius: CHANGE_BY_MOBILE_DPI(100),
  },
  countNumber: {
    color: Colors.WHITE,
    alignSelf: 'center',
  },
});
