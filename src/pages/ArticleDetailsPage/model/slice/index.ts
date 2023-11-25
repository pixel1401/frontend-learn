import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { ArticleDetailCommentsReducer } from './ArticleDetailCommentsSlice';
import { ArticleDetailRecommendationReducer } from './ArticleDetailRecommendationSlice';

export const ArticleDetailsPageReducers = combineReducers < ArticleDetailsPageSchema >({
    comment: ArticleDetailCommentsReducer,
    recommendation: ArticleDetailRecommendationReducer,
});
