import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  item: {
    padding: 5,
    width: 160, // Adjust the width as needed
    height: 230, // Adjust the height as needed
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 5, // Add margin between items
  },
  image: {
    width: '80%', // Adjust the width as needed
    height: '100%', // Adjust the height as needed
    resizeMode: 'contain', // You can adjust the resizeMode as needed
  },
  backGround:{
    backgroundColor: '#FFF2D0',
    height: 300,
    paddingLeft: 5,
  },
  headingText:{
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    marginLeft: 10,
    marginVertical: 10,
  }
});
