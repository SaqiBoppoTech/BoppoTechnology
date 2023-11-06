import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {DealsOfTheDayHooks} from './DealsOfTheDayHooks';
import {styles} from './DealsOfTheDayStyles';

const DealOfTheDayScreen = ({onPress}) => {
  const {data, renderItem} = DealsOfTheDayHooks();
  return (
    <View style={styles.backGround}>
      <Text style={styles.headerText}>Deals Of the Day</Text>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default DealOfTheDayScreen;
