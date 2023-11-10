import { View } from "react-native"
import { styles } from "./OfferBannerImageStyle"
import { Image ,Text} from "react-native"
import { CHANGE_BY_MOBILE_DPI } from "../../global/constant"
import RightSvg from '../../assets/svgs/LeftRightSvg.svg'

const OfferBannerImageHooks = () => {
 const renderOfferItem = ({item,index}) => {
    return(
        <View style={styles.OfferCard}>
        <Image source={item.bannerImage} style={styles.bannerImageStyle}/>
        </View>
    )
 }
    return{
        renderOfferItem
    }
}
export {OfferBannerImageHooks}