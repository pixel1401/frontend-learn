import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getIsLoadingArticlesPage = (state : StateSchema) => state.articlesPage?.isLoading || false;
export const getErrorArticlesPage = (state : StateSchema) => state.articlesPage?.error;
export const getViewArticlesPage = (state : StateSchema) => state.articlesPage?.view || ArticleView.SMALL;

export const getPageArticlesPage = (state : StateSchema) => state.articlesPage?.page || 1;
export const getLimitArticlesPage = (state : StateSchema) => state.articlesPage?.limit;
export const getHasMoreArticlesPage = (state : StateSchema) => state.articlesPage?.hasMore;
