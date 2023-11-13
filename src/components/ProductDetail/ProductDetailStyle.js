import {StyleSheet} from 'react-native';
import { Colors, Fonts } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

export const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginBottom:CHANGE_BY_MOBILE_DPI(20)
  },
  name: {
  fontSize:CHANGE_BY_MOBILE_DPI(16),
  color:Colors.GRAY_DARK,
  fontFamily:Fonts.MANROPE_REGULAR
  },
  namevalues: {
    fontSize:CHANGE_BY_MOBILE_DPI(16),
    color:Colors.BLACK,
    fontFamily:Fonts.MANROPE_REGULAR
  },
  mainView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginTop:CHANGE_BY_MOBILE_DPI(20),
    marginHorizontal:CHANGE_BY_MOBILE_DPI(20)
  },
  lessFlexContainer:{
    flex:0.4,
  },
  largeFlexContainer:{
    flex:0.6
  }
});
