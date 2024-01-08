export const BASE_URL = `https://stage-api.boppogo.com`;
let AUTH = '/auth/api/v1';
export const TOKEN = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzA0NjkwMzIyLCJleHAiOjE3MDQ3NzY3MjIsImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.Y9NaQ7AXsSMwbGThcEha-A3ljTEqYD8HHsZ3tKmrwsji7It6uVhjmeTgtO-sdBkI0OiL479sewzceFO3ro3qIlfN9V2wmdKFEjA3SeZ9wJ9jEOmi83f6_HJXVOuFKYQwiWXynPNYnpVX1TRXsks8KKJmnGyRAx_AM_Jy177xnkWAJdZrXCO5rchUPCDYm3sfix6GKs3W6NtBQD1Ea9-3cgz6nfHCJN7KcRS9AGzjvh4ZMAM28WDiYxt8ySROVOrVQBzjL3Pt9bx2h_vT26Cek7KCNJVUF_5hPbaHQWr-6zP9flAObQ9R92sxsZVSSqFlDaeAAVQpkVpjsR_DXrqOsg`;
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

export const BearerToken = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzA0NjkwMzIyLCJleHAiOjE3MDQ3NzY3MjIsImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.Y9NaQ7AXsSMwbGThcEha-A3ljTEqYD8HHsZ3tKmrwsji7It6uVhjmeTgtO-sdBkI0OiL479sewzceFO3ro3qIlfN9V2wmdKFEjA3SeZ9wJ9jEOmi83f6_HJXVOuFKYQwiWXynPNYnpVX1TRXsks8KKJmnGyRAx_AM_Jy177xnkWAJdZrXCO5rchUPCDYm3sfix6GKs3W6NtBQD1Ea9-3cgz6nfHCJN7KcRS9AGzjvh4ZMAM28WDiYxt8ySROVOrVQBzjL3Pt9bx2h_vT26Cek7KCNJVUF_5hPbaHQWr-6zP9flAObQ9R92sxsZVSSqFlDaeAAVQpkVpjsR_DXrqOsg`;
export const ORIGIN = 'http://stage-api.boppogo.com';
