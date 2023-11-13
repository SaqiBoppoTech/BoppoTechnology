import { StyleSheet } from "react-native";
import { Colors, Fonts } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
export const style = StyleSheet.create({
    typeWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: CHANGE_BY_MOBILE_DPI(40),
        marginVertical: CHANGE_BY_MOBILE_DPI(6),
    },
    type: {
        fontSize: CHANGE_BY_MOBILE_DPI(14),
        // fontWeight: '600',
        fontFamily:Fonts.MANROPE_BOLD,
        color: Colors.BLACK,
    },
    price: {
        fontSize: CHANGE_BY_MOBILE_DPI(14),
        // fontWeight: '500',
        fontFamily: Fonts.MANROPE_BOLD,

        color: Colors.BLACK,
    },
    total: {
        // fontWeight: '600',
        fontSize: CHANGE_BY_MOBILE_DPI(14),
        fontFamily: Fonts.MANROPE_BOLD,

        color: Colors.BLACK,
    },
    totalContainer:{
        borderRadius: CHANGE_BY_MOBILE_DPI(5),
        borderColor: Colors.BLACK,
        borderWidth: CHANGE_BY_MOBILE_DPI(1),
        marginHorizontal: CHANGE_BY_MOBILE_DPI(15),
        marginVertical: CHANGE_BY_MOBILE_DPI(10),
        // marginTop: CHANGE_BY_MOBILE_DPI(8),
        paddingVertical: CHANGE_BY_MOBILE_DPI(15),
        paddingHorizontal: CHANGE_BY_MOBILE_DPI(25),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

