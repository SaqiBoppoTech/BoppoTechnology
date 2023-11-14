import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './QuestionAndAnswerStyle';
import MyReviewCommonComponent from '../MyReviewCommonComponent/MyReviewCommonComponent';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
const QuestionAndAnswerHook = () => {
    const [questionAndAnswer, setQuestionAndAnswer] = React.useState('')


    const questionAndAnswerRenderItem = ({ item }) => (
        <View style={styles.container}>
            <View style={{...styles.flexDirection,marginBottom:CHANGE_BY_MOBILE_DPI(15)}}>
                <View style={styles.lessFlexContainer}>
                    <Text style={styles.qustionFontStyle}>Que 1:</Text>
                </View>
                <View style={styles.largeFlexContainer}>
                    <Text style={styles.valueFontStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. </Text>
                </View>
            </View>
            <View style={styles.flexDirection}>
                <View style={styles.lessFlexContainer}>
                    <Text style={styles.qustionFontStyle}>Ans:</Text>
                </View>
                <View style={styles.largeFlexContainer}>
                    <Text style={styles.valueFontStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi. </Text>
                </View>
            </View>
            <View style={styles.line}></View>
        </View>
    );
    return {
        questionAndAnswer, setQuestionAndAnswer, questionAndAnswerRenderItem
    }
}
export { QuestionAndAnswerHook }