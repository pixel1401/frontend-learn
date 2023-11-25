import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { fetchArticlesRecommendation } from '../services/fetchArticlesRecommendation/fetchArticlesRecommendation';
import { ArticleDetailsRecommendationSchema } from '../types/articleDetailsRecommendationSchema';

export const recommendationAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendation = recommendationAdapter
    .getSelectors<StateSchema>(
        (state) => state.ArticleDetailsPage?.recommendation || recommendationAdapter.getInitialState(),
    );

export const ArticleDetailRecommendationSlice = createSlice({
    name: 'ArticleDetailRecommendation',
    initialState: recommendationAdapter.getInitialState<ArticleDetailsRecommendationSchema>({
        isLoading: false,
        ids: [],
        entities: {
        },
    }),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesRecommendation.pending, (state, action) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(
                fetchArticlesRecommendation.fulfilled,
                (state, action : PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    state.error = '';
                    console.log(action.payload);

                    recommendationAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchArticlesRecommendation.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: ArticleDetailRecommendationActions } = ArticleDetailRecommendationSlice;
export const { reducer: ArticleDetailRecommendationReducer } = ArticleDetailRecommendationSlice;
