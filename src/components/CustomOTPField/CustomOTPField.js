import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {styles} from './CustomOTPStyle';

const OTPInput = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [];

  const handleChange = (text, index) => {
    if (isNaN(text)) return; // Only allow numeric input
    const updatedOtp = [...otp];
    updatedOtp[index] = text;
    setOtp(updatedOtp);

    // Auto focus to the next input field if a digit is entered
    if (index < otp.length - 1 && text.length === 1) {
      inputRefs[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={ref => (inputRefs[index] = ref)}
          style={styles.input}
          value={digit}
          onChangeText={text => handleChange(text, index)}
          maxLength={1}
          keyboardType="numeric"
        />
      ))}
    </View>
  );
};

export default OTPInput;
