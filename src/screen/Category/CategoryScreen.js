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

const CategoryScreen = ({navigation}) => {
  const {categoryImg} = GlobalImage;
  const categoryData = [
    {
      name: 'Personal Care',
      quantity: '160',
      image: categoryImg,
    },
    {
      name: 'Grocery',
      quantity: '160',
      image: categoryImg,
    },
    {
      name: 'Beauty Products',
      quantity: '160',
      image: categoryImg,
    },
    {
      name: 'Health Care',
      quantity: '160',
      image: categoryImg,
    },
    {
      name: 'Books & Toys',
      quantity: '160',
      image: categoryImg,
    },
    {
      name: 'Baby Products',
      quantity: '160',
      image: categoryImg,
    },
    {
      name: 'Beauty Products',
      quantity: '160',
      image: categoryImg,
    },
    {
      name: 'Grocery',
      quantity: '160',
      image: categoryImg,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.searchFiledWrapper}>
          <SearchField />
        </View>
        <View>
          <Icons name="cart-outline" size={30} color="#000" />
        </View>
      </View>

      <FlatList
        data={categoryData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CATEGORY_DETAIL_SCREEN', {
                name: item.name,
              });
            }}
            activeOpacity={0.7}>
            <View style={styles.productWrapper}>
              <Image source={item.image} style={styles.imageWrapper} />
              <View style={styles.titleWrapper}>
                <Text
                  style={{...styles.textWrapper, color: '#000', fontSize: 20}}>
                  {item.name}
                </Text>
                <Text
                  style={{...styles.textWrapper, color: 'grey', fontSize: 18}}>
                  {item.quantity} products
                </Text>
              </View>

              <View style={styles.arrowWrapper}>
                <Icon name="angle-right" size={30} color="#000" />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryScreen;
