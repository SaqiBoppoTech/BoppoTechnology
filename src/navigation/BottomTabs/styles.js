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
        marginHorizontal: CHANGE_BY_MOBILE_DPI(20)
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
    },
    circleContainer: {
        height: CHANGE_BY_MOBILE_DPI(16),
        width: CHANGE_BY_MOBILE_DPI(16),
        borderRadius: CHANGE_BY_MOBILE_DPI(100),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.BLACK
    },
    countFontStyle: {
        fontSize: Constant.CHANGE_BY_MOBILE_DPI(12),
        color: Colors.WHITE,
        fontFamily: Fonts.INTER_BOLD,
    },
    positionContainer: {
        position: 'absolute',
        top: CHANGE_BY_MOBILE_DPI(-5),
        right: CHANGE_BY_MOBILE_DPI(-5),
        zIndex: 100
    }
});