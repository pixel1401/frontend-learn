import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getLimitArticlesPage } from '../../selectors/articlesPage';

interface FetchArticlesListProps {
    page:number,
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async ({ page }, {
        extra, dispatch, rejectWithValue, getState,
    }) => {
        try {
            const limit = getLimitArticlesPage(getState());

            const response = await extra.api.get<Article[]>('/articles/', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit ?? 5,
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
