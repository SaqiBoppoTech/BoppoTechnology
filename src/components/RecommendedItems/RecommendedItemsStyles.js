import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  circularButtonContainer: {
    position: 'absolute',
    top: 10, // Adjust the top position as needed
    right: 10, // Adjust the right position as needed
  },

  imageContainer: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },

  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    width: 140,
  },
  item: {
    padding: 5,
    width: 160, // Adjust the width as needed
    height: 250, // Adjust the height as needed
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center', // Center text vertically
    justifyContent: 'center', // Add margin between items
  },
  image: {
    width: '80%', // Adjust the width as needed
    height: 150, // Adjust the height as needed
    resizeMode: 'contain', // You can adjust the resizeMode as needed
  },
  backGround:{
    backgroundColor: '#EFEFEF',
    height: 310,
    paddingLeft: 5,
    // marginTop: 10,
  },
  headingText:{
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    marginLeft: 10,
    marginVertical: 8,
  }
});
