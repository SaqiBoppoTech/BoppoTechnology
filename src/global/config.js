export const BASE_URL = `https://stage-api.boppogo.com`;
let AUTH = '/auth/api/v1';
export const TOKEN = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzAzMTQ0NjA1LCJleHAiOjE3MDMyMzEwMDUsImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.XBiXDHYHGZOczgIar6Up-vWnXJSudl_HDpn75Zz-ffzzdMXsJvu5yhKxCqu4leAMe0Q4oqUbmBHhe4HqWIkL18_FpXpMxp6De3_0XnUdSDgUQ2cL-FkvHZXmuCEWCaeO6gU-vO1PkEG5SC86QEb2rStFYfNtdSKfEjsSqSP4OKKNvRRZ0HBoO4w6iX3DLsvIMvtHHK9n0ln-5HtIxQOYsiO5GaSNVFWNFFrbopHWGyc9uqJ8Wp9s8bkYj6PdTPN9jgweuvGlSYWpQ3g1tSoxUEi7g0THTY_9ueH6FdIiu19pej947WN2AwHESqP_JFmsHmc_uR6UhrZTT5LZUYfZpw`;
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

export const BearerToken = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzAzMTQ0NjA1LCJleHAiOjE3MDMyMzEwMDUsImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.XBiXDHYHGZOczgIar6Up-vWnXJSudl_HDpn75Zz-ffzzdMXsJvu5yhKxCqu4leAMe0Q4oqUbmBHhe4HqWIkL18_FpXpMxp6De3_0XnUdSDgUQ2cL-FkvHZXmuCEWCaeO6gU-vO1PkEG5SC86QEb2rStFYfNtdSKfEjsSqSP4OKKNvRRZ0HBoO4w6iX3DLsvIMvtHHK9n0ln-5HtIxQOYsiO5GaSNVFWNFFrbopHWGyc9uqJ8Wp9s8bkYj6PdTPN9jgweuvGlSYWpQ3g1tSoxUEi7g0THTY_9ueH6FdIiu19pej947WN2AwHESqP_JFmsHmc_uR6UhrZTT5LZUYfZpw`;
export const ORIGIN = 'http://stage-api.boppogo.com';
