import {useState} from 'react';
import {doArrayHaveEmptyStrings} from '../utils/validations';
import {useAuthState, useAuthDispatch, doLogin} from '../context/authContext';

function useLogin() {
	const {user, status, error} = useAuthState();
	const dispatch = useAuthDispatch();

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	function handleEmailChange(e) {
		setEmail(e.target.value);
	}
	function handlePasswordChange(e) {
		setPassword(e.target.value);
	}

	function handleLoginForm(e) {
		e.preventDefault();

		if (doArrayHaveEmptyStrings([email, password])) {
			alert('Please fill in all fields');
			return;
		}

		doLogin(dispatch, email, password);
		setEmail('');
		setPassword('');
	}

	return {
		email,
		password,
		handleEmailChange,
		handlePasswordChange,
		handleLoginForm,
		user,
		status,
		error,
	};
}

export {useLogin};
