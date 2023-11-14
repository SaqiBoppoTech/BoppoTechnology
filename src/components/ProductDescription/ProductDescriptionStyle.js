import {StyleSheet} from 'react-native';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import { Colors, Fonts } from '../../global';

export const styles = StyleSheet.create({
  product: {
    fontSize:CHANGE_BY_MOBILE_DPI(16),
    color:Colors.BLACK,
    fontFamily:Fonts.MANROPE_BOLD
  },
  price: {
    fontSize:CHANGE_BY_MOBILE_DPI(28.31),
    color:Colors.BLACK,
    fontFamily:Fonts.MANROPE_BOLD
  },
  review: {
    fontSize:CHANGE_BY_MOBILE_DPI(12),
    color:Colors.GRAY_DARK,
    fontFamily:Fonts.MANROPE_REGULAR,
    },
    reviewWithUnderLine:{
      fontSize:CHANGE_BY_MOBILE_DPI(12),
      color:Colors.GRAY_DARK,
      fontFamily:Fonts.MANROPE_REGULAR,
      textDecorationLine:'underline'
    },
  description: {
    fontSize:CHANGE_BY_MOBILE_DPI(14),
    color:Colors.BLACK_DARK + 99,
    fontFamily:Fonts.MANROPE_MEDIUM
  },
  scrollStyle: {
    marginBottom: 10,
  },
  mainView: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 15,
  },
  priceview: {
    marginTop:CHANGE_BY_MOBILE_DPI(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems:'center',
    marginVertical:CHANGE_BY_MOBILE_DPI(15)
    // marginBottom: 20,
  },
  starWidthStyle:{
    marginRight:CHANGE_BY_MOBILE_DPI(3)
  }
});
