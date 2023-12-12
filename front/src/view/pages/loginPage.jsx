import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import EmailInput from '../components/input/EmailInput';
import PasswordInput from '../components/input/PasswordInput';
import SubmitInput from '../components/input/SubmitInput';

function LoginPage() {
	const {email, password, handleEmailChange, handlePasswordChange, handleLoginForm, user, status, error} =
		useLogin();
	const navigate = useNavigate();

	if (user) {
		navigate('/', {replace: true});
	}

	return (
		<div>
			<form
				method='POST'
				onSubmit={handleLoginForm}
			>
				{status === 0 && error && <p>{error}</p>}
				<EmailInput
					labelText='Email'
					value={email}
					changeHandler={handleEmailChange}
				/>
				<PasswordInput
					labelText='Password'
					value={password}
					changeHandler={handlePasswordChange}
				/>
				<SubmitInput value='Login' />
			</form>
			<p>
				You don't have an account?
				<Link to='/register'>Register</Link>
			</p>
		</div>
	);
}

export default LoginPage;
