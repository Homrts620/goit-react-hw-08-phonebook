import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist';
import { authReducer } from '../redux/auth/slice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
},
middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    }).concat(logger),
devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store)