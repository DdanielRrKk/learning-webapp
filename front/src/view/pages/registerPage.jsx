import {Link} from 'react-router-dom';
import {useRegister} from '../../hooks/useRegister';
import TextInput from '../components/input/TextInput';
import PhoneInput from '../components/input/PhoneInput';
import EmailInput from '../components/input/EmailInput';
import PasswordInput from '../components/input/PasswordInput';
import SubmitInput from '../components/input/SubmitInput';

function RegisterPage() {
	const {
		firstName,
		lastName,
		phone,
		email,
		password,
		confirmPassword,
		handleFirstNameChange,
		handleLastNameChange,
		handlePhoneChange,
		handleEmailChange,
		handlePasswordChange,
		handleConfirmPasswordChange,
		handleRegisterForm,
	} = useRegister();

	return (
		<div>
			<form
				method='POST'
				onSubmit={handleRegisterForm}
			>
				<TextInput
					labelText='First Name'
					value={firstName}
					changeHandler={handleFirstNameChange}
				/>
				<TextInput
					labelText='Last Name'
					value={lastName}
					changeHandler={handleLastNameChange}
				/>
				<PhoneInput
					labelText='Phone'
					value={phone}
					changeHandler={handlePhoneChange}
				/>
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
				<PasswordInput
					labelText='Confirm Password'
					value={confirmPassword}
					changeHandler={handleConfirmPasswordChange}
				/>
				<SubmitInput value='Register' />
			</form>
			<p>
				You already have an account?
				<Link to='/login'>Login</Link>
			</p>
		</div>
	);
}

export default RegisterPage;
