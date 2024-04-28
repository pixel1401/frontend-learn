import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { ArticleList } from 'entities/Article';
import cls from './ArticleRecommendationsList.module.scss';
import { useGetArticleRecommendationsQuery } from '../../api/ArticleRecommendationsListApi';

interface ArticleRecommendationsListProps {

}

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = (props) => {
    // const {} = props;

    const { t } = useTranslation();

    const { data: articles, isLoading } = useGetArticleRecommendationsQuery(4);

    return (
        <VStack gap="8" className={classNames('', {}, [])}>
            <Text className={cls.commentTitle} title={t('Рекемендуемые')} />
            <ArticleList
                articles={articles ?? []}
                className={cls.recommendations}
                target="_blank"
            />
        </VStack>
    );
};
