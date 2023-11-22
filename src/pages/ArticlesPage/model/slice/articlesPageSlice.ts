import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleSortField, ArticleView } from 'entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { ARTICLES_VIEW_STORAGE_KEY } from 'shared/const/localStorage';
import { SortOrder } from 'shared/types';
import { ArticleType } from 'entities/Article/model/types/article';
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
        _inited: true,
        order: 'asc',
        search: '',
        sort: ArticleSortField.CREATED,
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action : PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_STORAGE_KEY, state.view);
        },
        setPage: (state, action : PayloadAction<number>) => {
            state.page = action.payload;
        },
        setType: (state, action : PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        setLimit: (state, action : PayloadAction<number>) => {
            state.limit = action.payload;
        },
        setHasMore: (state, action : PayloadAction<boolean>) => {
            state.hasMore = action.payload;
        },
        setOrder: (state, action : PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSearch: (state, action : PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSort: (state, action : PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLES_VIEW_STORAGE_KEY) as ArticleView;
            if (state.view === ArticleView.SMALL) {
                state.limit = 8;
            } else {
                state.limit = 4;
            }
            state._inited = true;
            state.page = 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = '';
                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.hasMore = action.payload.length > 0;
                state._inited = false;
                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: ArticlePageActions } = articlePageSlice;
export const { reducer: ArticlePageReducer } = articlePageSlice;
