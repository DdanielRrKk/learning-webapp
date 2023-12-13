import {useState} from 'react';
import {doArrayHaveEmptyStrings} from '../utils/validations';
import {useAuthState, useAuthDispatch, doLogin} from '../context/authContext';
import {useNavigate} from 'react-router-dom';

function useLogin() {
	const {user, status, error} = useAuthState();
	const dispatch = useAuthDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

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

		setEmail('');
		setPassword('');

		doLogin(dispatch, email, password).then(() => {
			navigate('/', {replace: true});
		});
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
