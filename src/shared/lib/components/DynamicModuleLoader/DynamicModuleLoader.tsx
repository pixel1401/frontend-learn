import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]? : Reducer
}

export type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers : ReducersList,
    children : ReactNode
}

export const DynamicModuleLoader : FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer] : ReducersListEntry) => {
            dispatch({ type: `@INIT ${name}` });
            store.reducerManager.add(name, reducer);
        });

        return () => {
            Object.entries(reducers).forEach(([name, reducer] : ReducersListEntry) => {
                store.reducerManager.remove(name);
                dispatch({ type: `@REMOVE ${name}` });
            });
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {children}
        </>
    );
};
