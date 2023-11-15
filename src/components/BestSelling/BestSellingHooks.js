const {TouchableOpacity, Image, View, Text} = require('react-native');
import {styles} from './BestSellingStyles';
import {useNavigation} from '@react-navigation/native';
import { ScreenNames} from '../../global/index';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import PlusSvg from '../../assets/svgs/PlusSvg.svg'
import Card from '../Card/Card';
const ExploreItemHooks = () => {
  const navigation = useNavigation();
  const navigateToProductDetail = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };

  const renderItem = ({ item, index }) => {
    return (
      <Card
        image={item.image}
        name={ item.name}
        price={ item.price}
        discountPrice={item.discountPrice}
        percent={item.percent}
        plusSvgVisibility={true}
        onPress={navigateToProductDetail}
        categoryCardContainer={styles.categoryCardContainer}

      />
    )
  }

  return {
    renderItem,
  };
};

export {ExploreItemHooks};
