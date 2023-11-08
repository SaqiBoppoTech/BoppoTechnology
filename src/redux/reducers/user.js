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
		default:
			return state;
	}
};
export default user;