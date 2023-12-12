import {NavLink, Outlet} from 'react-router-dom';
import styles from './layout.module.css';
import {useAuthState} from '../../../context/authContext';

function Layout() {
	const {user} = useAuthState();

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<nav className={styles.navbar}>
					<div>Logo</div>
					<div>
						<NavLink to='/'>Home</NavLink>
						<NavLink to='/course'>Courses</NavLink>
					</div>
					<div>
						<img
							src='logo.png'
							alt='logo'
						/>
					</div>
				</nav>

				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
