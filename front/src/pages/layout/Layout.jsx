import {useState, useEffect} from 'react';
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

	let timer = null;
	const [scrollState, setScrollState] = useState(false);

	useEffect(() => {
		function handleScroll() {
			if (timer !== null) {
				clearTimeout(timer);
				setScrollState(true);
				console.log('scrolling');
				const main = document.querySelector('body');
				main.classList.remove('not-scrolling');
				main.classList.add('scrolling');
			}

			timer = setTimeout(() => {
				setScrollState(false);
				console.log('not scrolling');
				const main = document.querySelector('body');
				main.classList.remove('scrolling');
				main.classList.add('not-scrolling');
			}, 150);
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollState]);

	return (
		<div
			id='mainDiv'
			className={styles.container}
		>
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
