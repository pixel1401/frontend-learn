import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getInitedArticlesPage,
} from '../../selectors/articlesPage';
import { ArticlePageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initedArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initedArticlesPage',
    async (_, {
        extra, dispatch, getState,
    }) => {
        const inited = getInitedArticlesPage(getState());

        if (inited) return;

        dispatch(ArticlePageActions.initState());
        dispatch(fetchArticlesList({ page: 1 }));
    },
);
