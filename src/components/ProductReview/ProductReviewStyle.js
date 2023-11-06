const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  squareImage: {
    height: 100,
    width: 100,
    marginRight: 10,
    backgroundColor: '#A9A9A9',
    margin: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 40,
  },
  reviewcontainer: {
    height: '120%',
    width: '30%',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    marginRight: 20,
  },
  rating: {
    color: 'black',
    fontSize: 38,
    fontWeight: '700',
  },
  ratingText: {
    color: 'black',
    fontSize: 17,
    fontWeight: '700',
  },

  name: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000000',
    marginRight: 10,
  },
  date: {
    fontSize: 12,
    fontWeight: '400',
    color: '#151515',
    marginRight: 10,
  },
  reviewDes: {
    fontSize: 15,
    fontWeight: '400',
    color: '#151515',
    marginRight: 10,
  },
  viewWrapper: {
    padding: 10,
    marginTop: 20,
  },
  mainView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingWrapper: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  ratingMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  rateWrapper: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000000',
  },
  rateImageWrapper: {
    height: 20,
    width: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  totalRating: {
    fontSize: 13,
    fontWeight: '300',
    color: '#000000',
    marginLeft: 5,
  },
  totalRatingWrapper: {
    borderWidth: 4,
    color: '#F1C40F',
    borderColor: item.borderColor,
    width: '60%',
    borderCurve: 'circular',
  },
  mainView2: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  reviewWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
});
