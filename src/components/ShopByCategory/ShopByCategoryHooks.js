import React from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './ShopByCategoryStyles';
import { useNavigation } from '@react-navigation/native';
import { ScreenName, ScreenNames } from '../../global/index';
import OfferSvg from '../../assets/svgs/OfferSvg.svg'
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import BoldSvg from '../../assets/svgs/BoldSvg.svg'
const ShopByCategoryHooks = () => {

  const navigation = useNavigation();
  const navigateToProductDetail = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };

  const renderItem = ({ item }) => (
    <View style={styles.topDealsContainer}>
      <TouchableOpacity style={styles.imageback} onPress={navigateToProductDetail}>
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.fontContainer}>
        <Text style={styles.titleFontStyle}>
          {item.name}
        </Text>
        <Text style={styles.categoryFontStyle}>
          {item.offer}
        </Text>
      </View>
    </View>
  );
  return {
    renderItem,
  };
};

export { ShopByCategoryHooks };
