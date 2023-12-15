import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {API_END_POINT, BASE_URL, TOKEN} from '../../global/config';

const WishListHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const addToCartPress = () => {};
  const removeFromCart = () => {};
  const navigateToProductScreen = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };

  const navigateToCartPage = () => {
    navigation.navigate(ScreenNames.YOUR_CART_SCREEN);
  };

  ///API CODE GETWISHLIST
  const [wishListData, setWishListData] = useState(null);

  const getWishListData = async () => {
    try {
      let url = `https://stage-api.boppogo.com/auth/api/v1/customer/get-wishlist`;
      const response = await axios.get(url, {
        headers: {
          Authorization: TOKEN,
        },
      });
      setWishListData(response.data.data.customerWishlistDetails);
    } catch (error) {
      console.log('error getWishList', error.message);
    }
  };

  ///API CODE OF DELETEWISHLIST
  const deleteWishListData = async id => {
    try {
      let url = `https://stage-api.boppogo.com/auth/api/v1/customer/delete-wishlist-items/${id}`;
      const response = await axios.delete(url, {
        headers: {
          Authorization: TOKEN,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log('error deleteWishList', error.message);
    }
  };

  ///API OF ADDTOCART
  const addToCart = async (productID, productVariantId, productQuantity) => {
    console.log(productID, productVariantId);
    try {
      const url = `https://stage-api.boppogo.com/auth/api/v1/customer/add-update-cart`;
      const response = await axios.post(
        url,
        {
          productId: productID,
          productVariantId: productVariantId,
          productQuantity: 1,
        },
        {
          headers: {
            Authorization: TOKEN,
          },
        },
      );
      console.log(response.data);
    } catch (error) {
      console.log('error Add to Cart', error.message);
    }
  };

  useEffect(() => {
    getWishListData();
  }, [deleteWishListData]);

  return {
    handleGoBack,
    addToCartPress,
    removeFromCart,
    navigateToProductScreen,
    navigateToCartPage,
    wishListData,
    deleteWishListData,
    addToCart,
  };
};

export default WishListHooks;
