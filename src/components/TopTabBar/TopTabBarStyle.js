import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../global";
import { CHANGE_BY_MOBILE_DPI } from "../../global/constant";
export const styles = StyleSheet.create({
    bottomBarStyle:{
   height:CHANGE_BY_MOBILE_DPI(4.7),
   backgroundColor:Colors.BLACK
    },
    topTabFontStyle: {
        fontSize:CHANGE_BY_MOBILE_DPI(16),
        fontFamily:Fonts.MANROPE_BOLD,
        color:Colors.BLACK,
        marginVertical:CHANGE_BY_MOBILE_DPI(5)
    },
    topTbaMainContainer:{
        marginRight:CHANGE_BY_MOBILE_DPI(10)
    }
});
