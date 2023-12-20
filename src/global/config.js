export const BASE_URL = `https://stage-api.boppogo.com`;
let AUTH = '/auth/api/v1';
export const TOKEN =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVqd2FsLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI5OTg3Nzc5NDA3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMjk2MzQ4MiwiZXhwIjoxNzAzMDQ5ODgyLCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.qAnJ6a_4KvDCIrcriAg6jD0_ZH72BO33We0i0Vvk93pi2TIe4gIZxVg7tDplTQPNXPQ1mCSo2xyRJktsIdDU48YFRwcUmZZmZN5tVPhPxOiKRW4PKnR1ZxDp9o6uKYo5fL8sWgjv0CL8Hp9ikayM6m2aY2kYcRuAaOkl0jlCC8rN23T9caRqXIfCR9F0lL7YlU2SMpv8PMTnrW-RWmh-KlXs4XNa99Janpsaz85J1vTTak4jFzxb-uiUxq6k9M8KxRxOyBYiJajNXcgstYpOKqclk_W_yhBz2U7vDw4dEJODCDrUV3FEto-n5bKdbLpc3d-CDeDqHljPKi-4aE_9tA';
export const CLIENT_ID = 'client_id=867748f4-2e27-445c-9ad1-069123dfb647';
export const API_END_POINT = {
  LOGIN_USER: `${AUTH}/customer/login`,
  VERIFY_OTP: `${AUTH}/customer/verify-otp`,
  // RESEND_OTP: `${AUTH}/resendotp`,
  GET_RESEND_OTP: `${AUTH}/customer/resend-otp`,
  REGISTERATION: `${AUTH}/customer/register`,
  FORGOT_PASSWORD: `${AUTH}/customer/forget-password`,
  FORGOT_PASSWORD_OTP: `${AUTH}/customer/forget-password-verify-otp`,
  GET_WISHLIST: `${AUTH}/customer/get-wishlist`,
  GET_CART: `${AUTH}/customer/get-cart`,
};
