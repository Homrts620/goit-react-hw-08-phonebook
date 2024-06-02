import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '', // початковий стан фільтра
    reducers: {
    changeFilter(state, action) {
    return (state = action.payload);
    },
},
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;