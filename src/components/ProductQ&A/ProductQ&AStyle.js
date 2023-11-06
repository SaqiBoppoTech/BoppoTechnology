import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 15,
    paddingBottom: 10,
    fontSize: 14,
    fontWeight: '400',
    color: '#151515',
  },

  seq: {
    marginRight: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#151515',
  },

  button: {
    width: '30%',
    height: '6%',
    borderRadius: 5,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  container: {
    width: '100%',

    marginRight: 10,
    height: '15%',
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    paddingLeft: 15,
    position: 'absolute',
  },

  header: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 15,
  },
  namevalues: {
    fontSize: 16,
    fontWeight: '400',
    color: '#151515',
  },
  questionView: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '80%',
    justifyContent: 'space-between',
  },
  answerView: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '75%',
    justifyContent: 'space-between',
  },
  borderLine: {
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
  },
  headerView: {
    padding: 15,
  },
});
