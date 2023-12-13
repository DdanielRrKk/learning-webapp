import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import styles from './layout.module.css';
import {useAuthState, useAuthDispatch, doLogout} from '../../../context/authContext';

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
				<nav className={styles.navbar}>
					<div>Logo</div>
					<ul>
						<NavLink to='/'>Home</NavLink>
						<NavLink to='/course'>Courses</NavLink>
						<NavLink to='/settings'>Settings</NavLink>
					</ul>
					<div>
						<img
							src='logo.png'
							alt='logo'
						/>
						<button onClick={handleLogout}>Logout</button>
					</div>
				</nav>
			</header>

			<main className={styles.content}>
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
