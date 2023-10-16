import {
    getArticleDetailsAllSelector,
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading,
} from './model/selectors/articleDetails';
import { getArticleDetails } from './model/services/getArticleDetails/getArticleDetails';
import { Article } from './model/types/article';
import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export {
    ArticleDetails,
    Article,
    getArticleDetails,
    getArticleDetailsData,
};
