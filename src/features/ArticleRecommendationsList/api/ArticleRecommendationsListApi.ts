import { Article } from 'entities/Article';
import { rtkApi } from 'shared/api/rtlApi';

const ArticleRecommendationsListApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendations: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: 4,
                },
            }),
        }),
    }),
});

export const { useGetArticleRecommendationsQuery } = ArticleRecommendationsListApi;
