import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesRecommendationLoading = (state : StateSchema) => state
    .articleDetailsPage?.recommendation?.isLoading;
