import {
    CombinedState, Reducer, ReducersMapObject, configureStore,
} from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { ProfileReducer } from 'entities/Profile';
import { $api } from 'shared/api/api';
import { ScrollSaveReducer } from 'widgets/ScrollSave';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

export const createStore = (
    initialState: StateSchema,
    asyncReducers: ReducersMapObject<StateSchema>,
) => {
    const reducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: CounterReducer,
        user: UserReducer,
        profile: ProfileReducer,
        scrollSave: ScrollSaveReducer,
    };

    const createManager = createReducerManager(reducer);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: createManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });
    // @ts-ignore
    store.reducerManager = createManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
