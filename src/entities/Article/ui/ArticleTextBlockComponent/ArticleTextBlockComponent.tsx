import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {}

export const ArticleTextBlockComponent : FC<ArticleTextBlockComponentProps> = () => {
    const { t } = useTranslation();

    return (
        <div>
        </div>
    );
};
