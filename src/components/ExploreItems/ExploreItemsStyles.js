const {StyleSheet} = require('react-native');

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
  backGround: {
    backgroundColor: '#EFEFEF',
    height: 320,
    paddingLeft: 5,
  },
  headingText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    marginLeft: 10,
    marginVertical: 8,
  },
  productName: {
    color: 'black',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 15,
  },
  productPrice: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  discountPrice: {
    color: '#888888',
    fontSize: 12,
    fontWeight: '400',
    textDecorationLine: 'line-through',
  },
  productPercent: {
    color: 'black',
    fontSize: 12,
    fontWeight: '700',
    color: '#E50404',
  },
  backGroundColorBottomSheetActive: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'flex-end',
  },
  bottomSheetBackground:{
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
});
