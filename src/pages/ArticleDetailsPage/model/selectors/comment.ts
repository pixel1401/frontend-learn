import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailCommentsIsLoading = (state : StateSchema) => state.articleDetailsPage?.comment?.isLoading;
export const getArticleDetailCommentsError = (state : StateSchema) => state.articleDetailsPage?.comment?.error;
