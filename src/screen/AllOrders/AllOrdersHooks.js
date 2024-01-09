import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './AllOrdersStyles';
import {ScreenNames} from '../../global';
import SelectStarSvg from '../../assets/svgs/SelectStarSvg.svg';
import {useNavigation} from '@react-navigation/native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import {API_END_POINT, BearerToken, ORIGIN, TOKEN} from '../../global/config';
import axiosInstance from '../../global/api-core';

const AllOrderHooks = () => {
  const [orders, setorders] = useState(null);
  const userData = useSelector(e => e.user?.logoutToken);
  // VARIABLE
  const navigation = useNavigation();

  // FUNCTION

  const dispatch = useDispatch();

  ///API of ORDERS
  const getOrders = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${API_END_POINT.ORDER}`;
      let response = await axiosInstance.post(url, {
        page: 1,
        limit: 50,
        order_status: ['Active'],
      });
      dispatch(UserAction.setGlobalLoader(false));
      console.log(`${response.data.data.customerOrderList}`);
      const orderList = response.data.data.customerOrderList;
      if (response.data.success == true) {
        setorders(orderList);
      }
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error orders Api', error.message);
    }
  };

  const renderItem = ({item}) => {
    const navigateToOrderDetails = () => {
      console.log(`${item.order_id}`);
      dispatch(UserAction.setorderId(item.order_id));
      navigation.navigate(ScreenNames.ORDERDETAIL_SCREEN);
    };
    return (
      <View style={styles.mainView}>
        <View style={styles.rowView}>
          <View style={styles.contaier}>
            <Image
              source={{
                uri: `https://cdn-stage.boppogo.com/${item.products[0].product_image_url}`,
              }}
              style={styles.imgcontainer}
            />
          </View>
          <View style={styles.nameWrapper}>
            <View style={styles.textWrapper}>
              <Text style={styles.name} numberOfLines={1}>
                {' '}
                {item.products[0].product_title}{' '}
              </Text>
            </View>
            <View style={styles.descriptionWrapper}>
              <Text
                style={styles.description}
                numberOfLines={2}
                ellipsizeMode="tail">
                {' '}
                {item.order_details_json.products[0].handle}{' '}
              </Text>
            </View>
            <Text style={styles.count}>
              {' '}
              This order has{item.products[0].product_quantity} products
            </Text>
            <View style={styles.rate}>
              <View style={styles.ratingStarBackGround}>
                <FlatList
                  horizontal
                  data={[1, 2, 3, 4, 5]}
                  renderItem={() => (
                    <SelectStarSvg
                      style={{marginLeft: 2}}
                      width={CHANGE_BY_MOBILE_DPI(11)}
                      height={CHANGE_BY_MOBILE_DPI(11)}
                    />
                  )}
                />
              </View>
              <Text style={styles.counts}> Rate this product Now</Text>
            </View>

            <Text style={styles.price}>
              {' '}
              Paid {item.products[0].product_price} USD{' '}
            </Text>
          </View>
        </View>
        <View style={styles.btn}></View>
        <TouchableOpacity onPress={navigateToOrderDetails}>
          <View style={styles.viewOrderDetailBtn}>
            <Text style={styles.viewOrderDetailBtnText}>View Order Detail</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    getOrders();
  }, []);

  return {
    renderItem,
    orders,
  };
};

export {AllOrderHooks};
