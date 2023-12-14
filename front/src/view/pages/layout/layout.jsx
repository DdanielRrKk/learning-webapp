import {Outlet, useNavigate} from 'react-router-dom';
import {useAuthState, useAuthDispatch, doLogout} from '../../../context/authContext';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

import styles from './Layout.module.css';

function Layout() {
	const {user} = useAuthState();
	const dispatch = useAuthDispatch();
	const navigate = useNavigate();

	function handleLogout() {
		doLogout(dispatch).then(() => {
			navigate('/login', {replace: true});
		});
	}

	return (
		<div className={styles.container}>
			<header>
				<Navbar
					user={user}
					logoutHandler={handleLogout}
				/>
			</header>

			<main>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}

export default Layout;
