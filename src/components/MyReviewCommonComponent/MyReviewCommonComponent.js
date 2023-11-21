import {Text, View, Image} from 'react-native';
import React from 'react';
import RatingComponent from '../RatingStar';
import {styles} from './MyReviewCommonStyle';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const MyReviewCommonComponent = ({
  productName,
  productImage,
  initialRating,
}) => {
  return (
    <View style={styles.rowWrapper}>
      <Image source={ productImage} style={styles.imageWrapper} />
      <View style={styles.nameView}>
        <Text style={styles.name}>{productName}</Text>
        <RatingComponent
          initialRating={initialRating}
          starheight={15}
          starwidth={15}
          width={CHANGE_BY_MOBILE_DPI(110)}
        />
        <Text style={styles.yourRatingText}>Your Rating</Text>
      </View>
    </View>
  );
};

export default MyReviewCommonComponent;
