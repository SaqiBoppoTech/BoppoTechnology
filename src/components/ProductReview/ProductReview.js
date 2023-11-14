import {
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';

import { styles } from './ProductReviewStyle';
import { STATIC_DATA } from '../../global/staticdata';
import { ProductReviewHooks } from './ProductReviewHooks';

const ProductReview = () => {
  const { renderItem, ratingbar } = ProductReviewHooks()
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.marginHorizontalContainer}>
        <Text style={styles.header}>Customer Review</Text>
        <View style={styles.reviewWrapper}>
          <View style={styles.reviewcontainer}>
            <Text style={styles.rating}>5.0</Text>
          </View>
          <Text style={styles.ratingText}>based on 10 reviews</Text>
        </View>
        <FlatList
          data={STATIC_DATA.ratingdata}
          horizontal={false}
          renderItem={ratingbar}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          />
          <View>
        <FlatList
          data={STATIC_DATA.ratingAndReviewData}
          horizontal={false}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          showsVerticalScrollIndicator={false}
          />
          </View>
      </ScrollView>
    </View>
  );
};

export default ProductReview;
