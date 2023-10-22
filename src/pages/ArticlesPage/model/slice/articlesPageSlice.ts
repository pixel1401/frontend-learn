import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { ARTICLES_VIEW_STORAGE_KEY } from 'shared/const/localStorage';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

export const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter
    .getSelectors<StateSchema>((state) => state.articlesPage || articlesAdapter.getInitialState());

export const articlePageSlice = createSlice({
    name: 'articlePage',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: true,
        ids: [],
        entities: {
        },
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
    }),
    reducers: {
        setView: (state, action : PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_STORAGE_KEY, state.view);
        },
        setPage: (state, action : PayloadAction<number>) => {
            state.page = action.payload;
        },
        setLimit: (state, action : PayloadAction<number>) => {
            state.limit = action.payload;
        },
        setHasMore: (state, action : PayloadAction<boolean>) => {
            state.hasMore = action.payload;
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLES_VIEW_STORAGE_KEY) as ArticleView;
            if (state.view === ArticleView.SMALL) {
                state.limit = 8;
            } else {
                state.limit = 4;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchArticlesList.fulfilled, (state, action : PayloadAction<Article[]>) => {
                state.isLoading = false;
                state.error = '';
                articlesAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: ArticlePageActions } = articlePageSlice;
export const { reducer: ArticlePageReducer } = articlePageSlice;
