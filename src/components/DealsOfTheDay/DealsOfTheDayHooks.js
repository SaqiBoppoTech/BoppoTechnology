import React from 'react';
import {TouchableOpacity, Image, Text,View} from 'react-native';
import {styles} from './DealsOfTheDayStyles';
import {useNavigation} from '@react-navigation/native';
import { ScreenNames} from '../../global/index';

const DealsOfTheDayhHooks = () => {
  const navigation = useNavigation();
  const data = [
    {
      key: '1',
      image: require('../../assets/images/EaringHeart.png'),
      name: 'Earrings',
      price: 'Upto 20% OFF ',
    },
    {
      key: '2',
      image: require('../../assets/images/EngagementRing.png'),
      name: 'Engagement Ring',
      price: '10-20% OFF ',
    },
    {
      key: '3',
      image: require('../../assets/images/Earings.png'),
      name: 'Earrings',
      price: 'Upto 20% OFF ',
    },
    {
      key: '4',
      image: require('../../assets/images/Pendant.png'),
      name: 'Pendant',
      price: 'Upto 20% OFF ',
    },
    // Add more items as needed
  ];

  const navigateToProductDetail = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.container} onPress={navigateToProductDetail}>
      <View style={styles.sizeContainer}> 
      <View style={styles.imageMainContainer}>
      <Image source={item.image} style={styles.imageStyle} />
      </View>
      <Text style={styles.titleFontStyle} numberOfLines={1}>{item.name}</Text>
      <Text style={styles.priceFontSytle}>From ${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return {
    data,
    renderItem,
  };
};

export {DealsOfTheDayhHooks};
