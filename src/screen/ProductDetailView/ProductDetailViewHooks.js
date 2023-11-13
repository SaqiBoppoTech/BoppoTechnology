import React from 'react'
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./ProductDetailViewStyle"
import { Colors, Fonts } from "../../global"
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant'

const ProductDetailViewHooks = () => {
    const [selectedTab, setSelectTabs] = React.useState(0)
    const renderTopBar = ({ item, index }) => {
        const addIndexOntState = () => {
            setSelectTabs(index)
        }
        let bottomBar = selectedTab == index  && { backgroundColor:Colors.HALLOWINE_ORANGE}
        return (
            <TouchableOpacity  style={styles.barContainerStyle} onPress={addIndexOntState}>
                <Text style={[selectedTab == index ? styles.labelFontStyle:styles.labelBlurFontStyle]}>{item}</Text>
                <View style={{...styles.bottomBar,...bottomBar}}></View>
            </TouchableOpacity>
        )
    }
    return {
        renderTopBar
    }
}
export { ProductDetailViewHooks }