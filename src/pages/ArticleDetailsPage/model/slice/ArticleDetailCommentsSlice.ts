import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsCommentSchema } from '../types/articleDetailsCommentSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter
    .getSelectors<StateSchema>((state) => state.articleDetailsPage?.comment || commentsAdapter.getInitialState());

export const ArticleDetailCommentsSlice = createSlice({
    name: 'ArticleDetailComments',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
        isLoading: false,
        ids: [],
        entities: {
        },
    }),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action : PayloadAction<Comment[]>) => {
                state.isLoading = false;
                state.error = '';
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: ArticleDetailCommentsActions } = ArticleDetailCommentsSlice;
export const { reducer: ArticleDetailCommentsReducer } = ArticleDetailCommentsSlice;
