import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from '../../types/comment';

export const getComments = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'comment/getComments',
    async (id, { extra, dispatch, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Comment>(`articles/${id}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            return rejectWithValue('Вы ввели неправильный логин или пароль');
        }
    },
);
