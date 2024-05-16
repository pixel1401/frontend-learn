// eslint-disable-next-line erzhan-plugin-eslint/path-checker
import { ArticleDetailsPageReducers } from 'pages/ArticleDetailsPage/model/slice';
import { ArticleDetailsPageSchema } from './model/types';

export {
    ArticleDetailsPageAsync as ArticleDetailsPage,
} from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export type { ArticleDetailsPageSchema };

export { ArticleDetailsPageReducers };
