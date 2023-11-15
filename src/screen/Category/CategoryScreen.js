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
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

const CategoryScreen = () => {
  const {categoryData,renderCategory} = CategoryHooks();
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
        renderItem={renderCategory}
      />
    </View>
  );
};

export default CategoryScreen;
