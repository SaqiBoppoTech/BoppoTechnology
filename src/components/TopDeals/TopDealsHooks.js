import React from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './TopDealsStyles';
import { useNavigation } from '@react-navigation/native';
import { ScreenName, ScreenNames } from '../../global/index';
import OfferSvg from '../../assets/svgs/OfferSvg.svg'
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import BoldSvg from '../../assets/svgs/BoldSvg.svg'
const TopDealsHooks = () => {

  const navigation = useNavigation();
  const navigateToProductDetail = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };

  const renderItem = ({ item }) => (
    <View style={styles.topDealsContainer}>
        <View style={styles.positionContainer}>
            <View style={styles.offerSizeContainer}>
              <OfferSvg height={CHANGE_BY_MOBILE_DPI(35)} width={CHANGE_BY_MOBILE_DPI(120)} />
              <View style={styles.positionOffer}>
                <BoldSvg height={CHANGE_BY_MOBILE_DPI(15)} width={CHANGE_BY_MOBILE_DPI(15)}/>
            <Text style={styles.offerFontStyle}>GET 50% OFF</Text>
              </View>
            </View>
        </View>
      <TouchableOpacity style={styles.imageback} onPress={navigateToProductDetail}>
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.fontContainer}>
        <Text style={styles.titleFontStyle}>
          {item.name}
        </Text>
        <Text style={styles.categoryFontStyle}>
          {item.category}
        </Text>
      </View>

    </View>
  );
  return {
    renderItem,
  };
};

export { TopDealsHooks };
