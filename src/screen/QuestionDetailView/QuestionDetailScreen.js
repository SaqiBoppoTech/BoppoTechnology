import {FlatList, Text, View} from 'react-native';
import React from 'react';
import MyReviewCommonComponent from '../../components/MyReviewCommonComponent/MyReviewCommonComponent';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import QuestionDetailHooks from './QuestionDetailHooks';
import {styles} from './QuestionDetailStyle';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {STATIC_DATA} from '../../global/staticdata';
import {GlobalImage} from '../../global/staticImage';

const QuestionDetailScreen = () => {
  const {handleGoBack} = QuestionDetailHooks();

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
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar title={'Q&A Detail'} onPress={handleGoBack} />
      <View style={styles.ratingWrapper}>
        <MyReviewCommonComponent
          productImage={GlobalImage.coffeeNetworkImage}
          initialRating={4}
          productName={'Kinder Happy Hippo Cocoa Cream 5 Bar 105g'}
        />
      </View>

      <FlatList
        data={STATIC_DATA.questionDetailData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default QuestionDetailScreen;
