import { StyleSheet } from "react-native";
import { Colors, Fonts } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

export const style = StyleSheet.create({
    main: {
        // flex: 1,
        flexDirection: 'column',
        // backgroundColor:'red',
        margin: CHANGE_BY_MOBILE_DPI(10),
        // marginTop: CHANGE_BY_MOBILE_DPI(20),
        marginVertical: CHANGE_BY_MOBILE_DPI(20)
    },
    paymentText:{
        fontSize: CHANGE_BY_MOBILE_DPI(15),
        color: Colors.BLACK,
        fontWeight: '600',
        fontFamily:Fonts.MANROPE_BOLD,
        
    },
    paymentDetailsButton: {
        height: CHANGE_BY_MOBILE_DPI(55),
        width: '100%',
        marginBottom: CHANGE_BY_MOBILE_DPI(10),
        borderColor: Colors.BLACK,
        borderWidth: CHANGE_BY_MOBILE_DPI(1),
        borderRadius: CHANGE_BY_MOBILE_DPI(7),
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: CHANGE_BY_MOBILE_DPI(20),
    },

    headingText: {
        color: Colors.BLACK,
        fontSize: CHANGE_BY_MOBILE_DPI(16),
        marginBottom: CHANGE_BY_MOBILE_DPI(5),
        fontFamily: Fonts.LATO_REGULAR,
        // fontWeight: '600',
        marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
    },
    lightText: {
        marginBottom: CHANGE_BY_MOBILE_DPI(15),
        color: Colors.DARK_WHITE,
        fontSize: CHANGE_BY_MOBILE_DPI(14),
        fontFamily:Fonts.LATO_REGULAR,
        marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
    },
    container: {
        height: CHANGE_BY_MOBILE_DPI(55),
        width: '100%',
        borderRadius: CHANGE_BY_MOBILE_DPI(8),
        borderColor: Colors.BLACK,
        borderWidth: CHANGE_BY_MOBILE_DPI(1),
        marginBottom: CHANGE_BY_MOBILE_DPI(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: CHANGE_BY_MOBILE_DPI(20),
        paddingVertical: CHANGE_BY_MOBILE_DPI(10),
        alignItems: 'center',
    },

    radio: {
        height: CHANGE_BY_MOBILE_DPI(20),
        width: CHANGE_BY_MOBILE_DPI(20),
        borderColor: Colors.BLACK,
        borderWidth: CHANGE_BY_MOBILE_DPI(2),
        borderRadius: CHANGE_BY_MOBILE_DPI(20),
    },
    radioBg: {
        backgroundColor: 'grey',
        height: CHANGE_BY_MOBILE_DPI(14),
        width: CHANGE_BY_MOBILE_DPI(14),
        borderRadius: CHANGE_BY_MOBILE_DPI(20),
        margin: CHANGE_BY_MOBILE_DPI(1),
    },
});