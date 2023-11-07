const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  item: {
    width: 150,
    height: 150,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backGround: {
    backgroundColor: 'black',
    height: 250,
    paddingLeft: 5,
    marginTop: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
    marginLeft: 10,
    marginVertical: 8,
  },
});
