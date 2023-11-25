import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleView } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';

export const getIsLoadingArticlesPage = (state : StateSchema) => state.articlesPage?.isLoading || false;
export const getErrorArticlesPage = (state : StateSchema) => state.articlesPage?.error;
export const getViewArticlesPage = (state : StateSchema) => state.articlesPage?.view || ArticleView.SMALL;

export const getPageArticlesPage = (state : StateSchema) => state.articlesPage?.page || 1;
export const getLimitArticlesPage = (state : StateSchema) => state.articlesPage?.limit;
export const getHasMoreArticlesPage = (state : StateSchema) => state.articlesPage?.hasMore;
export const getInitedArticlesPage = (state : StateSchema) => state.articlesPage?._inited ?? true;

// filter
export const getOrderArticlesPage = (state : StateSchema) => state.articlesPage?.order ?? 'asc';
export const getSortArticlesPage = (state : StateSchema) => state.articlesPage?.sort ?? ArticleSortField.CREATED;
export const getSearchArticlesPage = (state : StateSchema) => state.articlesPage?.search ?? '';
export const getArticlesPageType = (state : StateSchema) => state.articlesPage?.type ?? ArticleType.ALL;
