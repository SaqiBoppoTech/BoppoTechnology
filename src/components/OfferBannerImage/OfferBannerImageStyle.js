import { StyleSheet } from "react-native";
import { CHANGE_BY_MOBILE_DPI } from "../../global/constant";
import { Colors, Fonts } from "../../global";
export const styles = StyleSheet.create({
    OfferBannerContainer: {
        // height: CHANGE_BY_MOBILE_DPI(225),
        paddingHorizontal:CHANGE_BY_MOBILE_DPI(20),
        paddingTop:CHANGE_BY_MOBILE_DPI(0),
        backgroundColor:Colors.WHITE
    },
    transformContainer: {

    },
    flexDirectionContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    bannerFontStyle: {
        fontSize: CHANGE_BY_MOBILE_DPI(14),
        fontFamily: Fonts.MANROPE_BOLD,
        color: Colors.BLACK
    },
    transformContainer:{
        transform:[{
            rotate:'-180deg'
        }],
        top:CHANGE_BY_MOBILE_DPI(2)
    },
    flexContainer:{
        flex:1,
        marginTop:CHANGE_BY_MOBILE_DPI(5),
        marginRight:CHANGE_BY_MOBILE_DPI(10)
    },
    bannerImageStyle:{
        height:CHANGE_BY_MOBILE_DPI(163),
        width:CHANGE_BY_MOBILE_DPI(163)
    },
    OfferCard:{
        width:CHANGE_BY_MOBILE_DPI(163),
        marginRight:CHANGE_BY_MOBILE_DPI(15)
    }
});

