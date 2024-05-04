import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
// eslint-disable-next-line erzhan-plugin-eslint/path-checker
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleDetailReducer } from 'entities/Article/model/slice/articleSlice';
import { AddCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { LoginReducer } from 'features/AuthByUsername';
import { ProfileReducer } from 'features/EditableProfileCard';
import { ArticleDetailsPageReducers } from 'pages/ArticleDetailsPage';
import { ArticlePageReducer } from 'pages/ArticlesPage/model/slice/articlesPageSlice';

export interface componentRenderOptions {
    route?: string;
    initialState? : DeepPartial<StateSchema>;
    asyncReducers? : ReducersList
}

const defaultAsyncReducers : ReducersList = {
    loginForm: LoginReducer,
    addCommentForm: AddCommentFormReducer,
    articleDetail: ArticleDetailReducer,
    profile: ProfileReducer,
    articlesPage: ArticlePageReducer,
    // articleDetailsPage: ArticleDetailsPageReducers,
};

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
        initialState,
        asyncReducers,
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
        ,
    );
}
