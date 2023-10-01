import { FC, ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleDetailReducer } from '../../model/slice/articleSlice';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading,
} from '../../model/selectors/articleDetails';
import { getArticleDetails } from '../../model/services/getArticleDetails/getArticleDetails';
import cls from './ArticleDetails.module.scss';

const reducers: ReducersList = {
    articleDetail: ArticleDetailReducer,
};

interface ArticleDetailsProps {
    id: string
}
export const ArticleDetails: FC<ArticleDetailsProps> = ({ id }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getArticleDetails(id));
    }, [dispatch, id]);

    const isLoading = useSelector(getArticleDetailsLoading);
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    let content: ReactNode = <></>;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    }

    if (error) {
        content = <Text title="Error" theme={TextTheme.ERROR} />;
    }

    if (data) {
        content = (
            <div>
                Article DAetails Page
                {' '}
                {data?.id ?? ''}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            {content}
        </DynamicModuleLoader>
    );
};
