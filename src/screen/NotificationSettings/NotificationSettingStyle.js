import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddd',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  toggle: {
    width: 45,
    height: 25,
    borderRadius: 15,
    justifyContent: 'center',
  },
  toggleOn: {
    backgroundColor: 'green',
    justifyContent: 'flex-end',
  },
  toggleOff: {
    backgroundColor: 'gray',
    justifyContent: 'flex-start',
  },
  toggleTextOn: {
    marginLeft: 5,
  },
  toggleTextOff: {
    marginRight: 5,
  },
  toggleSmall: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: 'red',
    alignItems: 'center',
    marginLeft: 3,
  },
  text: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
});
