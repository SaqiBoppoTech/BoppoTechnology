import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  input: {
    height: 50,
    marginHorizontal: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'grey',
    color: '#121212',
    fontSize: 18,
    marginTop: 8,
    marginBottom: 10,
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    paddingLeft: 15,
  },
  titleview: {
    flexDirection: 'row',
  },
  asterisk: {
    color: 'red',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    fontWeight: '400',
    marginHorizontal: 15,
    marginBottom: 5,
  },
  inputError: {
    borderColor: 'red',
  },
});
