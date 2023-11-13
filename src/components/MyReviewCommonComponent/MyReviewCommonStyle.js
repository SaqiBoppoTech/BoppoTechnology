import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    margin: CHANGE_BY_MOBILE_DPI(10),
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
    paddingVertical: CHANGE_BY_MOBILE_DPI(15),
  },
  name: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK_DARK,
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
  },
  yourRatingText: {
    marginBottom: CHANGE_BY_MOBILE_DPI(8),
    color: '#5A5A5A',
    fontSize: CHANGE_BY_MOBILE_DPI(12),
    fontFamily: Fonts.MANROPE_MEDIUM,
  },
  description: {
    color: '#151515',
    padding: CHANGE_BY_MOBILE_DPI(10),
    fontSize: CHANGE_BY_MOBILE_DPI(14),
  },
  buttonText: {
    fontSize: CHANGE_BY_MOBILE_DPI(15),
    color: '#000000',
  },
  imageWrapper: {
    height: CHANGE_BY_MOBILE_DPI(100),
    width: CHANGE_BY_MOBILE_DPI(100),
    objectFit: 'cover',
    alignItems: 'center',
    marginRight: CHANGE_BY_MOBILE_DPI(10),
  },
  rowWrapper: {
    flexDirection: 'row',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
  },
  nameView: {
    justifyContent: 'space-between',
    flex: 1,
  },
});
