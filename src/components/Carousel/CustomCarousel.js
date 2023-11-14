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

const CustomCarousel = ({externalIndicatorPositionContainer,defaultWidth,defaultHeigth,externalData}) => {
  const {carasolimagedata, DATA, setIsFocused, renderItem} =CarouselHooks();
  let defaultCarosalWidth = defaultWidth ||  Constant.SCREEN_WIDTH - 29
  let defaultCarouselHeigth = defaultHeigth || CHANGE_BY_MOBILE_DPI(222)
  let data = externalData || carasolimagedata
  return (
      <View>
          <View style={styles.indicatorConatiner}>
            <View style={[styles.indicatorPosition,externalIndicatorPositionContainer]}>
              <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                horizontal={true}
              />
            </View>
          </View>
          <Carousel
            loop
            width={defaultCarosalWidth}
            height={defaultCarouselHeigth}
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