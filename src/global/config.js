export const BASE_URL = `https://stage-api.boppogo.com`;
let AUTH = '/auth/api/v1';
export const TOKEN =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzAzMDU1NDc1LCJleHAiOjE3MDMxNDE4NzUsImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.cLxeMPQDB5SvibYziopEr54epSH0yCUBMduIwqFRGbieAebDu8gL21c-4B_6WBR2XIfndRirOOgUDIgdWsoe1s8BHKHyi9NMf-yw-OSA-QZTqMYnmpB50eZZWV7ii-DmsE3Pb8rL0Po8oH5FXsyto4NzbvpBZ8OKsg_IqZNrqnsRVKox5IYAeqmSHJk7qAL0vt-TdEtP6HuvRqWFMGN6l_JVzGm1pBAlvFM5dEtgLuxIXjO7yT3XKOxl1czlv_ph0qJYfJsQHAxR_LGENzZYKvvWj4vs5fbAhKhazQ2pABRzQZza9aC2TtZ8ZYUMmS8qcnF2e0-c4Urz7oygIn-heA';
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
