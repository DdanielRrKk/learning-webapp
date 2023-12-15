import {createContext, useReducer} from 'react';
import {login, register} from '../api/auth.services';

export const AuthContext = createContext();

const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_REJECTED = 'LOGIN_REJECTED';
const LOGOUT = 'LOGOUT';
const REGISTER_PENDING = 'REGISTER_PENDING';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_REJECTED = 'REGISTER_REJECTED';

function reducer(state, action) {
	switch (action.type) {
		case LOGIN_PENDING:
			return {
				...state,
				status: 1,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				status: 2,
				user: action.user,
				error: null,
			};
		case LOGIN_REJECTED:
			return {
				...state,
				status: 0,
				user: null,
				error: action.error,
			};
		case LOGOUT:
			return {
				...state,
				status: 0,
				user: null,
				error: null,
			};
		case REGISTER_PENDING:
			return {
				...state,
				status: 1,
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				status: 2,
				user: action.user,
				error: null,
			};
		case REGISTER_REJECTED:
			return {
				...state,
				status: 0,
				user: null,
				error: action.error,
			};
		default:
			return state;
	}
}

const initialState = {
	status: 0, // 0 - rejected, 1 - pending, 2 - resolved
	user: null,
	error: null,
};

function AuthProvider(props) {
	const [state, dispatch] = useReducer(reducer, initialState);

	async function doLogin(email, password) {
		try {
			dispatch({type: LOGIN_PENDING});
			const result = await login(email, password);
			dispatch({type: LOGIN_SUCCESS, user: result, error: null});
		} catch (error) {
			dispatch({type: LOGIN_REJECTED, error});
		}
	}

	async function doLogout() {
		try {
			dispatch({tyle: LOGOUT});
		} catch (error) {
			dispatch({type: LOGIN_REJECTED, error});
		}
	}

	async function doRegister(firstName, lastName, phone, email, password) {
		try {
			const user = {
				firstName,
				lastName,
				phone,
				email,
				password,
			};
			dispatch({type: REGISTER_PENDING});
			const result = await register(user);
			dispatch({type: REGISTER_SUCCESS, user: result, error: null});
		} catch (error) {
			dispatch({type: REGISTER_REJECTED, error});
		}
	}

	return (
		<AuthContext.Provider value={{state, doLogin, doLogout, doRegister}}>
			{props.children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
