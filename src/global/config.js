export const BASE_URL = `https://stage-api.boppogo.com`;
let AUTH = '/auth/api/v1';
export const TOKEN =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVqd2FsLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI5OTg3Nzc5NDA3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMjg4Mzg5MywiZXhwIjoxNzAyOTcwMjkzLCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.qBwfjqZZV5KmcvOSZaGwqq2Xn7XCcdQpCOiqDjIJghoQF6boWBz6EB2NYfnKccuC_eTbIA4Npj5HR5ME3I5P1N7uKj34ZdhG52PQqJ3eOUdg74Mzagax5xGHQYnYs3a_57F_RZKZUwW8QPSR3nVfM7d4Ijs9mRxemj2t19YqAe6NGV2gqPinxR7vvrpZP4LzcqttVkTulT6NfgaeU8qFAH0K0K9oq_Dr9AS3ZDLGKij2pgQZDC4yUM82hYGDSPHsvCQ9kOEmuh6gxNfP-gxzlpCFQfii9XaBXXduvrLB2gkLZq7SWev9rVaj26uEkKAWm_XHahXZRAzcexqkq78Skg';
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
