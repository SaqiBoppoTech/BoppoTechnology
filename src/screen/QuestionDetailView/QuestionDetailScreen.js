import {FlatList, Text, View} from 'react-native';
import React from 'react';
import MyReviewCommonComponent from '../../components/MyReviewCommonComponent/MyReviewCommonComponent';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import QuestionDetailHooks from './QuestionDetailHooks';
import {styles} from './QuestionDetailStyle';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const QuestionDetailScreen = () => {
  const {handleGoBack} = QuestionDetailHooks();
  const data = [
    {
      id: 1,
      name: 'Kinder Happy Hippo Cocoa Cream 5 Bar 105g',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      rate: 4,
      question:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. In tincidunt amet egestas tempor facilis',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. In tincidunt amet egestas tempor facilis',
    },
    {
      id: 2,
      name: 'Kinder Happy Hippo Cocoa Cream 5 Bar 105g',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      rate: 4,
      question:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. In tincidunt amet egestas tempor facilis',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. In tincidunt amet egestas tempor facilis',
    },
    {
      id: 3,
      name: 'Kinder Happy Hippo Cocoa Cream 5 Bar 105g',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      rate: 4,
      question:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. In tincidunt amet egestas tempor facilis',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. In tincidunt amet egestas tempor facilis',
    },
    {
      id: 4,
      name: 'Kinder Happy Hippo Cocoa Cream 5 Bar 105g',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      rate: 4,
      question:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. In tincidunt amet egestas tempor facilis',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. In tincidunt amet egestas tempor facilis',
    },
  ];
  const renderItem = ({item, index}) => (
    <View style={styles.mainView}>
      <View style={styles.questionView}>
        <View style={styles.questionViewOnly}>
          <Text style={styles.question}>Ques 1:</Text>
        </View>
        <View style={styles.flexView}>
          <Text style={styles.questionText}>{item.question}</Text>
        </View>
      </View>

      <View
        style={{...styles.questionView, marginTop: CHANGE_BY_MOBILE_DPI(5)}}>
        <View style={styles.questionViewOnly}>
          <Text style={styles.question}>Ans:</Text>
        </View>
        <View style={styles.flexView}>
          <Text style={styles.questionText}>{item.question}</Text>
        </View>
      </View>
      <View style={styles.lineWrapper}>
        {index < data.length - 1 && <View style={styles.line}></View>}
      </View>
    </View>
  );

  return (
    <View style={styles.FlatListConatiner}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <SearchAppBar title={'Q&A Detail'} onPress={handleGoBack} />
      <View style={styles.ratingWrapper}>
        <MyReviewCommonComponent
          productImage={
            'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png'
          }
          initialRating={4}
          productName={'Kinder Happy Hippo Cocoa Cream 5 Bar 105g'}
        />
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default QuestionDetailScreen;
