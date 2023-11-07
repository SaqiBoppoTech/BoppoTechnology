import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  circularButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
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
    height: 250, // Adjust the height as needed
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center', // Center text vertically
    justifyContent: 'center', // Add margin between items
  },
  image: {
    width: '80%', // Adjust the width as needed
    height: '90%', // Adjust the height as needed
    resizeMode: 'contain', // You can adjust the resizeMode as needed
  },
  backGround: {
    backgroundColor: '#EFEFEF',
    height: 300,
    paddingLeft: 5,
    marginBottom:60
  },
  headingText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    marginLeft: 10,
    marginVertical: 8,
  },
  bottomSheetBackground:{
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
});
