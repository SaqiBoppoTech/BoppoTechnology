import { Text, View, TextInput} from 'react-native';
import React from 'react';
import { styles } from './CustomTextFieldStyle';

const CustomTextField = ({
  keyboardType,
  placeholder,
  title,
  showAsterisk,
  showSecure,
  error,
  value,
  onChangeText,
}) => {
  return (
    <View>
      <View style={styles.titleview}>
        <Text style={styles.title}>{title}</Text>
        {showAsterisk && <Text style={styles.asterisk}>*</Text>}
      </View>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholder={placeholder}
        keyboardType={'default' || keyboardType}
        placeholderTextColor="#808080"
        secureTextEntry={showSecure}
        value={value}
        onChangeText={onChangeText}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomTextField;


