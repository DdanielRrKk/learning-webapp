import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar({user, logoutHandler}) {
	return (
		<nav className={styles.navbar}>
			<NavLink to='/'>
				Prime<span>Code</span>
			</NavLink>
			<ul>
				<NavLink to='/course'>Courses</NavLink>
				<NavLink to='/settings'>Settings</NavLink>
			</ul>
			<div>
				<NavLink to='/profile'>
					<img
						src='https://placehold.co/40x40'
						alt='logo'
					/>
				</NavLink>
				<button onClick={logoutHandler}>Logout</button>
			</div>
		</nav>
	);
}

export default Navbar;
