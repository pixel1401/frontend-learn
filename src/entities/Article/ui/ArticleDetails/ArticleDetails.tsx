import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleDetailReducer } from 'entities/Article/model/slice/articleSlice';
import cls from './ArticleDetails.module.scss';

const reducers : ReducersList = {
    articleDetail: ArticleDetailReducer,
};

interface ArticleDetailsProps {}
export const ArticleDetails : FC<ArticleDetailsProps> = () => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>Article DAetails Page 12</div>
        </DynamicModuleLoader>
    );
};
