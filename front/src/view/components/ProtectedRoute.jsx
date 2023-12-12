import {Navigate} from 'react-router-dom';
import {useAuth} from '../../context/authContext';

function ProtectedRoute({children}) {
	const {user} = useAuth();
	return user ? children : <Navigate to='/login' />;
}
