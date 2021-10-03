import { combineReducers } from "redux";

const initialState = {
	//initial state digunakan jika state awal kosong
	name: "Dendy haidar Rinaldi",
};

const intialStateRegister = {
	form: {
		username: "",
		email: "",
		password: "",
	},
	title: "Register Page",
	desc: "ini desc untuk Register",
};
const USER_DATA = {
	user: [],
};

const RegisterReducer = (state = intialStateRegister, action) => {
	if (action.type === "SET_TITLE") {
		return {
			...state,
			title: "Register Ganti Title",
		};
	}

	if (action.type === "SET_FORM") {
		return {
			...state,
			form: {
				...state.form,
				[action.inputType]: action.inputValue,
			},
		};
	}
	return state;
};

const LoginReducer = (state = USER_DATA, action) => {
	switch (action.type) {
		case "DO_LOGIN":
			state.user = action.payload.user;
		case "DO_LOGOUT":
		default:
			return state;
	}
};

export default combineReducers({
	RegisterReducer,
	login: LoginReducer,
});
