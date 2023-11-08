import React from 'react';
import {View, Text, Image, FlatList, Button} from 'react-native';
import {styles} from './CancelReturnStyles';
import {CancelReturnHooks} from './CancelReturnHooks';

const CancelReturnScreen = () => {
  const {data, renderItem} = CancelReturnHooks();

  return (
    <View style={styles.background}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CancelReturnScreen;
