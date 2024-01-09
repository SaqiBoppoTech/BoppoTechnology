import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import CircleIncrementButton from '../../components/Button/CircleIncrementButton';
import RatingComponent from '../../components/RatingStar';
import {styles} from './CategoryDetailStyle';
import {ScreenNames} from '../../global';
import Filter from '../Filter/FilterScreen';
import TopTabBar from '../../components/TopTabBar/TopTabBar';
import {useDispatch} from 'react-redux';
import {API_END_POINT, BASE_URL, ORIGIN} from '../../global/config';
import * as UserAction from '../../redux/actions/userActions';
import axios from 'axios';
import axiosInstance from '../../global/api-core';

const CategoryDetailHooks = () => {
  // VARIABLE
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [selectedtopTab, setSelectedTopTab] = React.useState(0);

  let route = useRoute();

  const navigateToProdiuctDetail = (productHandle, productId) => {
    console.log('pratikkkkk', productHandle, productId);
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN, {
      productHandle,
      productId,
    });
  };

  const redirect = useNavigation();
  const handleGoBack = () => {
    redirect.goBack();
  };

  //FUNCTION
  const navigateToFilterPage = () => {
    navigation.navigate(ScreenNames.FILTER);
  };

  const [collectionByHandel, setCollectionByHandel] = useState([]);

  ///API of Collection By Handel
  const getCollectionByHandel = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${BASE_URL}/product/api/v1/customer/collection/get-collection/${route?.params?.handle}`;
      // let url = `https://stage-api.boppogo.com/product/api/v1/customer/collection/get-collection/shoes-`;
      console.log('categorydetailurl', url);
      const response = await axios.post(url, {
        // headers: {
        //   origin: ORIGIN,
        // },
      });
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        setCollectionByHandel(response.data.data.products);
      }
    } catch (error) {
      console.log('error GetCollectionHandel', error.message);
    }
  };

  const renderItemTopTab = ({item, index}) => {
    return (
      <TopTabBar
        item={item}
        index={index}
        setValue={setSelectedTopTab}
        value={selectedtopTab}
        name={'name'}
        externalTopTabContainerStyle={styles.externalTopTabContainerStyle}
        externalTopTabStyle={styles.externalTopTabStyle}
      />
    );
  };

  useEffect(() => {
    getCollectionByHandel();
  }, []);

  return {
    handleGoBack,
    navigateToFilterPage,
    renderItemTopTab,
    collectionByHandel,
    setCollectionByHandel,
    navigateToProdiuctDetail,
  };
};

export {CategoryDetailHooks};
