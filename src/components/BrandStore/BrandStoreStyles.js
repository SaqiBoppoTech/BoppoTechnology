import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageback: {
    // backgroundColor: 'red',
    width: 150,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  item: {
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
    marginHorizontal: 10, // Add margin between items
  },
  image: {
    width: 150,
    height: 110,

    // width: '100%',
    // height: '100%',
    // resizeMode: 'cover',
  },
  backGround:{
    backgroundColor: 'white',
    height: 180,
    paddingLeft: 5,
  },
  headingText:{
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    marginLeft: 10,
    marginTop: 8,
  }
});
