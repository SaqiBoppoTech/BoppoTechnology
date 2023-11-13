import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import AddToCartBottomButton from '../Button/AddToCartBottomButton';
import BlackIncremnetButton from '../Button/BlackIncrementButton/BlackIncrementButton';

const ProductHomeBottomSheet = ({onBuyNowPress, onAddToCartPress}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 32,
        width: 32,
      }}>
      <TouchableOpacity onPress={toggleModal}>
        <View style={styles.circle}>
          <Icon name="plus" size={18} color="#fff" />
        </View>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onBackdropPress={toggleModal}
        style={{justifyContent: 'flex-end', margin: 0}}>
        <View style={{backgroundColor: '#fff', height: 190, borderRadius: 8}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
              }}
              style={{backgroundColor: '#fff', height: 120, width: 80}}
            />
            <View style={{backgroundColor: '#fff'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  fontWeight: 500,
                  marginTop: 15,
                }}>
                Nescafe gold Cappuccino Coffee..
              </Text>
              <View style={styles.priceContainer}>
                <Text style={{color: 'black', fontSize: 14, fontWeight: 600}}>
                  £2.00
                </Text>
                <Text
                  style={{
                    color: '#888888',
                    fontSize: 12,
                    fontWeight: 400,
                    textDecorationLine: 'line-through',
                  }}>
                  £4.00
                </Text>

                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#E50404',
                  }}>
                  50% OFF
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 30,
                }}>
                <BlackIncremnetButton />
                <Text
                  style={{
                    color: '#000',
                    fontSize: 14,
                    fontWeight: 500,
                    textAlign: 'center',
                  }}>
                  Select Qty
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <AddToCartBottomButton
              onAddToCartPress={onAddToCartPress}
              onBuyNowPress={onBuyNowPress}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProductHomeBottomSheet;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: '#3876BF',
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultText: {
    color: '#000',
    fontSize: 20,
    marginHorizontal: 5,
    textAlign: 'center',
    fontWeight: '500',
  },
  container: {
    flexDirection: 'row',
    width: 115,
    backgroundColor: '#F1F1F1',
    height: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
  },
  imageContainer: {
    width: 80,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    width: 140,
  },
});
