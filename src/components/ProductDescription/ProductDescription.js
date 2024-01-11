import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import RatingComponent from '../RatingStar';
import BlackIncremnetButton from '../BlackIncrementButton/BlackIncrementButton';
import {styles} from './ProductDescriptionStyle';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';

const ProductDescription = ({description, price, stockCount}) => {
  return (
    <ScrollView style={styles.scrollStyle}>
      <View style={styles.mainView}>
        {stockCount == 0 && (
          <Text
            style={{
              ...styles.description,
              color: Colors.RED,
              fontFamily: Fonts.INTER_BOLD,
            }}>
            Product is out of Stock
          </Text>
        )}

        <Text style={styles.product}>{description}</Text>

        <View style={styles.priceview}>
          <Text style={styles.price}>₹ {price}</Text>
          <BlackIncremnetButton />
        </View>
        <View style={styles.ratingWrapper}>
          <RatingComponent initialRating={3} />
          <Text style={styles.review}>
            (<Text style={styles.reviewWithUnderLine}>1 customer review</Text>)
          </Text>
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
