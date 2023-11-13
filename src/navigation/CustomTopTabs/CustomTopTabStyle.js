import {StyleSheet } from 'react-native';
import { Colors, Constant, Fonts } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
export const styles = StyleSheet.create({
    flex: {
        flex: 1,
      },
      topScroll: {
        flexGrow: 0,
      },
      item: {
        height: '100%',
        width: Constant.SCREEN_WIDTH,
        backgroundColor: 'grey',
        borderWidth: 5,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerItem: {
        paddingHorizontal: CHANGE_BY_MOBILE_DPI(20),
        marginBottom:CHANGE_BY_MOBILE_DPI(7)
      },
      bar: {
        // height: 3,
        // alignSelf: 'flex-start',
      },
      barInner: {
        backgroundColor: Colors.HALLOWINE_ORANGE,
        height:CHANGE_BY_MOBILE_DPI(5)
      },
      txt: {
        // fontSize: 30,
        color: '#fff',
      },
      topTabFontStyle:{
        fontSize:CHANGE_BY_MOBILE_DPI(14),
        color:Colors.HALLOWINE_ORANGE,
        fontFamily:Fonts.MANROPE_BOLD,
      },
      topTabBlurFontStyle:{
        fontSize:CHANGE_BY_MOBILE_DPI(14),
        color:Colors.BLACK,
        fontFamily:Fonts.MANROPE_MEDIUM
      }
});