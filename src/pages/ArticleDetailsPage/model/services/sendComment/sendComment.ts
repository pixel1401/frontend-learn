import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { Comment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const sendComment = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
    'features/sendComment',
    async (text, thunkApi) => {
        const {
            extra, dispatch, rejectWithValue, getState,
        } = thunkApi;

        try {
            const userId = getUserAuthData(getState())?.id;
            const articleId = getArticleDetailsData(getState())?.id;

            if (!userId || !text || !articleId) {
                return rejectWithValue('no data');
            }

            const response = await extra.api.post<Comment>('/comments', {
                articleId,
                text,
                userId,
            });

            if (!response.data) {
                // throw new Error();
                return rejectWithValue('data error');
            }

            dispatch(fetchCommentsByArticleId(articleId));
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
