import { ReducersMapObject, combineReducers, configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { LoginReducer } from 'features/AuthByUsername';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export const createStore = (initialState : StateSchema, asyncReducers : ReducersMapObject<StateSchema>) => {
    const reducer : ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: CounterReducer,
        user: UserReducer,
    };

    const createManager = createReducerManager(reducer);

    const store = configureStore<StateSchema>({
        reducer: createManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
    // @ts-ignore
    store.reducerManager = createManager;

    return store;
};
