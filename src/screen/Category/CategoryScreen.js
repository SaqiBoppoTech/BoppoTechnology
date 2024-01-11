import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SearchField from '../../components/SearchField';
import {styles} from './CategoryStyle';
import {CategoryHooks} from './CategoryHooks';
import CartSvg from '../../assets/svgs/CartSvg.svg';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';
import Arrow from '../../assets/svgs/ArrowCategorySvg.svg';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const CategoryScreen = () => {
  const {
    navigateToCartPage,
    categoriesList,
    navigateToCategoryDetail,
    appData,
  } = CategoryHooks();

  const renderCategory = ({item, index}) => (
    <TouchableOpacity
      onPress={() => navigateToCategoryDetail(item, index)}
      activeOpacity={1}>
      <View style={styles.productWrapper}>
        {item.collection_image_url != '/url' ? (
          <Image
            source={{
              uri: `https://cdn-stage.boppogo.com/${item.collection_image_url}`,
            }}
            style={styles.imageWrapper}
          />
        ) : (
          <Image
            resizeMode="contain"
            source={require('../../assets/images/Logo.png')}
            style={{
              ...styles.imageWrapper,
              height: CHANGE_BY_MOBILE_DPI(50),
              alignSelf: 'center',
            }}
          />
        )}
        <View style={styles.titleWrapper}>
          <Text numberOfLines={1} style={styles.textWrapper}>
            {item.name}
          </Text>
          <Text style={styles.productText}>{item.quantity} products</Text>
        </View>
        <View style={styles.arrowWrapper}>
          <Arrow
            height={CHANGE_BY_MOBILE_DPI(12)}
            width={CHANGE_BY_MOBILE_DPI(9)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barColor={Colors.GRAY_LIGHT} />
      <View style={styles.searchFieldWrapper}>
        <SearchField externalStyleWidth={styles.externalStyleWidth} />
        <TouchableOpacity onPress={navigateToCartPage}>
          <View style={styles.cartWrapper}>
            <CartSvg
              height={CHANGE_BY_MOBILE_DPI(23)}
              width={CHANGE_BY_MOBILE_DPI(23)}
            />
            <View style={styles.count}>
              <Text style={styles.countNumber}>4</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categoriesList}
        keyExtractor={(item, index) => item.toString()}
        renderItem={renderCategory}
      />
    </View>
  );
};

export default CategoryScreen;
