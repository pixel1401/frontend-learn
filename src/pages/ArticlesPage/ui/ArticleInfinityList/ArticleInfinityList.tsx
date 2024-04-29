import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slice/articlesPageSlice';
import { getErrorArticlesPage, getIsLoadingArticlesPage, getViewArticlesPage } from '../../model/selectors/articlesPage';
import cls from './ArticleInfinityList.module.scss';

interface ArticleInfinityListProps {}

export const ArticleInfinityList : FC<ArticleInfinityListProps> = () => {
    const { t } = useTranslation();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getIsLoadingArticlesPage);
    const error = useSelector(getErrorArticlesPage);
    const view = useSelector(getViewArticlesPage);

    return (
        <div>
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
                className={cls.list}
            />
        </div>
    );
};
