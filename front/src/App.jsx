import {useEffect} from 'react';

import ErrorPage from './pages/error/ErrorPage';

import Layout from './pages/layout/Layout';

import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

import HomePage from './pages/home/HomePage';
import CoursePage from './pages/course/CoursePage';
import SupportPage from './pages/support/SupportPage';
import LanguageComparePage from './pages/languageComparison/LanguageComparePage';

import CreateCoursePage from './pages/createCourse/CreateCoursePage';
import WritePage from './pages/write/WritePage';
import FeedbackPage from './pages/feedback/FeedbackPage';
import SettingsPage from './pages/settings/SettingsPage';
import ProfilePage from './pages/profile/ProfilePage';

import {Route, Routes} from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';

import {useNavigate} from 'react-router-dom';

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		// const storedUser = window.localStorage.getItem('user');
		// if (storedUser) {
		// 	const user = JSON.parse(storedUser);
		// 	dispatch({user});
		// 	navigate('/', {replace: true});
		// }
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
