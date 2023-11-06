import { StyleSheet } from "react-native";
import { Colors, Constant, Fonts } from "../../global";
import { CHANGE_BY_MOBILE_DPI } from "../../global/constant";


//global

const HEIGHT = 50;
const SPACING = 20;
const RADIUS = 20;

export const styles = StyleSheet.create({
    con: {
        backgroundColor: Colors.WHITE,
        bottom: Constant.CHANGE_BY_MOBILE_DPI(0),
        width: Constant.SCREEN_WIDTH
    },
    tabBarCon: {
        flexDirection: 'row',
        height: Constant.CHANGE_BY_MOBILE_DPI(60),
        alignItems: 'center',
        marginHorizontal:CHANGE_BY_MOBILE_DPI(20)
    },
    home: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: Constant.CHANGE_BY_MOBILE_DPI(37)
    },
    names: {
        fontSize: Constant.CHANGE_BY_MOBILE_DPI(12),
        color: Colors.WHITE,
        fontFamily: Fonts.MANROPE_REGULAR,
        includeFontPadding: false,
        marginLeft: Constant.CHANGE_BY_MOBILE_DPI(7)
    }
});