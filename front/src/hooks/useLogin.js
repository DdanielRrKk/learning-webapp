import React from 'react';
import {useAuth} from '../context/authContext';
import {doArrayHaveEmptyStrings} from '../utils/validations';

function useLogin() {
	const {login} = useAuth();
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

		fetch('/api/v1/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then(result => result.json())
			.then(data => login(data))
			.catch(error => console.log(error));

		return {
			email,
			password,
			handleEmailChange,
			handlePasswordChange,
			handleLoginForm,
		};
	}
}

export {useLogin};
