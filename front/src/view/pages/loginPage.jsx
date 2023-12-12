import React from 'react';
import {Link} from 'react-router-dom';
import EmailInput from '../components/input/EmailInput';
import PasswordInput from '../components/input/PasswordInput';
import SubmitInput from '../components/input/SubmitInput';

function LoginPage() {
	const {email, password, handleEmailChange, handleLoginForm, handlePasswordChange} = useLogin();

	return (
		<div>
			<form
				method='POST'
				onSubmit={handleLoginForm}
			>
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
