import {StyleSheet} from 'react-native';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import { Colors, Fonts } from '../../global';

export const styles = StyleSheet.create({
  imageback: {
    // backgroundColor: 'red',
    // width: 150,
    // height: 130,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: 5,
    marginRight:CHANGE_BY_MOBILE_DPI(15)
  },
  item: {
    height:CHANGE_BY_MOBILE_DPI(101),
    width:CHANGE_BY_MOBILE_DPI(149),
  },
  image: {
   height:'100%',
   width:'100%'
  },
  backGround:{
    // height: 180,s
    backgroundColor:Colors.WHITE,
    paddingTop:CHANGE_BY_MOBILE_DPI(15)
  },
  headingColor: {
    fontSize:CHANGE_BY_MOBILE_DPI(20),
    color:Colors.BLACK,
    fontFamily:Fonts.PLAYFAIR_DISPLAY_BOLD,
    marginHorizontal:CHANGE_BY_MOBILE_DPI(20),
    marginVertical:CHANGE_BY_MOBILE_DPI(10)
   },
   contentContainerStyle:{
    paddingHorizontal:CHANGE_BY_MOBILE_DPI(20)
   }
});

