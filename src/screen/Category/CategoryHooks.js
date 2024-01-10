import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import SearchField from '../../components/SearchField';
import {GlobalImage} from '../../global/staticImage';
import {styles} from './CategoryStyle';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import Arrow from '../../assets/svgs/ArrowCategorySvg.svg';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import * as UserAction from '../../redux/actions/userActions';
import {API_END_POINT, BASE_URL, ORIGIN} from '../../global/config';
import axiosInstance from '../../global/api-core';

const CategoryHooks = () => {
  // VARIABLE
  const navigation = useNavigation();
  const appData = useSelector(e => e?.user?.globalAppData);

  const dispatch = useDispatch();
  const [categoriesList, setCategoriesList] = useState(null);
  //FUNCTION
  const navigateToCategoryDetail = (item,index) => {
    navigation.navigate(ScreenNames.CATEGORY_DETAIL_SCREEN, {
      name: item.name,
      handle: item.handle,
      index : index,
      data: categoriesList
    });
  };

  const navigateToCartPage = () => {
    navigation.navigate(ScreenNames.YOUR_CART_SCREEN);
  };



  //API OF Customer Collection Menu i.e Get Category
  const getCategories = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${API_END_POINT.CATEGORIES}`;
      let response = await axiosInstance.get(url);
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        setCategoriesList(response.data.data.shop_collections);
        console.log(response.data.data.shop_collections);
      }
    } catch (error) {
      console.log('error GetCategories', error.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return {
    navigateToCategoryDetail,
    navigateToCartPage,
    categoriesList,
    appData
  };
};

export {CategoryHooks};
