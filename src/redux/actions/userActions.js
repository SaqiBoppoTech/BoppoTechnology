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