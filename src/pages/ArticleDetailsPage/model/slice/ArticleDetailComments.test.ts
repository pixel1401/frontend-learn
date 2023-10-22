import { ArticleDetailCommentsActions, ArticleDetailCommentsReducer } from './ArticleDetailCommentsSlice';
import { ArticleDetailsCommentSchema } from '../types/articleDetailsCommentSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

describe('ArticleDetailCommentsSlice test', () => {
    const state : DeepPartial<ArticleDetailsCommentSchema> = {

    };
    test('pending', () => {
        expect(ArticleDetailCommentsReducer(state as ArticleDetailsCommentSchema, fetchCommentsByArticleId.pending)).toEqual({ isLoading: true, error: '' } as ArticleDetailsCommentSchema);
    });
});
