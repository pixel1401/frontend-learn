import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailCommentsIsLoading = (state : StateSchema) => state.ArticleDetailsPage?.comment?.isLoading;
export const getArticleDetailCommentsError = (state : StateSchema) => state.ArticleDetailsPage?.comment?.error;
