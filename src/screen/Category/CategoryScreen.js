import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import SearchField from '../../components/SearchField';
import {styles} from './CategoryStyle';
import {GlobalImage} from '../../global/staticImage';
import {CategoryHooks} from './CategoryHooks';
import CartSvg from '../../assets/svgs/CartSvg.svg';
import Arrow from '../../assets/svgs/ArrowCategorySvg.svg';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';

const CategoryScreen = () => {
  const {categoryData, navigateToCategoryDetail} = CategoryHooks();
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barColor={Colors.GRAY_LIGHT} />
      <View style={styles.topView}>
        <View style={styles.searchFiledWrapper}>
          <SearchField style={{  borderColor: Colors.BLACK,}}/>
        </View>
        <View style={styles.cartWrapper}>
          <CartSvg />
          <View style={styles.count}>
            <Text style={styles.countNumber}>4</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={categoryData}
        keyExtractor={(item, index) => item.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigateToCategoryDetail(item)}
            activeOpacity={1}>
            <View style={styles.productWrapper}>
              <Image source={item.image} style={styles.imageWrapper} />
              <View style={styles.titleWrapper}>
                <Text numberOfLines={1} style={styles.textWrapper}>
                  {item.name}
                </Text>
                <Text style={styles.productText}>{item.quantity} products</Text>
              </View>
              <View style={styles.arrowWrapper}>
                <Arrow />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryScreen;
