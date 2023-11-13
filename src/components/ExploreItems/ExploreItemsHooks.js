const {
  TouchableOpacity,
  Image,
  View,
  Text,
  Modal,
  Animated,
  Dimensions,
} = require('react-native');
import {styles} from './ExploreItemsStyles';
import {useNavigation} from '@react-navigation/native';
import { ScreenNames} from '../../global/index';
import Card from '../Card/Card';
import { STATIC_DATA } from '../../global/staticdata';
const ExploreItemHooks = () => {
  const navigation = useNavigation();
  const navigateToProductDetail = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };

  
  const renderItem = ({ item, index }) => {
    return (
      <Card
        index={index}
        image={item.image}
        name={ item.name}
        price={ item.price}
        discountPrice={item.discountPrice}
        percent={item.percent}
        plusSvgVisibility={true}
        onPress={navigateToProductDetail}
      />
    )
  }
  // const renderItem = ({item,index}) => (
  //   <TouchableOpacity style={styles.exploreItemCardContainer} onPress={navigateToProductDetail}>
  //     <View style={styles.imageContainer}>
  //       <Image resizeMode='contain' source={item.image} style={styles.image} />
  //     </View>
  //     <View style={styles.paddingConmtainer}>
  //     <Text style={styles.titleFontStyle} numberOfLines={3}>{item.name}</Text>
  //     <View style={styles.priceContainer}>
  //       <Text style={styles.priceFontStyle}>${item.price}</Text>
  //       <Text style={styles.discountFontStyle}>${item.discountPrice}</Text>
  //       <Text style={styles.percentageFontStyle}>{item.percent}% OFF </Text>
  //     </View>
  //     </View>
  //     <View style={styles.positionContainer}>
  //       <TouchableOpacity>
  //       <PlusSvg heigth={CHANGE_BY_MOBILE_DPI(22)} width={CHANGE_BY_MOBILE_DPI(22)}/>
  //       </TouchableOpacity>
  //     </View>
  //   </TouchableOpacity>
  // );

  return {
    renderItem,
  };
};

export {ExploreItemHooks};
