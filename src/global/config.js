export const BASE_URL = `https://stage-api.boppogo.com`;
let AUTH = '/auth/api/v1';
let ORDER = '/order/api/v1';
let PRODUCT = '/product/api/v1';
let PAYMENT = '/payment/api/v1';
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
  ADD_CART: `${AUTH}/customer/add-update-cart`,
  DELETE_WISHLIST: `${AUTH}/customer/delete-wishlist-items`,
  GET_CART: `${AUTH}/customer/get-cart`,
  PROFILE: `${AUTH}/customer/profile`,
  ORDER: `${ORDER}/customer/orders`,
  ORDER_BY_ID: `${ORDER}/customer/order`,
  CANCEL_ORDER: `${ORDER}/customer/cancel-order`,
  CHANGE_ADDRESS: `${ORDER}/checkout/customer/change-address`,
  CHANGE_PAYMENT: `${ORDER}/checkout/customer/change-payment`,
  CREATE_ORDER: `${ORDER}/customer/create-order`,
  CHECKOUT_INFO: `${ORDER}/checkout/customer`,
  CREATE_CHECKOUT: `${ORDER}/checkout/customer/create-checkout`,
  CATEGORIES: `${PRODUCT}/customer/collection/menu`,
  CATEGORIESBYID: `${PRODUCT}/customer/collection/get-collection`,
  SINGLE_PRODUCT_BY_ID: `${PRODUCT}/product`,
  LOGOUT: `${AUTH}//customer/logout`,
  SAVEADDRESS: `${AUTH}/customer/save-address`,
  EDITADDRESS: `${AUTH}/customer/edit-address`,
  GETADDRESSLIST: `${AUTH}/customer/get-address-list`,
  REMOVEADDRESS: `${AUTH}/customer/remove-address}`,
  ADD_TO_CART: `${AUTH}/customer/add-update-cart`,
  DELETE_FROM_CART: `${AUTH}/customer/delete-cart-items`,
  ADD_WISHLIST: `${AUTH}/customer/add-wishlist`,
  PAYMENT_PROVIDER: `${PAYMENT}/providers/shop-payment-providers`,
  CHANGE_PASSWORD: `${AUTH}/customer/change-password`,
  VERIFY_OTP_CHANGE_PASSWORD: `${AUTH}/customer/verify-otp-change-password`,
  CHANGE_CONTACT_NUMBER : `${AUTH}/customer/change-contact-no`,
  VERIFY_OTP_CHANGE_CONTACT_NUMBER : `${AUTH}/customer/verify-otp-change-contact-no`
};

export const BearerToken = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZGFzaGl2LnJAYm9wcG90ZWNobm9sb2dpZXMuY29tIiwiY29udGFjdF9ubyI6Ijc5MDAwMjk1NjUiLCJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzA0NjkwMzIyLCJleHAiOjE3MDQ3NzY3MjIsImF1ZCI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UiLCJpc3MiOiJCb3BwbyBHbyIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UifQ.Y9NaQ7AXsSMwbGThcEha-A3ljTEqYD8HHsZ3tKmrwsji7It6uVhjmeTgtO-sdBkI0OiL479sewzceFO3ro3qIlfN9V2wmdKFEjA3SeZ9wJ9jEOmi83f6_HJXVOuFKYQwiWXynPNYnpVX1TRXsks8KKJmnGyRAx_AM_Jy177xnkWAJdZrXCO5rchUPCDYm3sfix6GKs3W6NtBQD1Ea9-3cgz6nfHCJN7KcRS9AGzjvh4ZMAM28WDiYxt8ySROVOrVQBzjL3Pt9bx2h_vT26Cek7KCNJVUF_5hPbaHQWr-6zP9flAObQ9R92sxsZVSSqFlDaeAAVQpkVpjsR_DXrqOsg`;
export const ORIGIN = 'http://stage-api.boppogo.com';
