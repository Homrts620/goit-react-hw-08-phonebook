import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './operations';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const isPendingAction = action => {
return action.type.endsWith('/pending');
};

const isRejectAction = action => {
return action.type.endsWith('/rejected');
};
const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
extraReducers: builder => {
    builder

    .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
    })

    .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
    })

    .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
        contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
    })

    .addMatcher(isPendingAction, handlePending)
    .addMatcher(isRejectAction, handleRejected);
},
});

export const contactsReducer = contactsSlice.reducer;