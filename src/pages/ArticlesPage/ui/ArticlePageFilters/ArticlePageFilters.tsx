import { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    ArticleSortField,
    ArticleSortSelector,
    ArticleType,
    ArticleView,
    ArticleViewSelector,
} from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { SortOrder } from 'shared/types';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ArticleTypeTabs } from 'entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticlePageActions } from '../../model/slice/articlesPageSlice';
import {
    getArticlesPageType,
    getInitedArticlesPage,
    getOrderArticlesPage,
    getSearchArticlesPage,
    getSortArticlesPage,
    getViewArticlesPage,
} from '../../model/selectors/articlesPage';
import cls from './ArticlePageFilters.module.scss';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';

interface ArticlePageFiltersProps {
    className?: string
}

export const ArticlePageFilters: FC<ArticlePageFiltersProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const view = useSelector(getViewArticlesPage);
    const order = useSelector(getOrderArticlesPage);
    const sort = useSelector(getSortArticlesPage);
    const search = useSelector(getSearchArticlesPage);
    const type = useSelector(getArticlesPageType);
    const isInited = useSelector(getInitedArticlesPage);

    const debounceSearch = useDebounce(search, 500);

    const fetchList = useCallback(() => {
        dispatch(ArticlePageActions.setPage(1));
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const onViewClick = (view: ArticleView) => {
        dispatch(ArticlePageActions.setView(view));
    };

    const onChangeOrder = useCallback(
        (value: SortOrder) => {
            dispatch(ArticlePageActions.setOrder(value));
            fetchList();
        },
        [dispatch, fetchList],
    );

    const onChangeSort = useCallback(
        (value: ArticleSortField) => {
            dispatch(ArticlePageActions.setSort(value));
            fetchList();
        },
        [dispatch, fetchList],
    );

    const handleSearch = useCallback(
        (text: string) => {
            dispatch(ArticlePageActions.setSearch(text));
            // fetchList();
        },
        [dispatch],
    );

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(ArticlePageActions.setType(value));
        fetchList();
    }, [dispatch, fetchList]);

    useEffect(() => {
        if (!isInited) {
            fetchList();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceSearch, fetchList]);

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onViewClick}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    onChange={handleSearch}
                    value={search}
                    placeholder={t('Enter your text')}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
};
