import {useState} from 'react';
import {doArrayHaveEmptyStrings} from '../utils/validations';
import {useAuth} from './useAuth';
import {useNavigate} from 'react-router-dom';

function useLogin() {
	const {state, doLogin} = useAuth();
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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

		doLogin(email, password).then(() => {
			navigate('/', {replace: true});
		});
	}

	return {
		email,
		password,
		handleEmailChange,
		handlePasswordChange,
		handleLoginForm,
		user: state.user,
	};
}

export {useLogin};
