import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlesPageType,
    getLimitArticlesPage, getOrderArticlesPage, getPageArticlesPage, getSearchArticlesPage, getSortArticlesPage,
} from '../../selectors/articlesPage';

interface FetchArticlesListProps {
    replace? : boolean
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async ({ replace }, {
        extra, dispatch, rejectWithValue, getState,
    }) => {
        try {
            const limit = getLimitArticlesPage(getState());
            const sort = getSortArticlesPage(getState());
            const order = getOrderArticlesPage(getState());
            const search = getSearchArticlesPage(getState());
            const page = getPageArticlesPage(getState());
            const type = getArticlesPageType(getState());

            addQueryParams({
                sort, order, search, type,
            });
            const response = await extra.api.get<Article[]>('/articles/', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit ?? 5,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            return rejectWithValue('Вы ввели неправильный логин или пароль');
        }
    },
);
