import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';
import MyReviewCommonComponent from '../../components/MyReviewCommonComponent/MyReviewCommonComponent';
import {styles} from './MyQuestionAnswerStyle';
import MyQuestionAnswerHooks from './MyQuestionAnswerHooks';
import {STATIC_DATA} from '../../global/staticdata';

const MyQuestionAnswerScreen = () => {
  const {handleGoBack, navigateToDetailQuestionAnswerView} =
    MyQuestionAnswerHooks();

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
      <TouchableOpacity
        style={styles.bottomContainer}
        onPress={navigateToDetailQuestionAnswerView}>
        <Text style={styles.optionText}>View all Q&A</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar title={'Q&A'} onPress={handleGoBack} />
      <FlatList
        data={STATIC_DATA.myQuestionAnswerData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MyQuestionAnswerScreen;
