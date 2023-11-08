import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import RatingComponent from '../../components/RatingStar';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';

const MyQuestionAnswerScreen = () => {
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
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Image
          source={{uri: item.image}}
          style={{
            height: 130,
            width: 130,
            objectFit: 'cover',
            alignContent: 'center',
            marginRight: 10,
          }}
        />
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.name}>{item.name}</Text>
          <RatingComponent initialRating={item.rate} />
          <Text style={styles.yourrating}>Your Rating</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', paddingHorizontal: 16}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: '#151515',
            paddingRight: 10,
          }}>
          Que 1:
        </Text>
        <Text
          style={{
            width: '100%',
            fontSize: 16,
            fontWeight: '400',
            color: '#151515',
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit........
        </Text>
      </View>
      <View style={{borderWidth: 0.2, color: 'grey', marginTop: 10}} />
      <Text
        style={{
          textAlign: 'center',
          padding: 10,
          color: 'black',
          fontSize: 14,
          fontWeight: '500',
        }}>
        View all Q&A
      </Text>
    </View>
  );
  const redirect = useNavigation();
  const handleGoBack = () => {
    redirect.goBack();
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <SearchAppBar
        title={'Q&A'}
        onPress={() => {
          handleGoBack();
        }}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: '36%',
    backgroundColor: '#FAFAFA',
    margin: 10,
    borderRadius: 10,
    paddingVertical: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#151515',
    width: '70%',
    marginBottom: 15,
  },
  yourrating: {
    marginTop: 15,
    color: '#5A5A5A',
    fontSize: 12,
    fontWeight: '400',
  },
  description: {
    color: '#151515',
    padding: 10,
    fontSize: 14,
    fontWeight: '500',
    width: '100%',
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 15,
    color: '#000000',
  },
});

export default MyQuestionAnswerScreen;
