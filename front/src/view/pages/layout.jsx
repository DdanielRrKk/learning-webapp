import {NavLink, Outlet} from 'react-router-dom';

function Layout() {
	return (
		<div>
			<div>Profile</div>
			<nav>
				<NavLink to='/'>PrimeCode Academy</NavLink>
				<NavLink to='/courses'>Courses</NavLink>
			</nav>

			<Outlet />
		</div>
	);
}
