import {
    Text,
    View,
    Image,
} from 'react-native';
import { styles } from './ProductReviewStyle';
import RatingComponent from '../RatingStar';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import StarSvg from '../../assets/svgs/FillStarSvg.svg'
import { GlobalImage } from '../../global/staticImage';
import { Fonts } from '../../global';
const ProductReviewHooks = () => {

    const renderItem = ({ item }) => (
        <View style={styles.viewWrapper}>
            <View style={styles.mainView}>
                <View style={styles.container}>
                    <Image source={item.image} style={styles.circleImage} />
                </View>
                <View>
                    <View style={styles.ratingWrapper}>
                        <Text style={styles.name}>{item.name}</Text>
                        <View style={styles.flexDirectionStarContainer}>
                            <StarSvg height={CHANGE_BY_MOBILE_DPI(17)} width={CHANGE_BY_MOBILE_DPI(17)} style={styles.marginRightContainer} />
                            <StarSvg height={CHANGE_BY_MOBILE_DPI(17)} width={CHANGE_BY_MOBILE_DPI(17)} style={styles.marginRightContainer} />
                            <StarSvg height={CHANGE_BY_MOBILE_DPI(17)} width={CHANGE_BY_MOBILE_DPI(17)} style={styles.marginRightContainer} />
                            <StarSvg height={CHANGE_BY_MOBILE_DPI(17)} width={CHANGE_BY_MOBILE_DPI(17)} style={styles.marginRightContainer} />
                            <StarSvg height={CHANGE_BY_MOBILE_DPI(17)} width={CHANGE_BY_MOBILE_DPI(17)} style={styles.marginRightContainer} />
                        </View>
                    </View>
                    <Text style={styles.namedate}> Reviewed on {item.date}</Text>
                </View>
            </View>
            <View style={styles.flexWrapContainer}>
                <Image
                    source={GlobalImage.bannerOfferImage}
                    style={styles.squareImage}
                />
                <Image
                    source={GlobalImage.bannerOfferImage}
                    style={styles.squareImage}
                />
                <View style={styles.flexContainer}>
                    <Text style={styles.reviewDes}>
                       <Text style={{...styles.reviewDes,fontFamily:Fonts.MANROPE_BOLD}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi.</Text> 
                        Venenatis lorem mattis faucibus netus sit gravida odio tortor nibh. Eget eleifend odio mauris quam nunc enim. Eget vestibulum.
                    </Text>
                </View>
            </View>

        </View>
    );


    const ratingbar = ({ item }) => (
        <View style={styles.ratingMainView}>
            <Text style={styles.rateWrapper}>{item.rate}</Text>
            <StarSvg height={CHANGE_BY_MOBILE_DPI(17)} width={CHANGE_BY_MOBILE_DPI(17)} style={styles.starMarginHorizontalContainer} />
            <View style={styles.starBarOuterContainer}>
                <View style={styles.starBarInnerContainer}></View>
            </View>
            <View style={styles.sizeContainer}>
                <Text style={styles.totalRating}>
                    {item.totalRating}
                </Text>
            </View>
        </View>
    );
    return {
        renderItem, ratingbar
    }
}
export { ProductReviewHooks }