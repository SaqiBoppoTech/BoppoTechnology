import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarSvg from '../assets/svgs/StarSvg.svg';
import SelectStarSvg from '../assets/svgs/SelectStarSvg.svg';

const RatingComponent = ({initialRating = 0, onRatingChange}) => {
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
        <TouchableWithoutFeedback key={i} onPress={() => handleRatingPress(i)}>
          {i <= rating ? <SelectStarSvg /> : <StarSvg />}
        </TouchableWithoutFeedback>,
      );
    }
    return stars;
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {renderStars()}
    </View>
  );
};

export default RatingComponent;
