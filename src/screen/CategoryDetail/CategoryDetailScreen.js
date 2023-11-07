import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CircleIncrementButton from '../../components/Button/CircleIncrementButton';
import {styles} from './CategoryDetailStyle';
import RatingComponent from '../../components/RatingStar';
import SearchAppBar from '../../components/AppBar/SearchAppBar';

const CategoryDetailScreen = ({route, navigation}) => {
  const {name} = route.params;

  const categoryData = [
    {
      key: '1',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '500',
      discountPrice: '18.44',
      percent: '20',
      benefit: 'Free Delivery Today',
    },
    {
      key: '2',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: ' Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '600',
      discountPrice: '18.44',
      percent: '20',
      benefit: 'Free Delivery Today',
    },
    {
      key: '3',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
      benefit: 'Free Delivery Today',
    },
    {
      key: '4',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
      benefit: 'Free Delivery Today',
    },
    {
      key: '5',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
      benefit: 'Free Delivery Today',
    },
    {
      key: '6',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
      benefit: 'Free Delivery Today',
    },
    {
      key: '7',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
      benefit: 'Free Delivery Today',
    },
    {
      key: '8',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
      benefit: 'Free Delivery Today',
    },
  ];

  const renderItem = ({item}) => (
    <>
      <View style={styles.item}>
        <View style={styles.incrementbtn}>
          <CircleIncrementButton />
        </View>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate('Product_Detail_View_Screen')}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontSize: 13,
            fontWeight: 500,
            marginTop: 15,
            marginHorizontal: 3,
          }}
          numberOfLines={2}
          ellipsizeMode="tail">
          {item.name}
        </Text>

        <View style={styles.priceContainer}>
          <Text style={{color: 'black', fontSize: 14, fontWeight: 600}}>
            ${item.price}
          </Text>
          <Text
            style={{
              color: '#888888',
              fontSize: 13,
              fontWeight: '500',
              textDecorationLine: 'line-through',
            }}>
            ${item.discountPrice}
          </Text>

          <Text
            style={{
              color: 'black',
              fontSize: 13,
              fontWeight: 700,
              color: '#E50404',
            }}>
            {item.percent}% OFF
          </Text>
        </View>
        <View style={{marginHorizontal: 3}}>
          <RatingComponent />
        </View>

        <Text
          style={{
            color: 'black',
            fontSize: 13,
            fontWeight: '400',
            marginTop: 3,
            marginHorizontal: 3,
          }}>
          {item.benefit}
        </Text>
      </View>
    </>
  );
  const redirect = useNavigation();
  const handleGoBack = () => {
    redirect.goBack();
  };

  return (
    <View
      style={{
        backgroundColor: '#EFEFEF',
        height: '100%',
      }}>
      <SearchAppBar
        title={name}
        showIcon={true}
        showFilter={true}
        onFilterPress={() => {
          navigation.navigate('CategoryFIlter');
        }}
        onPress={() => {
          handleGoBack();
        }}
      />
      <FlatList
        data={categoryData}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        numColumns={2}
      />
    </View>
  );
};

export default CategoryDetailScreen;
