import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../global";
import { CHANGE_BY_MOBILE_DPI } from "../../global/constant";
export const styles = StyleSheet.create({
    mainContainer: {
         position:'absolute',
         bottom:CHANGE_BY_MOBILE_DPI(20),
         left:0,
         right:0,
         marginHorizontal:CHANGE_BY_MOBILE_DPI(20),
    },
    buttonContainer:{
        backgroundColor:Colors.ORANGE,
        borderRadius:CHANGE_BY_MOBILE_DPI(8),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:CHANGE_BY_MOBILE_DPI(5),
        paddingVertical:CHANGE_BY_MOBILE_DPI(15),
        
    },
    textFontSytle:{
        fontSize:CHANGE_BY_MOBILE_DPI(13),
        fontFamily:Fonts.INTER_BOLD,
        color:Colors.WHITE
    },
    proceedToBuyButtonStyle:{
        height:CHANGE_BY_MOBILE_DPI(41),
        width:CHANGE_BY_MOBILE_DPI(123),
        borderRadius:CHANGE_BY_MOBILE_DPI(3),
        backgroundColor:Colors.BLACK,
        alignItems:'center',
        justifyContent:'center'
    },
    proceedFontStyle:{
        fontSize:CHANGE_BY_MOBILE_DPI(14),
        fontFamily:Fonts.MANROPE_BOLD,
        color:Colors.WHITE ,
        includeFontPadding:false
    },
    flexDirectionContainer:{
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        marginRight:CHANGE_BY_MOBILE_DPI(5),
        
    },
    flexContainer:{
        flex:1
    },
    processedBuyContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    crossContainer:{
        marginHorizontal:CHANGE_BY_MOBILE_DPI(10),
        marginLeft:CHANGE_BY_MOBILE_DPI(15)
    },
    svgContainer:{
        marginRight:CHANGE_BY_MOBILE_DPI(10),
        marginLeft:CHANGE_BY_MOBILE_DPI(10)
    }
    
    

});
