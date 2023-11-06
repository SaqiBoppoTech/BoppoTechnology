import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {styles} from './ProductQ&AStyle';

const ProductQuestionAnswerScreen = () => {
  const data = [
    {
      no: 1,
      que: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi.',
      ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi.',
    },
    {
      no: 2,
      que: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi.',
      ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi.',
    },
    {
      no: 3,
      que: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi.',
      ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi.',
    },
    {
      no: 4,
      que: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi.',
      ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi.',
    },

    {
      no: 5,
      que: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi.',
      ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt amet egestas tempor facilisi.',
    },
  ];

  const renderItem = ({item}) => (
    <View>
      <View style={styles.questionView}>
        <Text style={styles.seq}> Que {item.no}</Text>
        <Text style={styles.question}> {item.que}</Text>
      </View>

      <View style={styles.answerView}>
        <Text style={styles.seq}> Ans: </Text>
        <Text style={styles.question}> {item.ans}</Text>
      </View>
      <View style={styles.borderLine} />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.headerView}>
        <Text style={styles.header}>Ask a Question</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder="Space your question here"
            placeholderTextColor="#A9A9A9"
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.no.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default ProductQuestionAnswerScreen;
