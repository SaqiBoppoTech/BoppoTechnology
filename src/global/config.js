export const BASE_URL = `https://stage-api.boppogo.com`;
let AUTH = '/auth/api/v1';
export const TOKEN = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzA0MjU3OTI0LCJleHAiOjE3MDQzNDQzMjQsImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.blR8GzzXMrpvVc734SrpsBd-1qGHnKvSNVVLJt7nMe3yCZGXvorCRaM_Jpz9_tkYcni03ncPVKfa7rT1OhGkTZ65lX6NyO61JnRumeu1xnFXsF0QTLzUlpZWkttpWSh0ID6XdyekKzfSh2cdoHYo2qIIS4MVRsAzbyD-E4IyIAYn3vO45YCEWMCl-Gf5J4A6tOPbfns3p-8l7YOSv-daByX7SEWbMG2jWGU8JslrwDL5uEevXhY4cdMqks8aVBMGyI8TTCIysaHVxqObGO9gHHdFJe2FlIkKurkr5hNk0XepEWmJ0fxeoa_FgHGlDUNEweM2VBS_fyG-UyGPqxG6Gw`;
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

export const BearerToken = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzA0MjU3OTI0LCJleHAiOjE3MDQzNDQzMjQsImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.blR8GzzXMrpvVc734SrpsBd-1qGHnKvSNVVLJt7nMe3yCZGXvorCRaM_Jpz9_tkYcni03ncPVKfa7rT1OhGkTZ65lX6NyO61JnRumeu1xnFXsF0QTLzUlpZWkttpWSh0ID6XdyekKzfSh2cdoHYo2qIIS4MVRsAzbyD-E4IyIAYn3vO45YCEWMCl-Gf5J4A6tOPbfns3p-8l7YOSv-daByX7SEWbMG2jWGU8JslrwDL5uEevXhY4cdMqks8aVBMGyI8TTCIysaHVxqObGO9gHHdFJe2FlIkKurkr5hNk0XepEWmJ0fxeoa_FgHGlDUNEweM2VBS_fyG-UyGPqxG6Gw`;
export const ORIGIN = 'http://stage-api.boppogo.com';
