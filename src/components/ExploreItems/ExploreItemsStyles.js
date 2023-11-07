const { StyleSheet } = require("react-native");

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
      width: 140,
    },
    item: {
      padding: 5,
      width: 160,
      height: 250,
      marginHorizontal: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '80%',
      height: '90%',
      resizeMode: 'contain',
    },
    backGround:{
      backgroundColor: '#EFEFEF',
      height: 320,
      paddingLeft: 5,
    },
    headingText:{
      fontSize: 22,
      fontWeight: '600',
      color: '#000',
      marginLeft: 10,
      marginVertical: 8,
    }
  });