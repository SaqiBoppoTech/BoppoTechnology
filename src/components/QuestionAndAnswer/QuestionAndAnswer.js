import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { QuestionAndAnswerHook } from './QuestionAndAnswerHook';
import { styles } from './QuestionAndAnswerStyle';
import { Colors } from '../../global';
import { STATIC_DATA } from '../../global/staticdata';
const QuestionAndAnswer = () => {
    const { questionAndAnswer, setQuestionAndAnswer, questionAndAnswerRenderItem } = QuestionAndAnswerHook()
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.askAQuestionFontStyle}>Ask a Question</Text>
            <View style={styles.inputMainContainer}>
                <View style={styles.positionInputContainer}>
                    <TextInput
                        multiline
                        placeholder='Space for your question'
                        placeholderTextColor={Colors.GRAY_DARK}
                        style={styles.inputFontStyle}
                        onChangeText={setQuestionAndAnswer}
                    >{questionAndAnswer}</TextInput>
                </View>
            </View>

            <View style={styles.sendPositionContainer}>
                <TouchableOpacity style={styles.sendButton}>
                    <Text style={styles.sendFontStyle}>Send</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={STATIC_DATA.QandAsData}
                renderItem={questionAndAnswerRenderItem}
            />
        </View>
    );
};

export default QuestionAndAnswer;
