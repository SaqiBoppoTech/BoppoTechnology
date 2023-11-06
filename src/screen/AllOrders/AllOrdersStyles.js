const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
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
    width: '80%',
  },

  count: {
    color: '#151515',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 5,
  },
  counts: {
    color: '#151515',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 5,
    marginLeft: 5,
    paddingTop: 2,
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
  contaier: {
    // backgroundColor: 'blue',
    // height: 150,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    backgroundColor: '#fff',
    marginBottom: 25,
  },
  mainView: {
    margin: 8,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
  },
  nameWrapper: {
    flexDirection: 'column',
    marginTop: 20,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
    alignContent: 'center',
  },
  btn: {
    borderWidth: 0.2,
    borderColor: 'grey',
    marginBottom: 10,
  },
  rowView: {
    flexDirection: 'row',
    padding: 10,
  },
});
