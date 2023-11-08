import {StyleSheet} from 'react-native';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import { Colors, Constant, Fonts } from '../../global';

export const styles = StyleSheet.create({
  container: {
    height:CHANGE_BY_MOBILE_DPI(41.29),
    width:CHANGE_BY_MOBILE_DPI(119),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: CHANGE_BY_MOBILE_DPI(3.47),
  },
  text: {
    textAlign: 'center',
    fontSize:CHANGE_BY_MOBILE_DPI(14),
    color:Colors.BLACK,
    fontFamily:Fonts.INTER_BOLD
  },
  flexContainer:{
    flex:1
  }
});
