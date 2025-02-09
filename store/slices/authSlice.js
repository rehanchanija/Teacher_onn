import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    tutor: null,
    student: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setTutor: (state, action) => {
            state.tutor = action.payload;
            state.student = null;
        },
        setStudent: (state, action) => {
            state.student = action.payload;
            state.tutor = null;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setStudent, setTutor } = authSlice.actions

export default authSlice.reducer