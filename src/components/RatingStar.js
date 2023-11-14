import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Pressable} from 'react-native';
import StarSvg from '../assets/svgs/StarSvg.svg';
import SelectStarSvg from '../assets/svgs/SelectStarSvg.svg';
import { CHANGE_BY_MOBILE_DPI } from '../global/constant';
import { styles } from './Carousel/CarouselStyle';

const RatingComponent = ({
  initialRating = 0,
  onRatingChange,
  starheight,
  starwidth,
  width,
}) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingPress = selectedRating => {
    if (onRatingChange) {
      onRatingChange(selectedRating);
    }
    setRating(selectedRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Pressable style={styles.marginRightContainer} key={i} onPress={() => handleRatingPress(i)}>
          {i <= rating ? (
            <SelectStarSvg
              width={starwidth || '12'}
              height={starheight || '12'}
            />
          ) : (
            <StarSvg width={starwidth || '12'} height={starheight || '12'} />
          )}
        </Pressable>,
      );
    }
    return stars;
  };

  return (
    <View
      style={styles.ratingContainer}>
      {renderStars()}
    </View>
  );
};

export default RatingComponent;
