const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 3,
    marginHorizontal: 3,
  },
  item: {
    padding: 5,
    width: '50%',
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#F2F2F2',
    borderWidth: 1,
  },
  image: {
    width: '80%',
    height: '90%',
    resizeMode: 'contain',
  },

  incrementbtn: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 100,
  },
  nameWrapper: {
    color: 'black',
    fontSize: 13,
    fontWeight: 500,
    marginTop: 15,
    marginHorizontal: 3,
  },
});
