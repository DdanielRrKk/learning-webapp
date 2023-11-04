import { configureStore } from "@reduxjs/toolkit";

import LessonReducer from './lessonSlice/lessonSlice';

export default configureStore({
    reducer: {
        lesson: LessonReducer,
    },
});
