import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    getHasMoreArticlesPage, getIsLoadingArticlesPage, getLimitArticlesPage, getPageArticlesPage,
} from '../../selectors/articlesPage';
import { ArticlePageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, {
        extra, dispatch, rejectWithValue, getState,
    }) => {
        const isLoading = getIsLoadingArticlesPage(getState());
        const hasMore = getHasMoreArticlesPage(getState());

        if (!hasMore || isLoading) {
            return;
        }
        const page = getPageArticlesPage(getState());
        dispatch(ArticlePageActions.setPage(page + 1));
        dispatch(fetchArticlesList({ }));
    },
);
