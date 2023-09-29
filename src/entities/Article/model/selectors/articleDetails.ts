import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsLoading = (state : StateSchema) => state.articleDetail?.isLoading;
export const getArticleDetailsError = (state : StateSchema) => state.articleDetail?.error;
export const getArticleDetailsData = (state : StateSchema) => state.articleDetail?.data;

export const getArticleDetailsAllSelector = (state : StateSchema) => state.articleDetail;
