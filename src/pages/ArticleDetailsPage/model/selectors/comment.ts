import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailCommentsIsLoading = (state : StateSchema) => state.articleDetailComments?.isLoading;
export const getArticleDetailCommentsError = (state : StateSchema) => state.articleDetailComments?.error;
