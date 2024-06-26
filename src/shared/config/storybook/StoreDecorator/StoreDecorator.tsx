import { Suspense } from 'react';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleDetailReducer } from 'entities/Article/model/slice/articleSlice';
import { AddCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { LoginReducer } from 'features/AuthByUsername';
import { ProfileReducer } from 'features/EditableProfileCard';
import { ArticlePageReducer } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { ArticleDetailsPageReducers } from 'pages/ArticleDetailsPage';

const defaultAsyncReducers : ReducersList = {
    loginForm: LoginReducer,
    addCommentForm: AddCommentFormReducer,
    articleDetail: ArticleDetailReducer,
    profile: ProfileReducer,
    articlesPage: ArticlePageReducer,
    articleDetailsPage: ArticleDetailsPageReducers,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers? : ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
