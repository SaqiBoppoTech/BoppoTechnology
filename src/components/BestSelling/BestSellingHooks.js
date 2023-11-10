const {TouchableOpacity, Image, View, Text} = require('react-native');
import {styles} from './BestSellingStyles';
import {useNavigation} from '@react-navigation/native';
import { ScreenNames} from '../../global/index';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import PlusSvg from '../../assets/svgs/PlusSvg.svg'
const ExploreItemHooks = () => {
  const navigation = useNavigation();
  const navigateToProductDetail = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };

  const renderItem = ({item,index}) => (
    <TouchableOpacity style={styles.exploreItemCardContainer} onPress={navigateToProductDetail}>
      <View style={styles.imageContainer}>
        <Image resizeMode='contain' source={item.image} style={styles.image} />
      </View>
      <View style={styles.paddingConmtainer}>
      <Text style={styles.titleFontStyle} numberOfLines={3}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.priceFontStyle}>${item.price}</Text>
        <Text style={styles.discountFontStyle}>${item.discountPrice}</Text>
        <Text style={styles.percentageFontStyle}>{item.percent}% OFF </Text>
      </View>
      </View>
      <View style={styles.positionContainer}>
        <TouchableOpacity>
        <PlusSvg heigth={CHANGE_BY_MOBILE_DPI(22)} width={CHANGE_BY_MOBILE_DPI(22)}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return {
    renderItem,
  };
};

export {ExploreItemHooks};
