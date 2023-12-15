import {Outlet, useNavigate} from 'react-router-dom';
import {useAuth} from '../../hooks/useAuth';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

import styles from './Layout.module.css';

function Layout() {
	const {state, doLogout} = useAuth();
	const navigate = useNavigate();

	function handleLogout() {
		doLogout().then(() => {
			navigate('/login', {replace: true});
		});
	}

	return (
		<div className={styles.container}>
			<header>
				<Navbar
					user={state.user}
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
