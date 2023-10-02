import { ArticleDetailReducer } from './articleSlice';

import { getArticleDetails } from '../services/getArticleDetails/getArticleDetails';
import { ArticleDetailSchema } from '../types/articleDetailSchema';

describe('ArticleSlice test', () => {
    const state : DeepPartial<ArticleDetailSchema> = {
        isLoading: true,
        error: 'err',
    };
    test('Loading', () => {
        expect(ArticleDetailReducer(state as ArticleDetailSchema, getArticleDetails.pending)).toEqual({ isLoading: true, error: '' } as ArticleDetailSchema);
    });
    test('Error', () => {
        expect(ArticleDetailReducer(state as ArticleDetailSchema, { type: getArticleDetails.rejected, payload: 'errors' })).toEqual({ isLoading: false, error: 'errors' } as ArticleDetailSchema);
    });
});
