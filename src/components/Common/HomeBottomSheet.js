const {
  TouchableOpacity,
  Image,
  View,
  Text,
  Modal,
  Animated,
  Dimensions,
} = require('react-native');
import React, {useRef, useState} from 'react';
import BlackIncremnetButton from '../Button/BlackIncrementButton';
import AddToCartBottomButton from '../Button/AddToCartBottomButton';

const HomeBottomSheet = () => {
  return (
    <View style={{backgroundColor: '#fff', height: 190, borderRadius: 8}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
          }}
          style={{backgroundColor: '#fff', height: 120, width: 80}}
        />
        <View style={{backgroundColor: '#fff'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              fontWeight: 500,
              marginTop: 15,
            }}>
            Nescafe gold Cappuccino Coffee..
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
              width: 140,
            }}>
            <Text style={{color: 'black', fontSize: 14, fontWeight: 600}}>
              £2.00
            </Text>
            <Text
              style={{
                color: '#888888',
                fontSize: 12,
                fontWeight: 400,
                textDecorationLine: 'line-through',
              }}>
              £4.00
            </Text>

            <Text
              style={{
                color: 'black',
                fontSize: 12,
                fontWeight: 700,
                color: '#E50404',
              }}>
              50% OFF
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 30,
            }}>
            <BlackIncremnetButton />
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: 500,
                textAlign: 'center',
              }}>
              Select Qty
            </Text>
          </View>
        </View>
      </View>
      <View style={{}}>
        <AddToCartBottomButton
        // onAddToCartPress={onAddToCartPress}
        // onBuyNowPress={onBuyNowPress}
        />
      </View>
    </View>
  );
};

export default HomeBottomSheet;
