import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    ArticleDetails, getArticleDetails,
} from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {}

export const ArticleDetailsPage : FC<ArticleDetailsPageProps> = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const params = useParams<{id: string}>();

    useEffect(() => {
        dispatch(getArticleDetails(params.id ?? '999'));
    }, [dispatch, params]);

    if (!params.id) {
        return <div>NOT ID</div>;
    }

    return (
        <div><ArticleDetails /></div>
    );
};
