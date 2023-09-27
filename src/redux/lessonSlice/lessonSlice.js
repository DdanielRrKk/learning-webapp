import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null, 
    title: '', 
    content: []
};

export const LessonSlice = createSlice({
    name: 'lesson',
    initialState,
    reducers: {
        setLesson: (state, action) => state = action.payload,
    }
});

export const { setLesson } = LessonSlice.actions;

export default LessonSlice.reducer;
