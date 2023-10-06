import {
    AnyAction,
    CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailSchema } from 'entities/Article/model/types/articleDetailSchema';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername/model/type/loginSchema';
import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';
import { NavigateFunction } from 'react-router-dom';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    profile: ProfileSchema

    // ASYNC REDUCERS
    loginForm?: LoginSchema,
    articleDetail? : ArticleDetailSchema,
    articleDetailComments? : ArticleDetailsCommentSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: NavigateFunction
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema;
}
