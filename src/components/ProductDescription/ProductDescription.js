import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import RatingComponent from '../RatingStar';
import BlackIncremnetButton from '../Button/BlackIncrementButton';
import {styles} from './ProductDescriptionStyle';

const ProductDescription = () => {
  return (
    <ScrollView style={styles.scrollStyle}>
      <View style={styles.mainView}>
        <Text style={styles.product}>
          Dove Derma Spa Summer Revived Medium 15g, lorem ipaum{' '}
        </Text>

        <View style={styles.priceview}>
          <Text style={styles.price}>£ 2.70</Text>
          <BlackIncremnetButton />
        </View>

        <View style={styles.ratingWrapper}>
          <RatingComponent initialRating={3} />
          <Text style={styles.review}> (1 customer review)</Text>
        </View>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt
          amet egestas tempor facilisi. Venenatis lorem mattis faucibus netus
          sit gravida odio tortor nibh. Eget eleifend odio mauris quam nunc
          enim. Eget vestibulum, id vivamus fermentum sit odio gravida dolor.
          Facilisi est accumsan, urna vel sed mauris morbi nulla. Est odio sit
          ipsum molestie nulla bibendum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. In tincidunt amet egestas tempor facilisi. Venenatis
          lorem mattis faucibus netus sit gravida odio tortor nibh. Eget
          eleifend odio mauris quam nunc enim. Eget vestibulum, id vivamus
          fermentum sit odio gravida dolor. Facilisi est accumsan, urna vel sed
          mauris morbi nulla. Est odio sit ipsum molestie nulla bibendum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet
          egestas tempor facilisi. Venenatis lorem mattis faucibus netus sit
          gravida odio tortor nibh. Eget eleifend odio mauris quam nunc enim.
          Eget vestibulum, id vivamus fermentum sit odio gravida dolor. Facilisi
          est accumsan, urna vel sed mauris morbi nulla. Est odio sit ipsum
          molestie nulla bibendum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. In tincidunt amet egestas tempor facilisi. Venenatis
          lorem mattis faucibus netus sit gravida odio tortor nibh. Eget
          eleifend odio mauris quam nunc enim. Eget vestibulum, id vivamus
          fermentum sit odio gravida dolor. Facilisi est accumsan, urna vel sed
          mauris morbi nulla. Est odio sit ipsum molestie nulla bibendum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet
          egestas tempor facilisi. Venenatis lorem mattis faucibus netus sit
          gravida odio tortor nibh. Eget eleifend odio mauris quam nunc enim.
          Eget vestibulum, id vivamus fermentum sit odio gravida dolor. Facilisi
          est accumsan, urna vel sed mauris morbi nulla. Est odio sit ipsum
          molestie nulla bibendum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. In tincidunt amet egestas tempor facilisi. Venenatis
          lorem mattis faucibus netus sit gravida odio tortor nibh. Eget
          eleifend odio mauris quam nunc enim. Eget vestibulum, id vivamus
          fermentum sit odio gravida dolor. Facilisi est accumsan, urna vel sed
          mauris morbi nulla. Est odio sit ipsum molestie nulla bibendum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet
          egestas tempor facilisi. Venenatis lorem mattis faucibus netus sit
          gravida odio tortor nibh. Eget eleifend odio mauris quam nunc enim.
          Eget vestibulum, id vivamus fermentum sit odio gravida dolor. Facilisi
          est accumsan, urna vel sed mauris morbi nulla. Est odio sit ipsum
          molestie nulla bibendum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. In tincidunt amet egestas tempor facilisi. Venenatis
          lorem mattis faucibus netus sit gravida odio tortor nibh. Eget
          eleifend odio mauris quam nunc enim. Eget vestibulum, id vivamus
          fermentum sit odio gravida dolor. Facilisi est accumsan, urna vel sed
          mauris morbi nulla. Est odio sit ipsum molestie nulla bibendum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet
          egestas tempor facilisi. Venenatis lorem mattis faucibus netus sit
          gravida odio tortor nibh. Eget eleifend odio mauris quam nunc enim.
          Eget vestibulum, id vivamus fermentum sit odio gravida dolor. Facilisi
          est accumsan, urna vel sed mauris morbi nulla. Est odio sit ipsum
          molestie nulla bibendum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. In tincidunt amet egestas tempor facilisi. Venenatis
          lorem mattis faucibus netus sit gravida odio tortor nibh. Eget
          eleifend odio mauris quam nunc enim. Eget vestibulum, id vivamus
          fermentum sit odio gravida dolor. Facilisi est accumsan, urna vel sed
          mauris morbi nulla. Est odio sit ipsum molestie nulla bibendum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet
          egestas tempor facilisi. Venenatis lorem mattis faucibus netus sit
          gravida odio tortor nibh. Eget eleifend odio mauris quam nunc enim.
          Eget vestibulum, id vivamus fermentum sit odio gravida dolor. Facilisi
          est accumsan, urna vel sed mauris morbi nulla. Est odio sit ipsum
          molestie nulla bibendum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. In tincidunt amet egestas tempor facilisi. Venenatis
          lorem mattis faucibus netus sit gravida odio tortor nibh. Eget
          eleifend odio mauris quam nunc enim. Eget vestibulum, id vivamus
          fermentum sit odio gravida dolor. Facilisi est accumsan, urna vel sed
          mauris morbi nulla. Est odio sit ipsum molestie nulla bibendum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet
          egestas tempor facilisi. Venenatis lorem mattis faucibus netus sit
          gravida odio tortor nibh. Eget eleifend odio mauris quam nunc enim.
          Eget vestibulum, id vivamus fermentum sit odio gravida dolor. Facilisi
          est accumsan, urna vel sed mauris morbi nulla. Est odio sit ipsum
          molestie nulla bibendum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. In tincidunt amet egestas tempor facilisi. Venenatis
          lorem mattis faucibus netus sit gravida odio tortor nibh. Eget
          eleifend odio mauris quam nunc enim. Eget vestibulum, id vivamus
          fermentum sit odio gravida dolor. Facilisi est accumsan, urna vel sed
          mauris morbi nulla. Est odio sit ipsum molestie nulla bibendum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet
          egestas tempor facilisi. Venenatis lorem mattis faucibus netus sit
          gravida odio tortor nibh. Eget eleifend odio mauris quam nunc enim.
          Eget vestibulum, id vivamus fermentum sit odio gravida dolor. Facilisi
          est accumsan, urna vel sed mauris morbi nulla. Est odio sit ipsum
          molestie nulla bibendum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. In tincidunt amet egestas tempor facilisi. Venenatis
          lorem mattis faucibus netus sit gravida odio tortor nibh. Eget
          eleifend odio mauris quam nunc enim. Eget vestibulum, id vivamus
          fermentum sit odio gravida dolor. Facilisi est accumsan, urna vel sed
          mauris morbi nulla. Est odio sit ipsum molestie nulla bibendum.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProductDescription;
