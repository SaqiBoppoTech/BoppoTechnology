import * as actionTypes from '../actionTypes/actionType';
export const setUserData = payload => ({
  type: actionTypes.SET_USER_DATA,
  payload,
});
export const setToastedAlert = payload => ({
  type: actionTypes.SET_TOASTED_ALERT,
  payload,
});
export const setLoginWithEmailOrMobileNumber = payload => ({
  type: actionTypes.LOGIN_WITH,
  payload,
});
export const setAppData = payload => ({
  type: actionTypes.APP_DATA,
  payload,
});
export const setMobileNumberData = payload => ({
  type: actionTypes.MOBILE_NUMBER,
  payload,
});
export const setGlobalLoader = payload => ({
  type: actionTypes.GLOBAL_LOADER,
  payload,
});
export const setAlertData = payload => ({
  type: actionTypes.ALERT_DATA,
  payload,
});
export const setChangePasswordOtp = payload => ({
  type: actionTypes.CHANGEPASS_ALERT,
  payload,
});
export const setCheckoutData = payload => ({
  type: actionTypes.CHECKOUT_DATA,
  payload,
});
export const setChangeMobileOtp = payload => ({
  type: actionTypes.CHANGEMOBILE_ALERT,
  payload,
});
export const setChangeMobileOtpToken = payload => ({
  type: actionTypes.CHANGEMOBILETOKEN_ALERT,
  payload,
});
export const setLogoutToken = payload => ({
  type: actionTypes.LOGOUT_TOKEN,
  payload,
});
export const setorderId = payload => ({
  type: actionTypes.ORDER_ID,
  payload,
});
