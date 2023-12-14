import * as actionTypes from '../actionTypes/actionType';
const initialState = {
	userData: null,
	toastedAlert: {
		condition: false,
		toastedAlertText: '',
		loginWith: {
			condition: false,
			text: ''
		}
	},
	alertData: {
		alertVisibility: false,
		message: '',
		description: '',
		leftText: '',
		rightText: '',
		rightEvent: () => { },
		leftEvent: () => { }
	},
	globalLoader: false,
	globalAppData: null,
	mobileNumberData: {
		country_code: '+91',
		mobileNumber: '',
		email: '',
		registerSessionToken: '',
		otp: ''
	}
};
const user = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.SET_USER_DATA:
			return {
				...state,
				userData: payload,
			};
		case actionTypes.SET_TOASTED_ALERT:
			return {
				...state,
				toastedAlert: payload,
			};
		case actionTypes.LOGIN_WITH:
			return {
				...state,
				loginWith: payload,
			};
		case actionTypes.APP_DATA:
			return {
				...state,
				globalAppData: payload,
			};
		case actionTypes.ALERT_DATA:
			return {
				...state,
				alertData: payload,
			};
		case actionTypes.GLOBAL_LOADER:
			return {
				...state,
				globalLoader: payload,
			};
		case actionTypes.MOBILE_NUMBER:
			return {
				...state,
				mobileNumberData: payload,
			};
		default:
			return state;
	}
};
export default user;