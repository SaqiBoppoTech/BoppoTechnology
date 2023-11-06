import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';

const SearchField = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={24} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search Products, categories..."
        placeholderTextColor="#A9A9A9"
      />
      <Icons name="mic-outline" size={28} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#D1D1D1',
    paddingHorizontal: 8,
    paddingVertical: 1,
    marginHorizontal: 10,
    marginTop: 5,
  },
  icon: {
    margin: 7,
    color: '#737373',
  },
  input: {
    flex: 1,
    fontSize: 17,
    color: '#000',
  },
});

export default SearchField;
