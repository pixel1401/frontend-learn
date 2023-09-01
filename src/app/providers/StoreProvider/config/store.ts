import { ReducersMapObject, combineReducers, configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { LoginReducer } from 'features/AuthByUsername';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export const createStore = (initialState : StateSchema) => {
    const reducer : ReducersMapObject<StateSchema> = {
        counter: CounterReducer,
        user: UserReducer,
        login: LoginReducer,
    };

    const createManager = createReducerManager(reducer);

    const cofigureStore = configureStore<StateSchema>({
        reducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
    // @ts-ignore
    configureStore.reducerManager = createManager;

    return configureStore;
};
