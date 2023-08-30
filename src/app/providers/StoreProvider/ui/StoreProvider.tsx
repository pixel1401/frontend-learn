import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createStore } from '../config/store';
import { StateScheme } from '../config/StateScheme';

interface StoreProviderProps {
    children ? : ReactNode,
    initialState? : DeepPartial<StateScheme>
}

export const StoreProvider = (props : StoreProviderProps) => {
    const { children, initialState } = props;

    const store = createStore(initialState as StateScheme);

    return (
        <Provider store={store}>{children}</Provider>
    );
};
