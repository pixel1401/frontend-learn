import { ReducersMapObject, combineReducers, configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { LoginReducer } from 'features/AuthByUsername';
import { StateScheme } from './StateScheme';

export const createStore = (initialState : StateScheme) => {
    const reducer : ReducersMapObject<StateScheme> = {
        counter: CounterReducer,
        user: UserReducer,
        login: LoginReducer,
    };
    return configureStore<StateScheme>({
        reducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};
