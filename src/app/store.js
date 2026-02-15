import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import studentsReducer from '../features/students/studentsSlice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        students: studentsReducer,
    }
})