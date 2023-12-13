import {Link, useNavigate} from 'react-router-dom';
import {useRegister} from '../../hooks/useRegister';
import TextInput from '../components/input/TextInput';
import PhoneInput from '../components/input/PhoneInput';
import EmailInput from '../components/input/EmailInput';
import PasswordInput from '../components/input/PasswordInput';
import SubmitInput from '../components/input/SubmitInput';
import styles from '../../css/pages/authPage.module.css';

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
		user,
		status,
		error,
	} = useRegister();
	const navigate = useNavigate();

	if (user) {
		navigate('/', {replace: true});
	}

	return (
		<div className='container'>
			<div className={styles.content}>
				<h1>Register to PrimeCode Academy</h1>

				<form
					method='POST'
					onSubmit={handleRegisterForm}
				>
					{status === 0 && error && <p>{error}</p>}
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
					You already have an account? <Link to='/login'>Login</Link>
				</p>
			</div>
		</div>
	);
}

export default RegisterPage;
