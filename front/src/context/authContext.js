import {createContext, useMemo} from 'react';
import {useLocalStorage} from '../hooks/useLocalStorage';
import {useNavigate} from 'react-router-dom';

export const AuthContext = createContext();

export function useAuth() {
	const [user, setUser] = useLocalStorage('user');
	const navigate = useNavigate();

	function login(data) {
		setUser(data);
		navigate('/');
	}

	function logout() {
		setUser(null);
		navigate('/login', {replace: true});
	}

	const auth = useMemo(
		() => ({
			user,
			login,
			logout,
		}),
		[user]
	);

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
