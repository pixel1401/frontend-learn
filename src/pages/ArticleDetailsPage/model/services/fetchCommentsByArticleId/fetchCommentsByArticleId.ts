import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string, ThunkConfig<string>>(
    'articleDetailsPageComment/fetchCommentsByArticleId',
    async (articleId, { extra, dispatch, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Comment[]>('/comments/', {
                params: {
                    articleId,
                    _expand: 'user',
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
