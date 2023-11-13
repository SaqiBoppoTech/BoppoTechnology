import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from './QuestionAndAnswerStyle';
import MyReviewCommonComponent from '../MyReviewCommonComponent/MyReviewCommonComponent';
const QuestionAndAnswerHook = () => {
   const [questionAndAnswer, setQuestionAndAnswer] = React.useState('')

  
  const questionAndAnswerRenderItem = ({item}) => (
    <View style={styles.container}>
    
      <View style={styles.line}></View>
    </View>
  );
    return{
        questionAndAnswer, setQuestionAndAnswer,questionAndAnswerRenderItem
    }
}
export {QuestionAndAnswerHook}