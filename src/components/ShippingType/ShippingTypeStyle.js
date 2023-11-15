import {Colors, Constant, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const {StyleSheet} = require('react-native');
export const styles = StyleSheet.create({
  shippingMethodButtonBgStyles: {
    alignItems: 'center',
    justifyContent:'center',
    flex: 1,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
  },
  shippingMethodButtonStyles: {
    height: CHANGE_BY_MOBILE_DPI(50),
    flexDirection: 'row',
    borderRadius: CHANGE_BY_MOBILE_DPI(5),
    borderColor: Colors.BLACK,
    borderWidth: CHANGE_BY_MOBILE_DPI(1),
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
    alignItems:'center',
    justifyContent:'center',
    width:Constant.SCREEN_WIDTH - 35,
    marginHorizontal:CHANGE_BY_MOBILE_DPI(20)
  },
  icon: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent:'center'
  },
  title: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.LATO_BOLD,
    paddingLeft: CHANGE_BY_MOBILE_DPI(10),
  },
  titleView: {
    flexDirection:'row',
    alignItems:"center"
  },
});
