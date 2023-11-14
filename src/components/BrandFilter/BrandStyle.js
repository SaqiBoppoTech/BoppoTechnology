import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

export const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
  filter: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: CHANGE_BY_MOBILE_DPI(6),
    margin: CHANGE_BY_MOBILE_DPI(20),
  },
  filterTextStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.BLACK,
  },
  checkBox: {
    backgroundColor: Colors.WHITE,
    height: CHANGE_BY_MOBILE_DPI(20),
    width: CHANGE_BY_MOBILE_DPI(20),
    borderColor: Colors.BLACK,
    borderWidth: CHANGE_BY_MOBILE_DPI(2),
    marginRight: CHANGE_BY_MOBILE_DPI(20),
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: CHANGE_BY_MOBILE_DPI(10),
    borderColor: Colors.ALTO,
    borderWidth: CHANGE_BY_MOBILE_DPI(1.3),
    borderRadius: CHANGE_BY_MOBILE_DPI(7),
    height: CHANGE_BY_MOBILE_DPI(47),
    width: CHANGE_BY_MOBILE_DPI(207),
    marginBottom: CHANGE_BY_MOBILE_DPI(20),
    marginLeft: CHANGE_BY_MOBILE_DPI(15),
  },
  customCheckbox: {
    height: CHANGE_BY_MOBILE_DPI(20),
    width: CHANGE_BY_MOBILE_DPI(20),
  },
  icon: {
    color: 'grey',
    padding: CHANGE_BY_MOBILE_DPI(10),
  },
  SearchText: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.LATO_REGULAR,
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
  },
});
