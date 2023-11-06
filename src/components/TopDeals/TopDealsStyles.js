import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageback: {
    backgroundColor: 'white',
    width: 150,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  item: {
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
    margin: 10,
    position: 'relative', // Add margin between items
  },
  image: {
    width: 110,
    height: 110,
  },
  backGround: {
    backgroundColor: '#FFF2D0',
    height: 300,
    paddingLeft: 5,
    // marginTop: 10,
  },
  headingColor: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    marginLeft: 10,
    marginVertical: 10,
  },
});
