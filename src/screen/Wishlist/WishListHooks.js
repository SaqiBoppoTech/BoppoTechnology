import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {API_END_POINT, BASE_URL} from '../../global/config';

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
          Authorization: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVqd2FsLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI5OTg3Nzc5NDA3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMjUzMjY4MSwiZXhwIjoxNzAyNjE5MDgxLCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.QVkVZ6klfZBYF1PC84BL6Y0kqqGBzUrV6OC3EkHdkQP3ZLgPEh_PoHcqXQRcPPmYpcGWNnGNGwPpzQcByRA4AUX0NNM8YUORlttur_EKvIpegcB2t3dQOC-l_n6Bz8jhyMg6RPHAlA6WMWzjHMOh1zaZF8zNiPS1YqqdRgusTpBtDvtt3jYzbOEUya0TAuIIwaPwAWaJSpTJFcY3V8vdwuQa9AmN3mlusP-EsJ7lHO9uLS2yU2XwsTMizGZ6DWazX6gyh3TKDsj3pfOsgqCjWu5xMjc-Vw6nlBRywO7LnJGfM_SEO30bWILUHt1wF2ERvsNCOU66Yd1dT-WDm7z-eg`,
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
          Authorization: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVqd2FsLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI5OTg3Nzc5NDA3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMjUzMjY4MSwiZXhwIjoxNzAyNjE5MDgxLCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.QVkVZ6klfZBYF1PC84BL6Y0kqqGBzUrV6OC3EkHdkQP3ZLgPEh_PoHcqXQRcPPmYpcGWNnGNGwPpzQcByRA4AUX0NNM8YUORlttur_EKvIpegcB2t3dQOC-l_n6Bz8jhyMg6RPHAlA6WMWzjHMOh1zaZF8zNiPS1YqqdRgusTpBtDvtt3jYzbOEUya0TAuIIwaPwAWaJSpTJFcY3V8vdwuQa9AmN3mlusP-EsJ7lHO9uLS2yU2XwsTMizGZ6DWazX6gyh3TKDsj3pfOsgqCjWu5xMjc-Vw6nlBRywO7LnJGfM_SEO30bWILUHt1wF2ERvsNCOU66Yd1dT-WDm7z-eg`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log('error deleteWishList', error.message);
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
  };
};

export default WishListHooks;
