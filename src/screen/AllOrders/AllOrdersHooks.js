import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import RatingComponent from '../../components/RatingStar';
import {styles} from './AllOrdersStyles';
import {Constant, ScreenNames} from '../../global';
import SelectStarSvg from '../../assets/svgs/SelectStarSvg.svg';
import {useNavigation} from '@react-navigation/native';
import OrderContainerComponent from '../../components/OrderTabContainer/OrderContainerComponent';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

const AllOrderHooks = () => {
  // VARIABLE
  const navigation = useNavigation();

  // FUNCTION
  const navigateToOrderDetails = () => {
    navigation.navigate(ScreenNames.ORDERDETAIL_SCREEN);
  };

  const renderItem = ({item}) => (
    <View style={styles.mainView}>
      <View style={styles.rowView}>
        <View style={styles.contaier}>
          <Image source={{uri: item.image}} style={styles.imgcontainer} />
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
  return {
    renderItem,
  };
};

export {AllOrderHooks};
