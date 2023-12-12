import React from 'react';

import ErrorPage from './view/pages/errorPage';

import Layout from './view/pages/layout';

import LoginPage from './view/pages/loginPage';
import RegisterPage from './view/pages/registerPage';

import HomePage from './view/pages/homePage';
import CoursePage from './view/pages/coursePage';
import SupportPage from './view/pages/supportPage';
import LanguageComparePage from './view/pages/languageComparePage';

import CreateCoursePage from './view/pages/createCoursePage';
import WritePage from './view/pages/writePage';
import FeedbackPage from './view/pages/feedbackPage';

import {Route, Routes} from 'react-router-dom';
import ProtectedRoute from './view/components/ProtectedRoute';

function App() {
	return (
		<Routes>
			{/* <Route
				path='/'
				element={
					<ProtectedRoute>
						<Layout />
					</ProtectedRoute>
				}
			> */}
			<Route
				path='/'
				element={<Layout />}
			>
				<Route
					path=''
					element={<HomePage />}
				/>
				<Route
					path='/course'
					element={<CoursePage />}
				/>
				<Route
					path='/support'
					element={<SupportPage />}
				/>
				<Route
					path='/language-compare'
					element={<LanguageComparePage />}
				/>
				<Route
					path='/create-course'
					element={<CreateCoursePage />}
				/>
				<Route
					path='/write'
					element={<WritePage />}
				/>
				<Route
					path='/feedback'
					element={<FeedbackPage />}
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
		</Routes>
	);
}
export default App;
