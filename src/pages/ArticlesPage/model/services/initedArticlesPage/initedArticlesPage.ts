import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';
import {
    getInitedArticlesPage,
} from '../../selectors/articlesPage';
import { ArticlePageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initedArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initedArticlesPage',
    async (searchParams, {
        extra, dispatch, getState,
    }) => {
        const inited = getInitedArticlesPage(getState());

        if (!inited) return;

        const orderFromUrl = searchParams.get('order') as SortOrder;
        const sortFromUrl = searchParams.get('sort') as ArticleSortField;
        const searchFromUrl = searchParams.get('search');
        const typeFromUrl = searchParams.get('type') as ArticleType;
        if (orderFromUrl) {
            dispatch(ArticlePageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(ArticlePageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(ArticlePageActions.setSearch(searchFromUrl));
        }
        if (typeFromUrl) {
            dispatch(ArticlePageActions.setType(typeFromUrl));
        }

        dispatch(ArticlePageActions.initState());
        dispatch(fetchArticlesList({ }));
    },
);
