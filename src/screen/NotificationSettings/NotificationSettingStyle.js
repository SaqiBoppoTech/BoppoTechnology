import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';

export const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_WHITE,
    justifyContent: 'space-between',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    paddingVertical: CHANGE_BY_MOBILE_DPI(10),
    borderRadius: CHANGE_BY_MOBILE_DPI(8),
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(20),
    marginTop: CHANGE_BY_MOBILE_DPI(10),
  },
  toggle: {
    width: CHANGE_BY_MOBILE_DPI(38),
    height: CHANGE_BY_MOBILE_DPI(22),
    borderRadius: CHANGE_BY_MOBILE_DPI(15),
    justifyContent: 'center',
  },
  toggleOn: {
    backgroundColor: 'green',
    justifyContent: 'flex-end',
  },
  toggleOff: {
    backgroundColor: 'gray',
    justifyContent: 'flex-start',
  },
  toggleTextOn: {
    marginLeft: 5,
  },
  toggleTextOff: {
    marginRight: 5,
  },
  toggleSmall: {
    width: CHANGE_BY_MOBILE_DPI(14),
    height: CHANGE_BY_MOBILE_DPI(14),
    borderRadius: CHANGE_BY_MOBILE_DPI(15),
    alignItems: 'center',
    marginLeft: CHANGE_BY_MOBILE_DPI(3),
  },
  text: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: '#000',
    fontWeight: '500',
    fontFamily: Fonts.LATO_BOLD,
  },
  textView: {
    flex: 1,
  },
});
