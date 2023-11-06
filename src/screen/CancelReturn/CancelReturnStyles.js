const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  buttonContainer: {
    width: 60,
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
  },
  itemContainer: {
    margin: 8,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
  },
  name: {
    color: '#151515',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },

  description: {
    color: '#151515',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },

  count: {
    color: '#151515',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 5,
  },
  counts: {
    color: '#A9A9A(',
    fontSize: 9,
    fontWeight: ' 400',
    marginBottom: 5,
    marginLeft: 5,
  },

  price: {
    color: '#151515',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },

  imgcontainer: {
    height: 130,
    width: 130,
    justifyContent: 'center',
    alignContent: 'center',
  },
  imgWrapper: {
    // backgroundColor: 'blue',
    height: 150,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    backgroundColor: '#fff',
    marginBottom: 60,
  },
  alignContent: {
    flexDirection: 'row',
    padding: 10,
  },
  colWrapper: {
    flexDirection: 'column',
    marginTop: 20,
  },
  cancelWrapper: {
    color: 'black',
    fontSize: 15,
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 12,
    fontWeight: '700',
  },
  border: {
    borderWidth: 0.8,
    borderColor: 'grey',
    marginBottom: 10,
  },
});
