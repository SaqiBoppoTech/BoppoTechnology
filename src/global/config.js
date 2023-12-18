export const BASE_URL = `https://stage-api.boppogo.com`;
let AUTH = '/auth/api/v1';
export const TOKEN =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVqd2FsLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI5OTg3Nzc5NDA3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMjg4MTQyOCwiZXhwIjoxNzAyOTY3ODI4LCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.d2uaoZjd032mxzS4gVRhdhYOYC6IZhuibcLAMJkx_w47-3p-R5zdtw4udMpTS9EcHyQ3IlWVGLEUPmqcbUu_0Mutm4gmXLklpOIHDCq8uGIPp_m0Ln4iRrb_ckCS2Goh3C_LNIwYm7-_pfMLjLFqzflLLvnUXap3k5AD3M1eIuKnPH92iQBUYWRXpuTGGCp2NGfl1scHuQd-2MRNeLQzJk_ookeLoENobYT-bgPw_PzFpuk_ItqPZpkXOgYakEZb_EKw-pHRaCRvFYJtqsikU62zVcaRoLoYPRnVgPFMj1Bt2kCrC-6s0HXsJ9wienC2VZHHw3tt9V8OkllOhY_1QA';
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
