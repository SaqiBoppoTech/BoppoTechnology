export const BASE_URL = `https://stage-api.boppogo.com`;
let AUTH = '/auth/api/v1';
export const TOKEN =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzAzMDU0MjY0LCJleHAiOjE3MDMxNDA2NjQsImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.sMOqNrgMGRngQRUdyIj5p65bVoMuj-r2f73b9O8M0BfYGe3BHYDULHOlX2bjNVc80wUuS83CWx5NuHUXKfLHuSRr9CeellWb7dO2n_8yuG1Scj7dvIhWl0aVA5xqeWjcBdkYe0BCkIL-egvC1uN5dnWRZioYljKJ6Mu5ycH11ESJ6drF7rdatQSKAlzbI6ckZj-0Zl2OvOzSF7qW1fxQer2JookqiqZ5Okv_Z1lrds4yE-s5n5QhK96CCwSZC9RstxLyVfp_EnfhkQnrr9GQQHEO02y2TKsCM41luw8gHAYMfewBmhL4PUCMH5jh7L8DPeoY6SsG0KwEFXPosd2yUA';
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

export const BearerToken =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzAzMDU0MjY0LCJleHAiOjE3MDMxNDA2NjQsImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.sMOqNrgMGRngQRUdyIj5p65bVoMuj-r2f73b9O8M0BfYGe3BHYDULHOlX2bjNVc80wUuS83CWx5NuHUXKfLHuSRr9CeellWb7dO2n_8yuG1Scj7dvIhWl0aVA5xqeWjcBdkYe0BCkIL-egvC1uN5dnWRZioYljKJ6Mu5ycH11ESJ6drF7rdatQSKAlzbI6ckZj-0Zl2OvOzSF7qW1fxQer2JookqiqZ5Okv_Z1lrds4yE-s5n5QhK96CCwSZC9RstxLyVfp_EnfhkQnrr9GQQHEO02y2TKsCM41luw8gHAYMfewBmhL4PUCMH5jh7L8DPeoY6SsG0KwEFXPosd2yUA';
