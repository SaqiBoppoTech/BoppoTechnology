import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';
import MyReviewCommonComponent from '../../components/MyReviewCommonComponent/MyReviewCommonComponent';
import {styles} from './MyQuestionAnswerStyle';
import MyQuestionAnswerHooks from './MyQuestionAnswerHooks';

const MyQuestionAnswerScreen = () => {
  const {handleGoBack, navigateToDetailQuestionAnswerView} =
    MyQuestionAnswerHooks();
  const data = [
    {
      id: 1,
      name: 'Kinder Happy Hippo Cocoa Cream 5 Bar 105g',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      rate: 4,
      question:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. In tincidunt amet egestas tempor facilis',
    },

    {
      id: 2,
      name: 'Kinder Happy Hippo Cocoa Cream 5 Bar 105g',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      rate: 5,
      question:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. In tincidunt amet egestas tempor facilis',
    },

    {
      id: 3,
      name: 'Kinder Happy Hippo Cocoa Cream 5 Bar 105g',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      rate: 2,
      question:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. In tincidunt amet egestas tempor facilis',
    },

    {
      id: 4,
      name: 'Kinder Happy Hippo Cocoa Cream 5 Bar 105g',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      rate: 3,
      question:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. In tincidunt amet egestas tempor facilis',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.container}>
      <MyReviewCommonComponent
        productImage={item.image}
        initialRating={item.rate}
        productName={item.name}
      />
      <View style={styles.questionView}>
        <Text style={styles.question}>Ques 1:</Text>
        <View style={styles.flexView}>
          <Text style={styles.questionText} numberOfLines={2}>
            {item.question}
          </Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={navigateToDetailQuestionAnswerView}>
          <Text style={styles.optionText}>View all Q&A</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <SearchAppBar title={'Q&A'} onPress={handleGoBack} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MyQuestionAnswerScreen;
