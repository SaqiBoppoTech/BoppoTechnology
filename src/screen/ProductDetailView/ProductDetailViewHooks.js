import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {styles} from './ProductDetailViewStyle';
import {Colors, Fonts, ScreenNames} from '../../global';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import ProductReview from '../../components/ProductReview/ProductReview';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import QuestionAndAnswer from '../../components/QuestionAndAnswer/QuestionAndAnswer';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import axios from 'axios';
import {BearerToken, ORIGIN} from '../../global/config';

const ProductDetailViewHooks = () => {
  const [selectedTab, setSelectTabs] = React.useState(0);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  let route = useRoute();
  let routeProductHandle = route?.params?.productHandle;
  let routeProductId = route?.params?.productId;
  console.log('routeProductHandle', routeProductHandle);
  console.log('routeProductId', routeProductId);

  const openCustomView = (description, price) => {
    console.log({description});
    return (
      <View style={styles.marginBottomContainer}>
        {selectedTab == 0 ? (
          <ProductDescription description={description} price={price} />
        ) : selectedTab == 1 ? (
          <ProductDetail />
        ) : selectedTab == 2 ? (
          <ProductReview />
        ) : (
          <QuestionAndAnswer />
        )}
      </View>
    );
  };

  //FUNCTION

  const navigateToCheckOut = () => {
    navigation.navigate(ScreenNames.ORDER_SUMMARY_SCREEN);
  };

  const navigateToCartPage = () => {
    navigation.navigate(ScreenNames.YOUR_CART_SCREEN);
  };

  const renderTopBar = ({item, index}) => {
    const addIndexOntState = () => {
      setSelectTabs(index);
    };
    let bottomBar = selectedTab == index && {backgroundColor: Colors.PRIMARY};
    return (
      <TouchableOpacity
        style={styles.barContainerStyle}
        onPress={addIndexOntState}>
        <Text
          style={[
            selectedTab == index
              ? styles.labelFontStyle
              : styles.labelBlurFontStyle,
          ]}>
          {item}
        </Text>
        <View style={{...styles.bottomBar, ...bottomBar}}></View>
      </TouchableOpacity>
    );
  };

  const getSingleProduct = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `https://stage-api.boppogo.com/product/api/v1/product/${routeProductHandle}/${routeProductId}`;
      console.log('categorydetailurl', url);
      const response = await axios.get(url, {});
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        setSelectedProduct(response.data.data);
        console.log(
          `response of single product by id  ${response.data.data.shop_product_variants.handle}`,
        );
      }
    } catch (error) {
      console.log('error getsingleProduct data', error.message);
    }
  };

  const addToCart = async (productId, id) => {
    console.log('aaaazzzzziddd', productId, id);
    console.log('before', selectedProduct);
    dispatch(
      UserAction.setToastedAlert({
        condition: true,
        toastedAlertText: `${response.data.message}`,
      }),
    );
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `https://stage-api.boppogo.com/auth/api/v1/customer/add-update-cart`;
      console.log('categorydetailurl', url);
      const response = await axios.post(
        url,
        {
          productId: id,
          productVariantId: productId,
          productQuantity: 1,
        },
        {
          headers: {
            Authorization: BearerToken,
            origin: ORIGIN,
          },
        },
      );
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        setSelectedProduct(response.data.data);
        getSingleProduct();
        // navigateToCartPage();
        console.log(
          `response of add to card product by id  ${response.data.message}`,
        );
      }
      console.log('after', selectedProduct);
    } catch (error) {
      console.log('error add to card data', error.message);
    }
  };

  console.log('oooooooooooooo', selectedProduct);

  const handleGoBack = () => {
    navigation.goBack();
    console.log('data');
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return {
    renderTopBar,
    openCustomView,
    navigateToCheckOut,
    handleGoBack,
    navigateToCartPage,
    selectedProduct,
    addToCart,
  };
};
export {ProductDetailViewHooks};
