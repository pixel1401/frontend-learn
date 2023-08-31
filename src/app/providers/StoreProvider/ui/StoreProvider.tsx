import React, { ReactNode } from 'react';
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
        <div>
            {/* // @ts-ignore */}
            <Provider store={store}>
                <div>
                    {children}
                </div>
            </Provider>
        </div>

    );
};
