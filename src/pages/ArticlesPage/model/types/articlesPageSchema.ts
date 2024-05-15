import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleSortField, ArticleType, ArticleView,
} from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading: boolean,
    error?:string,
    view: ArticleView,

    // pagination
    page: number,
    limit?: number,
    hasMore: boolean
    _inited?: boolean

    // filter
    order: SortOrder,
    sort: ArticleSortField,
    search:string,
    type: ArticleType
}
