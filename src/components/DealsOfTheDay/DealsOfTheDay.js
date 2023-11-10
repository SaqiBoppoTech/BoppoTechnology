import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {styles} from './DealsOfTheDayStyles';
import { DealsOfTheDayhHooks } from './DealsOfTheDayHooks';

const DealsOfTheDay = ({title}) => {
  const {data, renderItem} = DealsOfTheDayhHooks()
  return (
    <View style={styles.backGround}>
      <Text style={styles.headerText}>{title}</Text>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.contentContainerStyle}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default DealsOfTheDay;
