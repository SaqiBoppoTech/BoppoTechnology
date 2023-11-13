import {StyleSheet} from 'react-native';
import { Colors } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

export const styles = StyleSheet.create({
  mainContainer: {
  flex:1,
  backgroundColor:Colors.WHITE
  },
  carosalContainer:{
    height:CHANGE_BY_MOBILE_DPI(300),
    marginTop:CHANGE_BY_MOBILE_DPI(10)
  },
  positionAlignment:{
    bottom:CHANGE_BY_MOBILE_DPI(-40)
  },
  iconPositionContainer:{
    position:'absolute',
    top:CHANGE_BY_MOBILE_DPI(10),
    right:CHANGE_BY_MOBILE_DPI(10)
  },
  heartSvgStyle:{
    marginBottom:CHANGE_BY_MOBILE_DPI(10)
  }
});
