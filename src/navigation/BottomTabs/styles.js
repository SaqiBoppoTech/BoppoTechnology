import { StyleSheet } from "react-native";
import { Colors, Constant, Fonts } from "../../global";


//global

const HEIGHT = 50;
const SPACING = 20;
const RADIUS = 20;

export const styles = StyleSheet.create({
    con: {
        backgroundColor: Colors.WHITE,
        bottom: Constant.CHANGE_BY_MOBILE_DPI(0),
        width:Constant.SCREEN_WIDTH
    },
    tabBarCon: {
        flexDirection: 'row',
        width: Constant.SCREEN_WIDTH - 43,
        height: Constant.CHANGE_BY_MOBILE_DPI(60)

    },
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancerTab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatTab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    names: {
        fontSize: Constant.CHANGE_BY_MOBILE_DPI(10),
        fontFamily: Fonts.INTER_BOLD,
        includeFontPadding: false,
    }
});