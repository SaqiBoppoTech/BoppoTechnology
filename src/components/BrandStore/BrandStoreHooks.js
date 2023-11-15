import React from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {styles} from './BrandStoreStyles';
import {useNavigation} from '@react-navigation/native';
import {ScreenName, ScreenNames} from '../../global/index';

const BrandStoreHooks = () => {
  
  const navigation = useNavigation();
  const navigateToProductDetail = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };

  const renderItem = ({item}) => (
      <View style={styles.item}>
        <View style={styles.imageback}>
          <Image resizeMode={'contain'} source={item.image} style={styles.image} />
        </View>
      </View>
  );

  return {
    renderItem,
  };
};

export {BrandStoreHooks};
