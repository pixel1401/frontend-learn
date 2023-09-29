import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {}

export const ArticleImageBlockComponent : FC<ArticleImageBlockComponentProps> = () => {
    const { t } = useTranslation();

    return (
        <div>
        </div>
    );
};
