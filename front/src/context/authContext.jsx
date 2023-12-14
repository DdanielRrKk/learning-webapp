import {createContext, useContext, useReducer} from 'react';
import {login, register} from '../api/auth.services';

export const AuthStateContext = createContext();
export const AuthDispatchContext = createContext();

function reducer(state, action) {
	switch (action.type) {
		case 'LOGIN':
			return doLogin(state, action.email, action.password);
	}
	return {...currentState, ...newState};
}

function useAuthState() {
	const context = useContext(AuthStateContext);
	if (!context) {
		throw new Error('useAuthState must be used in AuthProvider');
	}
	return context;
}
function useAuthDispatch() {
	const context = useContext(AuthDispatchContext);
	if (!context) {
		throw new Error('useAuthDispatch must be used in AuthProvider');
	}
	return context;
}

const initialState = {
	status: 0, // 0 - rejected, 1 - pending, 2 - resolved
	user: null,
	error: null,
};

function AuthProvider(props) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AuthStateContext.Provider value={state}>
			<AuthDispatchContext.Provider value={dispatch}>{props.children}</AuthDispatchContext.Provider>
		</AuthStateContext.Provider>
	);
}

async function doLogin(dispatch, email, password) {
	try {
		dispatch({status: 1});
		const result = await login(email, password);
		console.log('result', result);
		window.localStorage.setItem('user', JSON.stringify(result));
		dispatch({status: 2, user: result, error: null});
	} catch (error) {
		dispatch({status: 0, user: null, error});
	}
}

async function doLogout(dispatch) {
	try {
		window.localStorage.removeItem('user');
		dispatch(initialState);
	} catch (error) {
		dispatch({status: 0, user: null, error});
	}
}

async function doRegister(dispatch, firstName, lastName, phone, email, password) {
	try {
		const user = {
			firstName,
			lastName,
			phone,
			email,
			password,
		};
		dispatch({status: 1});
		const result = await register(user);
		window.localStorage.setItem('user', JSON.stringify(result));
		dispatch({status: 2, user: result, error: null});
	} catch (error) {
		dispatch({status: 0, user: null, error});
	}
}

export {AuthProvider, useAuthState, useAuthDispatch, doLogin, doLogout, doRegister};
