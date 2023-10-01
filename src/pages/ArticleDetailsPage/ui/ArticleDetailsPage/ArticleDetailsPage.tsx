import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
    ArticleDetails,
} from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {}

export const ArticleDetailsPage : FC<ArticleDetailsPageProps> = () => {
    const { t } = useTranslation();
    const params = useParams<{id: string}>();

    if (!params.id) {
        return <div>NOT ID</div>;
    }

    return (
        <div><ArticleDetails id={params.id} /></div>
    );
};
