import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CommentSchema } from '../types/comment';

const initialState: CommentSchema = {
    isLoading: true,
};

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {

    },
});

export const { actions: CommentActions } = commentSlice;
export const { reducer: CommentReducer } = commentSlice;
