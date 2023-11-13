import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../global";
import { CHANGE_BY_MOBILE_DPI } from "../../global/constant";
export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    askAQuestionFontStyle: {
        fontSize: CHANGE_BY_MOBILE_DPI(14),
        fontFamily: Fonts.MANROPE_BOLD,
        color: Colors.BLACK,
        marginLeft: CHANGE_BY_MOBILE_DPI(20),
        marginTop: CHANGE_BY_MOBILE_DPI(20)
    },
    inputMainContainer: {
        height: CHANGE_BY_MOBILE_DPI(69),
        borderRadius: CHANGE_BY_MOBILE_DPI(7),
        backgroundColor: Colors.GREY_SHADE_500,
        marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
        marginTop: CHANGE_BY_MOBILE_DPI(20),
        paddingHorizontal: CHANGE_BY_MOBILE_DPI(10),
        paddingVertical: CHANGE_BY_MOBILE_DPI(0)
    },
    inputFontStyle: {
        fontSize: CHANGE_BY_MOBILE_DPI(12),
        fontFamily: Fonts.MANROPE_REGULAR,
        color: Colors.GRAY_DARK,
    },
    positionInputContainer: {
        position: 'absolute',
        left: CHANGE_BY_MOBILE_DPI(10),
        right: 0
    },
    sendButton: {
        height: CHANGE_BY_MOBILE_DPI(31),
        width: CHANGE_BY_MOBILE_DPI(88.40),
        borderRadius: CHANGE_BY_MOBILE_DPI(3),
        backgroundColor: Colors.DARK_GREEN,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sendFontStyle: {
        fontSize: CHANGE_BY_MOBILE_DPI(14),
        fontFamily: Fonts.MANROPE_BOLD,
        color: Colors.WHITE,
    },
    sendPositionContainer: {
        marginTop: CHANGE_BY_MOBILE_DPI(10),
        marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
        alignItems: 'flex-end'
    },
    seq: {
        fontSize: CHANGE_BY_MOBILE_DPI()
    },
    container: {
        backgroundColor: Colors.WHITE,

    },

    bottomContainer: {
        flexDirection: 'row',
        height: CHANGE_BY_MOBILE_DPI(45),
        borderBottomRightRadius: CHANGE_BY_MOBILE_DPI(10),
        borderBottomLeftRadius: CHANGE_BY_MOBILE_DPI(10),
        backgroundColor: Colors.LIGHT_WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },


    optionText: {
        fontSize: CHANGE_BY_MOBILE_DPI(14),
        color: Colors.BLACK,
        fontFamily: Fonts.MANROPE_BOLD,
    },
    line: {
        borderBottomWidth: CHANGE_BY_MOBILE_DPI(1),
        borderColor: Colors.GAINSBORO,
        marginTop: CHANGE_BY_MOBILE_DPI(10),
    },

    question: {
        fontFamily: Fonts.MANROPE_BOLD,
        fontSize: CHANGE_BY_MOBILE_DPI(14),
        color: Colors.BLACK_DARK,
    },
    questionView: {
        flexDirection: 'row',
        flex: 1,
        marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
        marginLeft: CHANGE_BY_MOBILE_DPI(20),
    },
    questionText: {
        fontFamily: Fonts.MANROPE_MEDIUM,
        fontSize: CHANGE_BY_MOBILE_DPI(16),
        color: Colors.BLACK_DARK,
        marginHorizontal: CHANGE_BY_MOBILE_DPI(5),
    },
    flexView: {
        flex: 1,
    },
    flexDirection: {
        flexDirection: 'row',
        marginHorizontal:CHANGE_BY_MOBILE_DPI(20)
    },
    qustionFontStyle: {
        fontSize: CHANGE_BY_MOBILE_DPI(14),
        fontFamily: Fonts.MANROPE_BOLD,
        color: Colors.BLACK
    },
    lessFlexContainer: {
        flex: 0.2
    },
    largeFlexContainer: {
        flex: 0.7
    },
    valueFontStyle: {
        fontSize: CHANGE_BY_MOBILE_DPI(14),
        fontFamily: Fonts.MANROPE_REGULAR,
        color: Colors.BLACK
    }
});