export const BASE_URL = `https://stage-api.boppogo.com`;
let AUTH = '/auth/api/v1';
export const TOKEN = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzAzMjIzMDQ4LCJleHAiOjE3MDMzMDk0NDgsImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.oOkzuc7J-0vEyQbPR7LEvl4tHgob9wvtttwZ7EHKiCwrUCt0dUgO6MbvOhkrd-XcAlRR6YDMM2wre_DXHbRlPKTfObybeqa8UWoMRht_Xbt1U60wCK_r5drgL0cHxftrKi89kOF_GcyPgtc8MyYeue_khiK5or0Dx4jsX4F5tyMvroWJ7kAjh2ROYzGh9FZ55Ipx9HLXKREm9qwm3bVhaBOFol6K1zIYagp5_nyMKvL_67XFnHFl07b0SCVITcQsECpo14SxZk3DsusUEhKk8bR1D8bta6W9le9UXasA9b86azozYyqt9XclvHVJnSvVReDiOXOTgRYzJpYL4hMFWQ`;
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

export const BearerToken = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzAzMjIzMDQ4LCJleHAiOjE3MDMzMDk0NDgsImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.oOkzuc7J-0vEyQbPR7LEvl4tHgob9wvtttwZ7EHKiCwrUCt0dUgO6MbvOhkrd-XcAlRR6YDMM2wre_DXHbRlPKTfObybeqa8UWoMRht_Xbt1U60wCK_r5drgL0cHxftrKi89kOF_GcyPgtc8MyYeue_khiK5or0Dx4jsX4F5tyMvroWJ7kAjh2ROYzGh9FZ55Ipx9HLXKREm9qwm3bVhaBOFol6K1zIYagp5_nyMKvL_67XFnHFl07b0SCVITcQsECpo14SxZk3DsusUEhKk8bR1D8bta6W9le9UXasA9b86azozYyqt9XclvHVJnSvVReDiOXOTgRYzJpYL4hMFWQ`;
export const ORIGIN = 'http://stage-api.boppogo.com';
