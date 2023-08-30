import { configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { StateScheme } from './StateScheme';

export const createStore = (initialState : StateScheme) => configureStore<StateScheme>({
    reducer: {
        counter: CounterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
});
