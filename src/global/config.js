export const BASE_URL = `https://stage-api.boppogo.com`;
let AUTH = '/auth/api/v1';
let ORDER = '/order/api/v1';
let PRODUCT = '/product/api/v1';
export const TOKEN = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzA0MTcwNzU1LCJleHAiOjE3MDQyNTcxNTUsImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.oMD0QIrjaAkqWSD8mSfNEE5NG6GqXpQGFLOWd_6x5m_7u6btvGhpKQ7NIsok10WjxL-3wjVYUOtO1duAuH93ssneAI2ZDQH0rWxU8FYOthw1DqaOvKtblyKHVmYNRtTZbtn54tCt3Za_ooqTd2zM9qsljy2KIGHl-HAxxPDlr5qADMZwG1Nt2mn_lh83saPbHOn1LorqntGyAZPe1Hb2dXxZe3wbuwnLEH3bh4j8ycB2aEqYcQ-_G_rlA3YSik3H2h4zV_9MBP4Rce-nzHvli_0QdbJHdfROjLxYfG7ATsSNKgU1uT_Qq8ZRWY4xtwlgbZfXAs-6R9w9O0ubWitRVA`;
export const CLIENT_ID = 'client_id=867748f4-2e27-445c-9ad1-069123dfb647';
export const API_END_POINT = {
  LOGIN_USER: `${AUTH}/customer/login`,
  VERIFY_OTP: `${AUTH}/customer/verify-otp`,
  RESEND_OTP: `${AUTH}/customer/resend-otp`,
  GET_RESEND_OTP: `${AUTH}/customer/resend-otp`,
  REGISTERATION: `${AUTH}/customer/register`,
  FORGOT_PASSWORD: `${AUTH}/customer/forget-password`,
  FORGOT_PASSWORD_OTP: `${AUTH}/customer/forget-password-verify-otp`,
  GET_WISHLIST: `${AUTH}/customer/get-wishlist`,
  GET_CART: `${AUTH}/customer/get-cart`,
  PROFILE: `${AUTH}/customer/profile`,
  ORDER: `${ORDER}/customer/orders`,
  ORDER_BY_ID: `${ORDER}/customer/order`,
  CANCEL_ORDER: `${ORDER}/customer/cancel-order`,
  CATEGORIES: `${PRODUCT}/customer/collection/menu`,
  CATEGORIESBYID: `${PRODUCT}/customer/collection/get-collection`,
  LOGOUT : `${AUTH}//customer/logout`
};

export const BearerToken = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzA0MTcwNzU1LCJleHAiOjE3MDQyNTcxNTUsImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.oMD0QIrjaAkqWSD8mSfNEE5NG6GqXpQGFLOWd_6x5m_7u6btvGhpKQ7NIsok10WjxL-3wjVYUOtO1duAuH93ssneAI2ZDQH0rWxU8FYOthw1DqaOvKtblyKHVmYNRtTZbtn54tCt3Za_ooqTd2zM9qsljy2KIGHl-HAxxPDlr5qADMZwG1Nt2mn_lh83saPbHOn1LorqntGyAZPe1Hb2dXxZe3wbuwnLEH3bh4j8ycB2aEqYcQ-_G_rlA3YSik3H2h4zV_9MBP4Rce-nzHvli_0QdbJHdfROjLxYfG7ATsSNKgU1uT_Qq8ZRWY4xtwlgbZfXAs-6R9w9O0ubWitRVA`;
export const ORIGIN = 'http://stage-api.boppogo.com';
