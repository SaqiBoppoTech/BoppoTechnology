const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  product: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  price: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
  },
  review: {
    fontSize: 14,
    fontWeight: '500',
    color: '#A9A9A9',
    marginLeft: 5,
  },
  description: {
    fontSize: 14,
    fontWeight: '500',
    color: '#151515',
  },
  scrollStyle: {
    marginBottom: 10,
  },
  mainView: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 15,
  },
  priceview: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingWrapper: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});
