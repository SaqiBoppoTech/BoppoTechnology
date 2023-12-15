export const BASE_URL = `http://stage-api.boppogo.com`;
let AUTH = '/auth/api/v1';
export const TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVqd2FsLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI5OTg3Nzc5NDA3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMjYxNDYzMiwiZXhwIjoxNzAyNzAxMDMyLCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.c_n31qVq_pDaZj-41sl1m9O6HePpHKTVsEx1ZGdeV8w5lZ9vTiOLaA3wvrllsyHdfNPSIcvNx6dicoi4gXOVHAXVxXMolF2RxeghLLMqodo9ArSaZ0VQsMDyICWrxWuj6ZcHHHj3u_OaZE4DMfIWdW6wuwKfQVNQWpi3RuZBjqs-ZruaISJII0SxwCo9Y3h1SBoSpbKAmoZ1cnNRpjChlGI377qcLVZ7AOF3XuZeH2souMwQlvl4hNzlO-wWTFQeNZ9MT8GVlEEUVgUyF8XckzA-sOrOTgupKwoSRQGFOyBfffxGyben8OtDmWW_QSQH4H3dsPQxynpMfiX7WApyiQ'
// let HOME = '/home';
export const CLIENT_ID = 'client_id=867748f4-2e27-445c-9ad1-069123dfb647';
export const API_END_POINT = {
  LOGIN_USER: `${AUTH}/customer/login`,
  VERIFY_OTP: `${AUTH}/customer/verify-otp`,
  // RESEND_OTP: `${AUTH}/resendotp`,
  GET_RESEND_OTP: `${AUTH}/customer/resend-otp`,
  REGISTERATION: `${AUTH}/customer/register`,
  FORGOT_PASSWORD: `${AUTH}/customer/forget-password`,
  FORGOT_PASSWORD_OTP: `${AUTH}/customer/forget-password-verify-otp`,
  GET_WISHLIST:`${AUTH}/customer/get-wishlist`,
  GET_CART : `${AUTH}/customer/get-cart`
};
