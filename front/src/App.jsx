import {useEffect} from 'react';

import ErrorPage from './view/pages/ErrorPage';

import Layout from './view/pages/layout/Layout';

import LoginPage from './view/pages/LoginPage';
import RegisterPage from './view/pages/RegisterPage';

import HomePage from './view/pages/HomePage';
import CoursePage from './view/pages/CoursePage';
import SupportPage from './view/pages/SupportPage';
import LanguageComparePage from './view/pages/LanguageComparePage';

import CreateCoursePage from './view/pages/CreateCoursePage';
import WritePage from './view/pages/WritePage';
import FeedbackPage from './view/pages/FeedbackPage';
import SettingsPage from './view/pages/SettingsPage';
import ProfilePage from './view/pages/ProfilePage';

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
					path='/profile'
					element={<ProfilePage />}
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
