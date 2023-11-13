import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';

export const styles = StyleSheet.create({
  businessHeader: {
    fontSize: CHANGE_BY_MOBILE_DPI(18),
    color: '#151515',
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(20),
    marginTop: CHANGE_BY_MOBILE_DPI(5),
    marginBottom: CHANGE_BY_MOBILE_DPI(15),
    fontFamily: Fonts.LATO_BOLD,
  },
  mainView: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    paddingBottom: CHANGE_BY_MOBILE_DPI(65),
  },
  btn: {
    position: 'absolute',
    bottom: CHANGE_BY_MOBILE_DPI(10),
    left: 0,
    width: '100%',
  },
  scroll: {
    marginTop: CHANGE_BY_MOBILE_DPI(10),
  },
});
