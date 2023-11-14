import React from 'react';

import {enableScreens} from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors, Constant, Fonts, ScreenNames} from '../global';
import SplashScreen from '../screen/SpashScreen';
import BottomTabs from './BottomTabs/BottomTabs';
import ProductDetailViewScreen from '../screen/ProductDetailView/ProductDetailViewScreen';
import BillingAddressScreen from '../screen/BillingAddress/BillingAddressScreen';
import DelieveryAddressScreen from '../screen/DeliveryAddress.js/DelieveryAddressScreen';
import MyAddressScreen from '../screen/MyAddress/MyAddressScreen';
import AddNewAddress from '../screen/AddNewAddress/AddNewAddressScreen';
import CurrencyScreen from '../screen/Currency/CurrencyScreen';
import NotificationSettings from '../screen/NotificationSettings/NotificationSettingScreen';
import SellWithUsScreen from '../screen/SellWithUs/SellWithUsScreen';
import PrivacyPolicyScreen from '../screen/PrivacyPolicy/PrivacyPolicyScreen';
import RefundPolicyScreen from '../screen/RefundPolicy/RefundPolicyScreen';
import ShippingPolicyScreen from '../screen/ShippingPolicy/ShippingPolicyScreen';
import TermsAndConditonsScreen from '../screen/TermsOfService/TermsOfServiceScreen';
import ContactUsScreen from '../screen/ContactUs/ContactUsScreen';
import MyReviewsScreen from '../screen/MyReviews/MyReviewsScreen';
import MyQuestionAnswerScreen from '../screen/MyQuestion&Answer/MyQuestionAnswerScreen';
import EditProfileScreen from '../screen/EditProfile/EditProfileScreen';
import WishlistScreen from '../screen/Wishlist/WishlistScreen';
import OnBoardingScreen from '../screen/OnBoarding/OnBoardingScreen';
import LoginScreen from '../screen/Login/LoginScreen';
import CreateAccountScreen from '../screen/CreateAccount/CreateAccountScreen';
import VerifyMobileNumberScreen from '../screen/VerifyMobileNumberScreen/VerifyMobileNumberScreen';
import EmailVerifyScreen from '../screen/VerifyEmail/VerifyEmailScreen';
import ForgetPasswordScreen from '../screen/ForgetPassword/ForgetPasswordScreen';
import ForgetPasswordOtpScreen from '../screen/ForgetPasswordOtp/ForgetPasswordOtpScreen';
import SuccessScreen from '../screen/SuccessScreen/SuccessScreen';
import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../global/constant';
import OrderDetailsScreen from '../screen/OrderDetails/OrderDetailsScreen';
import OrderScreen from '../screen/Order/OrderScreen';
import CancelReturnDetailScreen from '../screen/Cancel-ReturnDetails/Cancel-ReturnDetailScreen';
import QuestionDetailScreen from '../screen/QuestionDetailView/QuestionDetailScreen';
import CategoryDetailScreen from '../screen/CategoryDetail/CategoryDetailScreen';
import Filter from '../screen/Filter/FilterScreen';

enableScreens();
const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={ScreenNames.SPLASH_SCREEN}>
        <Stack.Screen
          name={ScreenNames.SPLASH_SCREEN}
          component={SplashScreen}
        />

        <Stack.Screen
          name={ScreenNames.ONBOARDING_SCREEN}
          component={OnBoardingScreen}
        />
        <Stack.Screen name={ScreenNames.BOTTOM_TAB} component={BottomTabs} />
        <Stack.Screen
          name={ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN}
          component={ProductDetailViewScreen}
        />
        <Stack.Screen
          name={ScreenNames.MY_ADDRESSES}
          component={MyAddressScreen}
        />
        <Stack.Screen
          name={ScreenNames.DELIEVERY_ADDRESS}
          component={DelieveryAddressScreen}
        />
        <Stack.Screen
          name={ScreenNames.BILLING_ADDRESS}
          component={BillingAddressScreen}
        />
        <Stack.Screen
          name={ScreenNames.ADD_NEW_ADDRESS}
          component={AddNewAddress}
        />
        <Stack.Screen
          name={ScreenNames.CURRENCY_SCREEN}
          component={CurrencyScreen}
        />
        <Stack.Screen
          name={ScreenNames.NOTIFICATION_SCREEN}
          component={NotificationSettings}
        />
        <Stack.Screen
          name={ScreenNames.SELL_WITH_US_SCREEN}
          component={SellWithUsScreen}
        />
        <Stack.Screen
          name={ScreenNames.PRIVACY_POLICY_SCREEN}
          component={PrivacyPolicyScreen}
        />
        <Stack.Screen
          name={ScreenNames.REFUND_POLICY_SCREEN}
          component={RefundPolicyScreen}
        />
        <Stack.Screen
          name={ScreenNames.SHIPPING_POLICY_SCREEN}
          component={ShippingPolicyScreen}
        />
        <Stack.Screen
          name={ScreenNames.TERMS_AND_CONDITION_SCREEN}
          component={TermsAndConditonsScreen}
        />
        <Stack.Screen
          name={ScreenNames.CONTACT_US_SCREEN}
          component={ContactUsScreen}
        />
        <Stack.Screen
          name={ScreenNames.MY_REVIEW_SCREEN}
          component={MyReviewsScreen}
        />
        <Stack.Screen
          name={ScreenNames.MY_QUESTION_ANSWER_SCREEN}
          component={MyQuestionAnswerScreen}
        />
        <Stack.Screen
          name={ScreenNames.EDIT_PROFILE_SCREEN}
          component={EditProfileScreen}
        />
        <Stack.Screen name={ScreenNames.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen
          name={ScreenNames.CREATE_NEW_ACCOUNT}
          component={CreateAccountScreen}
        />
        <Stack.Screen
          name={ScreenNames.VERIFY_MOBILE_NUMBER}
          component={VerifyMobileNumberScreen}
        />
        <Stack.Screen
          name={ScreenNames.VERIFY_EMAIL}
          component={EmailVerifyScreen}
        />
        <Stack.Screen
          name={ScreenNames.WISHLIST_SCREEN}
          component={WishlistScreen}
        />
        <Stack.Screen name={ScreenNames.ORDER_SCREEN} component={OrderScreen} />

        <Stack.Screen
          name={ScreenNames.ORDERDETAIL_SCREEN}
          component={OrderDetailsScreen}
        />

        <Stack.Screen
          name={ScreenNames.CANCELRETURNDETAIL_SCREEN}
          component={CancelReturnDetailScreen}
        />
        <Stack.Screen
          name={ScreenNames.FORGET_PASSWORD_SCREEN}
          component={ForgetPasswordScreen}
        />
        <Stack.Screen
          name={ScreenNames.FORGET_PASSWORD_OTP_SCREEN}
          component={ForgetPasswordOtpScreen}
        />
        <Stack.Screen
          name={ScreenNames.SUCCESS_SCREEN}
          component={SuccessScreen}
        />
        <Stack.Screen
          name={ScreenNames.MOBILE_OTP_SCREEN}
          component={VerifyMobileNumberScreen}
        />
        <Stack.Screen
          name={ScreenNames.QUESTION_DETAIL_VIEW}
          component={QuestionDetailScreen}
        />
        <Stack.Screen name={ScreenNames.FILTER} component={Filter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;

const styles = StyleSheet.create({
  toastedContainer: {
    height: CHANGE_BY_MOBILE_DPI(81),
    width: Constant.SCREEN_WIDTH - 40,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
    backgroundColor: Colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toastedFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.LATO_BOLD,
    color: Colors.WHITE,
    includeFontPadding: false,
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(20),
    lineHeight: CHANGE_BY_MOBILE_DPI(20),
  },
  positionContainer: {
    position: 'absolute',
    bottom: CHANGE_BY_MOBILE_DPI(20),
  },
});
