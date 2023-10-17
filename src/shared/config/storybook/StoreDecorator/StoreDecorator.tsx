import { Suspense } from 'react';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { LoginReducer } from 'features/AuthByUsername';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { AddCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { ArticleDetailCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/ArticleDetailCommentsSlice';
import { ArticleDetailReducer } from 'entities/Article/model/slice/articleSlice';

const defaultAsyncReducers : ReducersList = {
    loginForm: LoginReducer,
    addCommentForm: AddCommentFormReducer,
    articleDetailComments: ArticleDetailCommentsReducer,
    articleDetail: ArticleDetailReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers? : ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
