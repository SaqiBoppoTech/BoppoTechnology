import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import RatingComponent from '../RatingStar';
import {styles} from './ProductReviewStyle';

const ProductReviewScreen = () => {
  const data = [
    {
      key: 1,
      name: 'Ash Ketchum',
      date: '4 Sep 2023',
      rating: 4,
      image: require('../../images/carasolimage.png'),
    },
    {
      key: 2,
      name: 'Ash Ketchum',
      date: '4 Sep 2023',
      rating: 4,
      image: require('../../images/carasolimage.png'),
    },
    {
      key: 3,
      name: 'Ash Ketchum',
      date: '4 Sep 2023',
      rating: 4,
      image: require('../../images/carasolimage.png'),
    },
    {
      key: 4,
      name: 'Ash Ketchum',
      date: '4 Sep 2023',
      rating: 4,
      image: require('../../images/carasolimage.png'),
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.viewWrapper}>
      <View style={styles.mainView}>
        <View style={styles.container}>
          <Image source={item.image} style={styles.circleImage} />
        </View>
        <View>
          <View style={styles.ratingWrapper}>
            <Text style={styles.name}> {item.name}</Text>
            <RatingComponent initialRating={item.rating} />
          </View>
          <Text style={styles.namedate}> Reviewed on {item.date}</Text>
        </View>
      </View>
      <Image
        source={require('../../images/coffee.png')}
        style={styles.squareImage}
      />
      <View style={{width: '90%'}}>
        <Text style={styles.reviewDes}>
          Venenatis lorem mattis faucibus netus sit gravida odio tortor nibh.
          Eget eleifend odio mauris quam nunc enim. Eget vestibulum.Venenatis
          lorem mattis faucibus netus sit gravida odio tortor nibh. Eget
          eleifend odio mauris quam nunc enim. Eget vestibulum.
        </Text>
      </View>
    </View>
  );

  const ratingdata = [
    {
      totalRating: '10',
      borderColor: '#F1C40F',
      rate: '5',
    },
    {
      totalRating: '0',
      borderColor: '#C4C4C4',
      rate: '4',
    },
    {
      totalRating: '0',
      borderColor: '#C4C4C4',
      rate: '3',
    },
    {
      totalRating: '0',
      borderColor: '#C4C4C4',
      rate: '2',
    },
    {
      totalRating: '0',
      borderColor: '#C4C4C4',
      rate: '1',
    },
  ];

  const ratingbar = ({item}) => (
    <View style={styles.ratingMainView}>
      <Text style={styles.rateWrapper}>{item.rate}</Text>
      <Image
        source={require('../../images/rate.png')}
        style={styles.rateImageWrapper}
      />
      <View
        style={styles.totalRatingWrapper}
      />
      <Text
        style={styles.totalRating}>
        {item.totalRating}
      </Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.mainView2}>
        <Text style={styles.header}> Customer Review</Text>
        <View
          style={styles.reviewWrapper}>
          <View style={styles.reviewcontainer}>
            <Text style={styles.rating}> 5.0</Text>
          </View>
          <Text style={styles.ratingText}>based on 10 reviews</Text>
        </View>

        <FlatList
          data={ratingdata}
          horizontal={false}
          renderItem={ratingbar}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />

        <FlatList
          data={data}
          horizontal={false}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default ProductReviewScreen;
