import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import {useEffect, useState} from 'react';
import axios from 'axios';

const YourCartHook = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const wishListClick = () => {};
  const removeFromCart = () => {};
  const navigateToProductScreen = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };
  const navigateToOrderSummary = () => {
    navigation.navigate(ScreenNames.ORDER_SUMMARY_SCREEN);
  };

  ///API CODE
  const [cartListData, setCartListData] = useState(null);

  const getCartListData = async () => {
    try {
      let url = `https://stage-api.boppogo.com/auth/api/v1/customer/get-cart`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVqd2FsLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI5OTg3Nzc5NDA3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMjUzMjY4MSwiZXhwIjoxNzAyNjE5MDgxLCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.QVkVZ6klfZBYF1PC84BL6Y0kqqGBzUrV6OC3EkHdkQP3ZLgPEh_PoHcqXQRcPPmYpcGWNnGNGwPpzQcByRA4AUX0NNM8YUORlttur_EKvIpegcB2t3dQOC-l_n6Bz8jhyMg6RPHAlA6WMWzjHMOh1zaZF8zNiPS1YqqdRgusTpBtDvtt3jYzbOEUya0TAuIIwaPwAWaJSpTJFcY3V8vdwuQa9AmN3mlusP-EsJ7lHO9uLS2yU2XwsTMizGZ6DWazX6gyh3TKDsj3pfOsgqCjWu5xMjc-Vw6nlBRywO7LnJGfM_SEO30bWILUHt1wF2ERvsNCOU66Yd1dT-WDm7z-eg`,
        },
      });
      setCartListData(response.data.data.customerCartDetails);
    } catch (error) {
      console.log('error getCartList', error.message);
    }
  };

  ///API CODE OF DELETECART
  const deleteCartListData = async id => {
    try {
      let url = `https://stage-api.boppogo.com/auth/api/v1/customer/delete-cart-items/${id}`;
      const response = await axios.delete(url, {
        headers: {
          Authorization: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVqd2FsLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI5OTg3Nzc5NDA3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMjU0ODIxMSwiZXhwIjoxNzAyNjM0NjExLCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.OEWV0HwknoQkeIF5Gvph85wpyzEOlS85xgENd3pAQDoP4NG7jUr2yFBrJcNKhEkP0YYC71W293SaUDD0RK1Su2exTXDZymzVrmscOuDHn65z7vkJNb-kSVAAHDq9cjxBOm-BfZKKm5l606T92HbFvte7uE-vJa5XxeIbgKRCmHjO4RICqoCNUAZOugA1B07nG5brVBb0K8esX5V6ITIyIOP12xBOhmI8SsZGny6YaSi-uO1dHCS-MC8Nd-NTRnoN1wHXeSJEnGyTko1xHlqVYSK4MjaJSAASUyjXnBpCHeCN7nMSoueDoH-3iQYbzHJmJPprlthPAyHswU09AOtFRg`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log('error deleteCartList', error.message);
    }
  };

  ///API OF ADDTOWISHLIST
  const addToWishList = async (productID, productVariantId) => {
    console.log(productID, productVariantId);
    try {
      const url = `https://stage-api.boppogo.com/auth/api/v1/customer/add-wishlist`;
      const response = await axios.post(
        url,
        {
          productId: productID,
          productVariantId: productVariantId,
        },
        {
          headers: {
            Authorization: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVqd2FsLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI5OTg3Nzc5NDA3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMjU0ODIxMSwiZXhwIjoxNzAyNjM0NjExLCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.OEWV0HwknoQkeIF5Gvph85wpyzEOlS85xgENd3pAQDoP4NG7jUr2yFBrJcNKhEkP0YYC71W293SaUDD0RK1Su2exTXDZymzVrmscOuDHn65z7vkJNb-kSVAAHDq9cjxBOm-BfZKKm5l606T92HbFvte7uE-vJa5XxeIbgKRCmHjO4RICqoCNUAZOugA1B07nG5brVBb0K8esX5V6ITIyIOP12xBOhmI8SsZGny6YaSi-uO1dHCS-MC8Nd-NTRnoN1wHXeSJEnGyTko1xHlqVYSK4MjaJSAASUyjXnBpCHeCN7nMSoueDoH-3iQYbzHJmJPprlthPAyHswU09AOtFRg`,
          },
        },
      );
      console.log(response.data);
    } catch (error) {
      console.log('error Add to WishList', error.message);
    }
  };

  useEffect(() => {
    getCartListData();
  }, [deleteCartListData]);

  return {
    handleGoBack,
    wishListClick,
    removeFromCart,
    navigateToProductScreen,
    navigateToOrderSummary,
    cartListData,
    deleteCartListData,
    addToWishList,
  };
};

export default YourCartHook;
