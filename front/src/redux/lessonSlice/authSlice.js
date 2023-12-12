import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	isLoggedIn: false,
	user: {
		id: 0,
		email: '',
		roles: 0,
		accessToken: '',
	},
};

export const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setEmail: (state, action) => (state = action.payload),
		setPassword: (state, action) => (state = action.payload),
	},
});

export const {setEmail, setPassword} = AuthSlice.actions;

export default AuthSlice.reducer;
