import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../global";
import { CHANGE_BY_MOBILE_DPI } from "../../global/constant";

export const styles = StyleSheet.create({
    ExploreItemContainer:{
   marginHorizontal:CHANGE_BY_MOBILE_DPI(20)
    },
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },

    boppoHeaderContainer:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal:CHANGE_BY_MOBILE_DPI(20),
        marginVertical:CHANGE_BY_MOBILE_DPI(15),
        height:CHANGE_BY_MOBILE_DPI(40)
    },
    headerFontStyle:{
        fontSize:CHANGE_BY_MOBILE_DPI(18),
        color:Colors.BLACK,
        fontFamily:Fonts.INTER_BOLD,
        marginLeft:CHANGE_BY_MOBILE_DPI(10)
    },
    flexContainer:{
        flexDirection:'row',
        alignItems:"center"
    },
    searchContainer:{
        marginBottom:CHANGE_BY_MOBILE_DPI(10)
    },
    carousalContainer:{
        marginHorizontal:CHANGE_BY_MOBILE_DPI(17),
        marginBottom:CHANGE_BY_MOBILE_DPI(7)
    },
    backgroundColorStyle:{
        flex:1,
        backgroundColor:Colors.GRAY_LIGHT
    },
    topCategoryContainer:{
        
    },
    marginBottomStyle:{
        marginBottom:CHANGE_BY_MOBILE_DPI(100) 
    },
    offerBannerContainer:{
       
    },
    bestOfferContainer:{
    },
    bestSellingContainer:{
        backgroundColor:Colors.WHITE
    }
});

