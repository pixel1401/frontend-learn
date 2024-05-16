import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import { ArticleDetailsComment } from '../../ui/ArticleDetailsComment/ArticleDetailsComment';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageReducers } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {}

const reducers : ReducersList = {
    articleDetailsPage: ArticleDetailsPageReducers,
};

const ArticleDetailsPage : FC<ArticleDetailsPageProps> = () => {
    const { t } = useTranslation();
    const params = useParams<{id: string}>();

    // const navigate = useNavigate();
    // const onBackToList = useCallback(() => {
    //     navigate(RoutePath.articles);
    // }, [navigate]);

    if (!params.id) {
        return <Page>NOT ID</Page>;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={params.id} />
                <ArticleRecommendationsList />
                <ArticleDetailsComment />
            </Page>
        </DynamicModuleLoader>

    );
};

export default ArticleDetailsPage;
