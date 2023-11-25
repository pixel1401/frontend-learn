import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesRecommendationLoading = (state : StateSchema) => state
    .ArticleDetailsPage?.recommendation?.isLoading;
