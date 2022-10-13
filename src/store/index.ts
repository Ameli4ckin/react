import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { articlesReducer } from './articles/slice';
import { messagesReducer } from './profile/messages/slice';
import { profileReducer } from './profile/slice';

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    articles: articlesReducer,
});

export type StoreState = ReturnType<typeof rootReducer>

export const store  = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER,
            ]
        }
    }),
    devTools: process.env.NODE_ENV !== 'production',
})
