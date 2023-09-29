import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {}

export const ArticlePage : FC<ArticlePageProps> = () => {
    const { t } = useTranslation();

    return (
        <div>Article Page</div>
    );
};
