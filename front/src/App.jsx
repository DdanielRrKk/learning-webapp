import {useEffect} from 'react';

import ErrorPage from './view/pages/errorPage';

import Layout from './view/pages/layout/layout';

import LoginPage from './view/pages/loginPage';
import RegisterPage from './view/pages/registerPage';

import HomePage from './view/pages/homePage';
import CoursePage from './view/pages/coursePage';
import SupportPage from './view/pages/supportPage';
import LanguageComparePage from './view/pages/languageComparePage';

import CreateCoursePage from './view/pages/createCoursePage';
import WritePage from './view/pages/writePage';
import FeedbackPage from './view/pages/feedbackPage';
import SettingsPage from './view/pages/settingsPage';

import {Route, Routes} from 'react-router-dom';
import ProtectedRoute from './view/components/ProtectedRoute';

import {useNavigate} from 'react-router-dom';
import {useAuthDispatch} from './context/authContext';

function App() {
	const navigate = useNavigate();
	const dispatch = useAuthDispatch();
	useEffect(() => {
		const storedUser = window.localStorage.getItem('user');
		if (storedUser) {
			const user = JSON.parse(storedUser);
			dispatch({user});
			navigate('/', {replace: true});
		}
	}, []);
	return (
		<Routes>
			<Route
				path='/'
				element={
					<ProtectedRoute>
						<Layout />
					</ProtectedRoute>
				}
			>
				<Route
					path=''
					element={<HomePage />}
				/>
				<Route
					path='/course/:courseId'
					element={<CoursePage />}
				/>
				<Route
					path='/support'
					element={<SupportPage />}
				/>
				<Route
					path='/compare'
					element={<LanguageComparePage />}
				/>
				<Route
					path='/create'
					element={<CreateCoursePage />}
				/>
				<Route
					path='/write'
					element={<WritePage />}
				/>
				<Route
					path='/feedback/:feedbackId'
					element={<FeedbackPage />}
				/>
				<Route
					path='/settings'
					element={<SettingsPage />}
				/>
				<Route
					path='*'
					element={<ErrorPage />}
				/>
			</Route>
			<Route
				path='/login'
				element={<LoginPage />}
			/>
			<Route
				path='register'
				element={<RegisterPage />}
			/>
			<Route
				path='*'
				element={<ErrorPage />}
			/>
		</Routes>
	);
}
export default App;
