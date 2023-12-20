import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './AllOrdersStyles';
import {ScreenNames} from '../../global';
import SelectStarSvg from '../../assets/svgs/SelectStarSvg.svg';
import {useNavigation} from '@react-navigation/native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';

const AllOrderHooks = () => {
  const [orders, setorders] = useState(null);
  // VARIABLE
  const navigation = useNavigation();

  // FUNCTION
  const navigateToOrderDetails = () => {
    navigation.navigate(ScreenNames.ORDERDETAIL_SCREEN);
  };

  const dispatch = useDispatch();

  const getOrders = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      const url = `https://stage-api.boppogo.com/order/api/v1/customer/orders`;
      const response = await axios.post(
        url,
        {
          page: 1,
          limit: 50,
          order_status: ['Active'],
        },
        {
          headers: {
            Authorization: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVqd2FsLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI5OTg3Nzc5NDA3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMzA0NjY5OSwiZXhwIjoxNzAzMTMzMDk5LCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.nIhtgAWovVfg7cDnknC1zO7jWTJqKa7b2amdRKXHWF4lju6_Gq6pM5XojHoSUMzUPEX8A9nmcTtPcwLyIV0Xb3yIywabb_ztW8M5l1LdkNrFLFtSXavEh9T5XbnS2q3jeFgItEe0Tmz9fwFGV8_Yq90R-FLJDpX3sF8Ssu8-3uqZ6J6PzqnL2NTtfO92xaf24KV0KLFuYB1uLIuvaoR35r7ERpgREGlmrErky0z4qIv7XzzmuyTz8oitZdrJBsrSVTKzpophBgpN5fsESRR5vxiSpAQ-GXTLg4SYIjPVAxzmFeZ2gmLaaVss3TY9CO5Nk46TW90pJJ4AohAb0ZblXg`,
          },
        },
      );
      dispatch(UserAction.setGlobalLoader(false));
      const orderList = response.data;
      setorders(orderList);
      // if (response.data.success == true) {

      // }
      console.log('ordersList', response.data);
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error orders Api', error.message);
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.mainView}>
      <View style={styles.rowView}>
        <View style={styles.contaier}>
          <Image source={item.image} style={styles.imgcontainer} />
        </View>
        <View style={styles.nameWrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.name} numberOfLines={1}>
              {' '}
              {item.name}{' '}
            </Text>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text
              style={styles.description}
              numberOfLines={2}
              ellipsizeMode="tail">
              {' '}
              {item.des}{' '}
            </Text>
          </View>
          <Text style={styles.count}>
            {' '}
            This order has{item.productCount} products
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

          <Text style={styles.price}> Paid {item.paid} USD </Text>
        </View>
      </View>
      <View style={styles.btn}></View>
      <TouchableOpacity onPress={navigateToOrderDetails}>
        <View style={styles.viewOrderDetailBtn}>
          <Text style={styles.viewOrderDetailBtnText}>View Order Detail</Text>
        </View>
      </TouchableOpacity>
    </View>
    // <OrderContainerComponent
    //   heading={true}
    //   margingBottomSize={true}
    //   showProductQty={true}
    //   showOrderDetailButton={true}
    //   showDivider={true}
    //   containerHeight={true}
    // />
  );

  useEffect(() => {
    getOrders();
    console.log('useeffect ke andar');
  }, []);

  return {
    renderItem,
  };
};

export {AllOrderHooks};
