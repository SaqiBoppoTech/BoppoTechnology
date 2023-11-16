import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';

export const styles = StyleSheet.create({
  name: {
    color: Colors.WHITE,
    fontSize: CHANGE_BY_MOBILE_DPI(20),
    fontFamily: Fonts.MANROPE_BOLD,
  },
  updateprofile: {
    color: Colors.WHITE,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_MEDIUM,
  },

  Imagecontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: CHANGE_BY_MOBILE_DPI(5),
  },
  circleImage: {
    height: CHANGE_BY_MOBILE_DPI(60),
    width: CHANGE_BY_MOBILE_DPI(60),
    borderRadius: CHANGE_BY_MOBILE_DPI(30),
    marginRight: CHANGE_BY_MOBILE_DPI(10),
  },
  ProfileSection: {
    backgroundColor: Colors.BLACK,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
    borderBottomLeftRadius: CHANGE_BY_MOBILE_DPI(10),
    borderBottomRightRadius: CHANGE_BY_MOBILE_DPI(10),
  },
  ProfileWrapper: {
    flexDirection: 'row',
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(10),
    paddingTop: CHANGE_BY_MOBILE_DPI(10),
    paddingBottom: CHANGE_BY_MOBILE_DPI(20),
    alignItems: 'center',
  },
  itemWrapper: {
    flexDirection: 'row',
    gap: CHANGE_BY_MOBILE_DPI(12),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(15),
  },
});
