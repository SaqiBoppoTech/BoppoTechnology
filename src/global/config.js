export const BASE_URL = `https://stage-api.boppogo.com`;
let AUTH = '/auth/api/v1';
export const TOKEN = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzA0MzQzMjg2LCJleHAiOjE3MDQ0Mjk2ODYsImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.fze8jOdLHq1IUaB3ZHhtvGJ5eUmD6-NJ9VGo_B9-5ko9pWgeUx5w_sKxACONNe_373RJazLFsbwArTLS809kZIJoyTqyYZTxeLW868n1sNsYVLYONevAORwPjeTvwUUcFeokCO3TLXMMWIYZbSXrWprxN-xaBRV3KlJcqDodez1C3fIEgfV2ifanlFxHE_E16NzzGsZDlsJ8RBFxjcKL4GXTAQ3kxq0Kvjc50WgH1q6uzeECpiIqTZmgsRJwzaMPx8tKgkTXcmkBizHuoDX0T0jI5ZP2G1e3rUw51zG3kWES26qoNGbuZy7A93YF9N6jThO33k1tAPB_LTHG_V7ERg`;
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

export const BearerToken = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzA0MzQzMjg2LCJleHAiOjE3MDQ0Mjk2ODYsImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.fze8jOdLHq1IUaB3ZHhtvGJ5eUmD6-NJ9VGo_B9-5ko9pWgeUx5w_sKxACONNe_373RJazLFsbwArTLS809kZIJoyTqyYZTxeLW868n1sNsYVLYONevAORwPjeTvwUUcFeokCO3TLXMMWIYZbSXrWprxN-xaBRV3KlJcqDodez1C3fIEgfV2ifanlFxHE_E16NzzGsZDlsJ8RBFxjcKL4GXTAQ3kxq0Kvjc50WgH1q6uzeECpiIqTZmgsRJwzaMPx8tKgkTXcmkBizHuoDX0T0jI5ZP2G1e3rUw51zG3kWES26qoNGbuZy7A93YF9N6jThO33k1tAPB_LTHG_V7ERg`;
export const ORIGIN = 'http://stage-api.boppogo.com';
