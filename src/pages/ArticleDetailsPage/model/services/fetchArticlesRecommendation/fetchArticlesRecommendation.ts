import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticlesRecommendation = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlesPage/fetchArticlesRecommendation',
    async (_, {
        extra, dispatch, rejectWithValue, getState,
    }) => {
        try {
            const response = await extra.api.get<Article[]>('/articles/', {
                params: {
                    _expand: 'user',
                    _limit: 4,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            return rejectWithValue('Don t articles recommendation');
        }
    },
);
