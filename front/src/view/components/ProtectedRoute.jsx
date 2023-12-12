import {Navigate} from 'react-router-dom';
import {useAuthState} from '../../context/authContext';

function ProtectedRoute({children}) {
	const {user} = useAuthState();
	return user ? children : <Navigate to='/login' />;
}

export default ProtectedRoute;
