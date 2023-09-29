import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {}

export const ArticleCodeBlockComponent : FC<ArticleCodeBlockComponentProps> = () => {
    const { t } = useTranslation();

    return (
        <div>
        </div>
    );
};
