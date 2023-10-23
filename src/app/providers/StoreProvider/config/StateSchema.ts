import {
    AnyAction,
    CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailSchema } from 'entities/Article/model/types/articleDetailSchema';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { LoginSchema } from 'features/AuthByUsername/model/type/loginSchema';
import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { NavigateFunction } from 'react-router-dom';
import { ScrollSaveSchema } from 'widgets/ScrollSave';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    profile: ProfileSchema,
    scrollSave: ScrollSaveSchema

    // ASYNC REDUCERS
    loginForm?: LoginSchema,
    articleDetail? : ArticleDetailSchema,
    articleDetailComments? : ArticleDetailsCommentSchema,
    addCommentForm?: AddCommentFormSchema,
    articlesPage?: ArticlesPageSchema

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
    // navigate?: NavigateFunction
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema;
}
