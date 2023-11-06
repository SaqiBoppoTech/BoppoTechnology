//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import CarouselScreen from '../components/Carousel/CarouselScreen';
import DealOfTheDayScreen from '../components/DealsOfTheDay/DealsOfTheDayScreen';
import ExploreItemScreen from '../components/ExploreItems/ExploreItemsScreen';
import TopDealListScreen from '../components/TopDeals/TopDealsScreen';
import BrandStoreListScreen from '../components/BrandStore/BrandStoreScreen';
import RecommendedItemListScreen from '../components/RecommendedItems/RecommendedItemsScreen';
import ShopByCategoryListScreen from '../components/ShopByCategory/ShopByCategoryScreen';
import BrowsingHistoryListScreen from '../components/YourBrowsingHistory/YourBrowsingHistoryScreen';

// create a component
const HomeScreen = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <ScrollView>
        <View style={{backgroundColor: '#fff', flex: 1, marginBottom: 3}}>
          <CarouselScreen />
          <DealOfTheDayScreen
            onPress={() => {
              navigation.navigate('ProductDetailScreen');
            }}
          />
          <ExploreItemScreen
            onBuyNowPress={() => {
              navigation.navigate('YourCart');
            }}
            onPress={() => {
              navigation.navigate('ProductDetailScreen');
            }}
          />
          <TopDealListScreen
            onPress={() => {
              navigation.navigate('ProductDetailScreen');
            }}
          />
          <BrandStoreListScreen />
          <RecommendedItemListScreen
            onPress={() => {
              navigation.navigate('ProductDetailScreen');
            }}
            onBuyNowPress={() => {
              navigation.navigate('YourCart');
            }}
          />
          <ShopByCategoryListScreen
            onPress={() => {
              navigation.navigate('ProductDetailScreen');
            }}
          />
          <BrowsingHistoryListScreen
            onPress={() => {
              navigation.navigate('ProductDetailScreen');
            }}
            onBuyNowPress={() => {
              navigation.navigate('YourCart');
            }}
          />
          {/* <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
                <FlushBar />
              </View> */}
        </View>
        <Modal
          visible={isPopupVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => {
            setPopupVisible(false);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{color: 'black', margin: 50}}>
                Your Popup Content Goes Here
              </Text>
              <TouchableOpacity
                onPress={togglePopup}
                style={styles.closeButton}>
                <Text style={{color: 'black'}}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default HomeScreen;
