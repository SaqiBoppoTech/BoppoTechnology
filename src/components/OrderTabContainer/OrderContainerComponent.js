import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './OrderContainerStyles';
import PrivacyPolicyHooks from '../../screen/PrivacyPolicy/PrivacyPolicyHooks';
import {OrderContainerHooks} from './OrderContainerHooks';
import {useNavigation} from '@react-navigation/native';
import {Constant, ScreenNames} from '../../global';
import SelectStarSvg from '../../assets/svgs/SelectStarSvg.svg';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import PopupSvg from '../../assets/svgs/PopupSvg.svg';
import CustomBottomSheet from '../CustomBottomsheetorderDetails/CustomBottomsheetorderDetails';
import {STATIC_DATA} from '../../global/staticdata';

const OrderContainerComponent = ({
  heading,
  margingBottomSize,
  showPopup,
  showQuantity,
  showProductQty,
  showOrderDetailButton,
  showDivider,
  containerHeight,
  screenName,
  productsOrderDetail,
  navigateToOrderScreen
}) => {
  // VARIABLE
  const navigation = useNavigation();

  // FUNCTION
  const navigateToOrderDetails = () => {
    navigation.navigate(ScreenNames.ORDERDETAIL_SCREEN);
  };

  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const openBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetVisible(false);
  };

  const renderItem = ({item}) => (
    <View
      style={{
        ...styles.mainView,
        height: containerHeight
          ? CHANGE_BY_MOBILE_DPI(226)
          : CHANGE_BY_MOBILE_DPI(178),
      }}>
      <View style={styles.rowView}>
        <View style={styles.contaier}>
          <Image
            source={{
              uri: `https://cdn-stage.boppogo.com/${productsOrderDetail?.products[0]?.product_image_url}`,
            }}
          />
        </View>
        <View style={styles.nameWrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.name} numberOfLines={1}>
              {productsOrderDetail?.products[0]?.title}
            </Text>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text
              style={styles.description}
              numberOfLines={2}
              ellipsizeMode="tail">
              {' '}
              {productsOrderDetail?.products[0]?.handle}{' '}
            </Text>
            {showPopup ? (
              <TouchableOpacity onPress={openBottomSheet}>
                <PopupSvg />
              </TouchableOpacity>
            ) : null}
          </View>
          {showQuantity ? (
            <Text style={styles.quantity}>
              {productsOrderDetail?.products[0]?.quantity} Qty{' '}
            </Text>
          ) : null}
          {showProductQty ? (
            <Text style={styles.count}>
              {' '}
              This order has{item.productCount} products
            </Text>
          ) : null}
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
            Paid {productsOrderDetail?.products[0]?.price} USD{' '}
          </Text>
        </View>
      </View>
      {showDivider ? <View style={styles.btn}></View> : null}
      <TouchableOpacity onPress={navigateToOrderDetails}>
        {showOrderDetailButton ? (
          <View style={styles.viewOrderDetailBtn}>
            <Text style={styles.viewOrderDetailBtnText}>View Order Detail</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      {screenName === 'OrderDetail' ? (
        <CustomBottomSheet
          isVisible={isBottomSheetVisible}
          onClose={closeBottomSheet}
          writeAProductreview={true}
          deliveryDetails={true}
          returnOrReplaceItem={true}
          navigateToOrderScreen={navigateToOrderScreen}    
        />
      ) : (
        <CustomBottomSheet
          isVisible={isBottomSheetVisible}
          onClose={closeBottomSheet}
          addProductReview={true}
          cancelThisReturn={true}
          productDetails={true}
        />
      )}
    </View>
  );
  return (
    <View
      style={{
        ...styles.background,
        marginBottom: margingBottomSize ? CHANGE_BY_MOBILE_DPI(117) : 0,
      }}>
      <FlatList
        data={productsOrderDetail?.products}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default OrderContainerComponent;
