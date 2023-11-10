import { View } from "react-native"
import { styles } from "./OfferBannerStyle"
import { Image ,Text} from "react-native"
import { CHANGE_BY_MOBILE_DPI } from "../../global/constant"
import RightSvg from '../../assets/svgs/LeftRightSvg.svg'

const OfferHooks = () => {
 const renderOfferItem = ({item,index}) => {
    return(
        <View style={styles.OfferCard}>
        <Image source={item.bannerImage} style={styles.bannerImageStyle}/>
        <View style={styles.flexDirectionContainer}>
            <View style={styles.flexContainer}>
            <Text style={styles.bannerFontStyle} numberOfLines={1}>{item?.bannerName}</Text>
            </View>
            <View style={styles.transformContainer}>
                <RightSvg height={CHANGE_BY_MOBILE_DPI(15)} width={CHANGE_BY_MOBILE_DPI(15)}/>
            </View>
        </View>
        </View>
    )
 }
    return{
        renderOfferItem
    }
}
export {OfferHooks}