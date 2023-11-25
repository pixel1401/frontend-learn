import { ArticleDetailsCommentSchema } from './articleDetailsCommentSchema';
import { ArticleDetailsRecommendationSchema } from './articleDetailsRecommendationSchema';

export interface ArticleDetailsPageSchema {
    comment: ArticleDetailsCommentSchema,
    recommendation: ArticleDetailsRecommendationSchema
}
