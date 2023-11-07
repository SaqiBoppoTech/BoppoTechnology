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

const CarouselScreen = () => {
  const {data, width, DATA, setIsFocused, isFocused, renderItem} =
    CarouselHooks();

  return (
    <View>
      <View style={styles.main}>
        <View style={{height: 250, width: width}}>
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
            width={width}
            height={250}
            autoPlay={true}
            data={data}
            scrollAnimationDuration={1000}
            onSnapToItem={index => setIsFocused(index)}
            renderItem={({item, index}) => (
              <View style={styles.carousel}>
                <Image source={item.image} style={styles.imageStyle} />
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default CarouselScreen;
