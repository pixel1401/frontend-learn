import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
    ArticleDetails,
} from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment/ui/CommentList/CommentList';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import {
    getArticleDetailCommentsError,
    getArticleDetailCommentsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/comment';
import useInitialEffect from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { ArticleDetailCommentsReducer, getArticleComments } from '../../model/slice/ArticleDetailCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { sendComment } from '../../model/services/sendComment/sendComment';

interface ArticleDetailsPageProps {}

const reducers : ReducersList = {
    articleDetailComments: ArticleDetailCommentsReducer,
};

export const ArticleDetailsPage : FC<ArticleDetailsPageProps> = () => {
    const { t } = useTranslation();
    const params = useParams<{id: string}>();
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleDetailCommentsIsLoading);
    const error = useSelector(getArticleDetailCommentsError);
    const navigate = useNavigate();
    const onBackToList = useCallback(() => {
        navigate(RoutePath.article);
    }, [navigate]);

    useInitialEffect(() => {
        if (params.id) {
            dispatch(fetchCommentsByArticleId(params.id));
        }
    });

    const fetchSendComment = useCallback((text :string) => {
        dispatch(sendComment(text));
    }, [dispatch]);

    if (!params.id) {
        return <Page>NOT ID</Page>;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={params.id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={fetchSendComment} />
                <CommentList isLoading={isLoading} comments={comments} />
            </Page>
        </DynamicModuleLoader>

    );
};
