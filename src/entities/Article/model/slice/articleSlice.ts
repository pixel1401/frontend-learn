import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailSchema } from '../types/articleDetailSchema';
import { Article } from '../types/article';
import { getArticleDetails } from '../services/getArticleDetails/getArticleDetails';

const initialState: ArticleDetailSchema = {
    isLoading: false,
};

export const articleDetailSlice = createSlice({
    name: 'articleDetail',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArticleDetails.pending, (state, action) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(getArticleDetails.fulfilled, (state, action : PayloadAction<Article>) => {
                state.isLoading = false;
                state.error = '';
                state.data = action.payload;
            })
            .addCase(getArticleDetails.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: ArticleDetailActions } = articleDetailSlice;
export const { reducer: ArticleDetailReducer } = articleDetailSlice;
