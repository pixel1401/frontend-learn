import { ArticlePageActions, ArticlePageReducer } from './articlesPageSlice';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

describe('ArticlePageSlice test', () => {
    const state : DeepPartial<ArticlesPageSchema> = {

    };
    test('test set page', () => {
        expect(ArticlePageReducer(state as ArticlesPageSchema, ArticlePageActions.setPage(2))).toEqual({ page: 2 });
    });
});
