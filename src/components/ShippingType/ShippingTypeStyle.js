import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const {StyleSheet} = require('react-native');
export const styles = StyleSheet.create({
  shippingMethodButtonBgStyles: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
  },
  shippingMethodButtonStyles: {
    height: CHANGE_BY_MOBILE_DPI(50),
    flexDirection: 'row',
    borderRadius: CHANGE_BY_MOBILE_DPI(5),
    borderColor: Colors.BLACK,
    backgroundColor: Colors.RED,
    borderWidth: CHANGE_BY_MOBILE_DPI(1),
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
  },
  icon: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.LATO_BOLD,
    paddingLeft: CHANGE_BY_MOBILE_DPI(20),
  },
  titleView: {
    flex: 2,
    justifyContent: 'center',
  },
});
