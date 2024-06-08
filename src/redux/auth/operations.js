import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://665c1e5b3e4ac90a04d8b450.mockapi.io/';


const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
'user/register',
async (credentials, thunkAPI) => {
    try {
    const response = await axios.post('/users/signup', credentials);
    setAuthHeader(response.data.token);
    return response.data;
    } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const refresh = createAsyncThunk('user/refresh', async (_, thunkAPI) => {
const state = thunkAPI.getState();
const persistedToken = state.auth.token;
if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user.');
}
try {
    setAuthHeader(persistedToken);
    const response = await axios.get('users/current');
    return response.data;
} catch (error) {
    alert(error.message);
    return thunkAPI.rejectWithValue(error.message);
}
});

export const login = createAsyncThunk(
'user/login',
async (credentials, thunkAPI) => {
    try {
    const response = await axios.post('/users/login', credentials);
    setAuthHeader(response.data.token);
    return response.data;
    } catch (error) {
    alert(error.message);
    return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const logOut = createAsyncThunk('user/logout', async (_, thunkAPI) => {
try {
    await axios.post('/users/logout');
    clearAuthHeader();
} catch (error) {
    alert(error.message);
    return thunkAPI.rejectWithValue(error.message);
}
});