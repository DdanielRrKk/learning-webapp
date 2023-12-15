import {Navigate} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';

function ProtectedRoute({children}) {
	const {state} = useAuth();
	return state.user ? children : <Navigate to='/login' />;
}

export default ProtectedRoute;
