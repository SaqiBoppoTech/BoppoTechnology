import React, {Component, useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {FlatList} from 'react-native-gesture-handler';
import {styles} from './CarouselStyle';
import {CarouselHooks} from './CarouselHooks';
import { Constant } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

const CustomCarousel = () => {
  const {data, width, DATA, setIsFocused, renderItem} =CarouselHooks();
  return (
      <View style={styles.main}>
          <View style={styles.indicatorConatiner}>
            <View style={styles.indicatorPosition}>
              <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                horizontal={true}
              />
            </View>
          </View>
          <Carousel
            loop
            width={Constant.SCREEN_WIDTH - 29}
            height={CHANGE_BY_MOBILE_DPI(222)}
            autoPlay={true}
            data={data}
            scrollAnimationDuration={1000}
            onSnapToItem={index => setIsFocused(index)}
            renderItem={({item, index}) => (
              <View style={styles.carousel}>
                <Image resizeMode={'contain'} source={item.image} style={styles.imageStyle} />
              </View>
            )}
          />
      </View>
  );
};

export default CustomCarousel;