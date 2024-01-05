export const BASE_URL = `https://stage-api.boppogo.com`;
let AUTH = '/auth/api/v1';
export const TOKEN = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzA0NDI4OTM5LCJleHAiOjE3MDQ1MTUzMzksImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.fDrl5ZskV6zidblO_faXnXdKethyTZKIyzmwhHSuhc8zcjTKT7ROzpIXpFyYiuKiPBbvb2gVZtovVQCNKUwHfZSvST1yh00W1J1FQQRdTla_kyUwbhhyH5UXSukCUE6bJF04VUgbtZ0Wb4D95JxE7_q662RooWSYpJG3C1vuSvtWHUJclzyFwtBhXSVCJX-hLKLL9Y1hAXVm_1cNkV9L1eohy0EjCwAJ00iLGYyA1GjxHNiW8yKLdksx3jHm0EFz_anwKVAw06x8gw6oGRJbZxGF79kjyoT2H2VJFu5hY6CVvJbUEwgV1qkjUJVSuPlszg5rYR9v0TB8dN5cf7dcCg`;
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

export const BearerToken = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzA0NDI4OTM5LCJleHAiOjE3MDQ1MTUzMzksImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.fDrl5ZskV6zidblO_faXnXdKethyTZKIyzmwhHSuhc8zcjTKT7ROzpIXpFyYiuKiPBbvb2gVZtovVQCNKUwHfZSvST1yh00W1J1FQQRdTla_kyUwbhhyH5UXSukCUE6bJF04VUgbtZ0Wb4D95JxE7_q662RooWSYpJG3C1vuSvtWHUJclzyFwtBhXSVCJX-hLKLL9Y1hAXVm_1cNkV9L1eohy0EjCwAJ00iLGYyA1GjxHNiW8yKLdksx3jHm0EFz_anwKVAw06x8gw6oGRJbZxGF79kjyoT2H2VJFu5hY6CVvJbUEwgV1qkjUJVSuPlszg5rYR9v0TB8dN5cf7dcCg`;
export const ORIGIN = 'http://stage-api.boppogo.com';
