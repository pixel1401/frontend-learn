import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

function sleep(ms : number) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + 1000);
}
export const getArticleDetails = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'login/loginByUsername',
    async (id, { extra, dispatch, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Article>(`articles/${id}`);

            if (!response.data) {
                throw new Error();
            }

            // dispatch(UserActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            return rejectWithValue('Вы ввели неправильный логин или пароль');
        }
    },
);
