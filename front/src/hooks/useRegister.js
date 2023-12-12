import {useState} from 'react';
import {doArrayHaveEmptyStrings, isPasswordDifferent} from '../utils/validations';

function useRegister() {
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

		fetch('/api/v1/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName,
				lastName,
				phone,
				email,
				password,
			}),
		})
			.then(result => result.json())
			.then(data => login(data))
			.catch(error => console.log(error));

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
		};
	}
}

export {useRegister};
