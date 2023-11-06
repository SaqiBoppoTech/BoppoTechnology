import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
          <Icon
            name={i <= rating ? 'star' : 'star-o'} // Use solid or outline star icon based on the rating
            size={16}
            color="#FDBC15" // You can set the color for rated stars
          />
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
