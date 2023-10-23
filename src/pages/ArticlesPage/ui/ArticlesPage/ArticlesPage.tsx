import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import useInitialEffect from 'shared/lib/hooks/useInitialEffect';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { initedArticlesPage } from '../../model/services/initedArticlesPage/initedArticlesPage';
import { ArticlePageActions, ArticlePageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import {
    getErrorArticlesPage,
    getIsLoadingArticlesPage, getPageArticlesPage, getViewArticlesPage,
} from '../../model/selectors/articlesPage';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';

const reducerList : ReducersList = {
    articlesPage: ArticlePageReducer,
};

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getIsLoadingArticlesPage);
    const error = useSelector(getErrorArticlesPage);
    const view = useSelector(getViewArticlesPage);
    const page = useSelector(getPageArticlesPage);

    useInitialEffect(() => {
        dispatch(initedArticlesPage());
    });

    const nextArticlesPage = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    const onViewClick = (view : ArticleView) => {
        dispatch(ArticlePageActions.setView(view));
    };

    return (
        <DynamicModuleLoader reducers={reducerList} removeAfterUnmount={false}>
            <Page onScrollEnd={nextArticlesPage} className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onViewClick} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);
