import {configureStore} from '@reduxjs/toolkit';

import LessonReducer from './lessonSlice/lessonSlice';
import AuthReducer from './lessonSlice/authSlice';

export default configureStore({
	reducer: {
		lesson: LessonReducer,
		auth: AuthReducer,
	},
});
