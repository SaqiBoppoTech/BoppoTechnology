import * as actionTypes from '../actionTypes/actionType';
const initialState = {
  toastedAlert: {
    condition: false,
    toastedAlertText: '',
    loginWith: {
      condition: false,
      text: '',
    },
  },
  alertData: {
    alertVisibility: false,
    message: '',
    description: '',
    leftText: '',
    rightText: '',
    rightEvent: () => {},
    leftEvent: () => {},
  },
  globalLoader: false,
  globalAppData: null,
  mobileNumberData: {
    country_code: '+91',
    mobileNumber: '',
    email: '',
    registerSessionToken: '',
    otp: '',
    firstname: '',
    lastname: '',
    password: '',
  },
  checkoutData: '',
  userData: {},
  changePasswordData: null,
};
const user = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case actionTypes.SET_USER_DATA:
      return {
        ...state,
        userData: payload,
      };
    case actionTypes.SET_TOASTED_ALERT:
      return {
        ...state,
        toastedAlert: payload,
      };
    case actionTypes.LOGIN_WITH:
      return {
        ...state,
        loginWith: payload,
      };
    case actionTypes.APP_DATA:
      return {
        ...state,
        globalAppData: payload,
      };
    case actionTypes.ALERT_DATA:
      return {
        ...state,
        alertData: payload,
      };
    case actionTypes.GLOBAL_LOADER:
      return {
        ...state,
        globalLoader: payload,
      };
    case actionTypes.CHANGEPASS_ALERT:
      return {
        ...state,
        changePasswordData: payload,
      };
    case actionTypes.MOBILE_NUMBER:
      return {
        ...state,
        mobileNumberData: payload,
      };
    case actionTypes.CHECKOUT_DATA:
      return {
        ...state,
        checkoutData: payload,
      };
    default:
      return state;
  }
};
export default user;
