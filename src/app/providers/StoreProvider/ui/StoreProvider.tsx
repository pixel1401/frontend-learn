import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children ? : ReactNode,
    initialState? : DeepPartial<StateSchema>,
    asyncReducers? : DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props : StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;
    const store = createStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);
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
