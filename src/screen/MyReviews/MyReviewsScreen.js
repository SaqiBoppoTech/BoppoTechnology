import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyReviewCommonComponent from '../../components/MyReviewCommonComponent/MyReviewCommonComponent';
import {styles} from './MyReviewsStyle';
import Remove from '../../assets/svgs/Remove.svg';
import MyReviewHooks from './MyReviewsHooks';

const MyReviewsScreen = () => {
  const {handleGoBack, onRemovePress, navigateToProductDetail} =
    MyReviewHooks();
  const data = [
    {
      id: 1,
      name: 'Kinder Happy Hippo Cocoa Cream 5 Bar 105g',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      rate: 4,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. In tincidunt amet egestas tempor facilis...',
    },

    {
      id: 2,
      name: 'Kinder Happy Hippo Cocoa Cream 5 Bar 105g',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      rate: 5,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. In tincidunt amet egestas tempor facilis...',
    },

    {
      id: 3,
      name: 'Kinder Happy Hippo Cocoa Cream 5 Bar 105g',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      rate: 2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. In tincidunt amet egestas tempor facilis...',
    },

    {
      id: 4,
      name: 'Kinder Happy Hippo Cocoa Cream 5 Bar 105g',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      rate: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. In tincidunt amet egestas tempor facilis...',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.container}>
      <MyReviewCommonComponent
        productImage={item.image}
        initialRating={item.rate}
        productName={item.name}
      />
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.line}></View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.editWrapper}
          onPress={navigateToProductDetail}>
          <Text style={styles.optionText}>View</Text>
        </TouchableOpacity>
        <View style={styles.verticalLine}></View>
        <TouchableOpacity style={styles.removeWrapper} onPress={onRemovePress}>
          <Remove width="15" height="15" />
          <Text style={styles.optionText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <SearchAppBar title={'My Reviews'} onPress={handleGoBack} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MyReviewsScreen;
