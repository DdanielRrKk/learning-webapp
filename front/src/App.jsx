import {useEffect} from 'react';

import ErrorPage from './view/pages/error/ErrorPage';

import Layout from './view/pages/layout/Layout';

import LoginPage from './view/pages/auth/LoginPage';
import RegisterPage from './view/pages/auth/RegisterPage';

import HomePage from './view/pages/home/HomePage';
import CoursePage from './view/pages/course/CoursePage';
import SupportPage from './view/pages/support/SupportPage';
import LanguageComparePage from './view/pages/languageComparison/LanguageComparePage';

import CreateCoursePage from './view/pages/createCourse/CreateCoursePage';
import WritePage from './view/pages/write/WritePage';
import FeedbackPage from './view/pages/feedback/FeedbackPage';
import SettingsPage from './view/pages/settings/SettingsPage';
import ProfilePage from './view/pages/profile/ProfilePage';

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
