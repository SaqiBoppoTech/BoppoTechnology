import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {styles} from './CountryDropDownStyle';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const CountryDropdownComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Other',
  ];

  const handleCountryChange = country => {
    setSelectedCountry(country);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Country</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedCountry}
          onValueChange={itemValue => handleCountryChange(itemValue)}
          style={styles.picker}>
          {countries.map((country, index) => (
            <Picker.Item
              key={index}
              label={country}
              value={country}
              color="#000"
              style={{
                backgroundColor: 'white',
                borderRadius: 12,
                marginLeft: 20,
              }}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default CountryDropdownComponent;
