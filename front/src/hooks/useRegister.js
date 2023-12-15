import {useState} from 'react';
import {doArrayHaveEmptyStrings, isPasswordDifferent} from '../utils/validations';
import {useAuth} from './useAuth';

function useRegister() {
	const {status, doRegister} = useAuth();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	function handleFirstNameChange(e) {
		setFirstName(e.target.value);
	}

	function handleLastNameChange(e) {
		setLastName(e.target.value);
	}

	function handlePhoneChange(e) {
		setPhone(e.target.value);
	}

	function handleEmailChange(e) {
		setEmail(e.target.value);
	}

	function handlePasswordChange(e) {
		setPassword(e.target.value);
	}

	function handleConfirmPasswordChange(e) {
		setConfirmPassword(e.target.value);
	}

	function handleRegisterForm(e) {
		e.preventDefault();
		if (doArrayHaveEmptyStrings([firstName, lastName, phone, email, password, confirmPassword])) {
			alert('Please fill in all fields');
			return;
		}
		if (isPasswordDifferent(password, confirmPassword)) {
			alert('Passwords do not match');
			return;
		}

		doRegister(dispatch, firstName, lastName, phone, email, password);

		setFirstName('');
		setLastName('');
		setPhone('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');
	}

	return {
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
		user: state.user,
	};
}

export {useRegister};
