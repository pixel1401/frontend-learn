import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment/ui/CommentList/CommentList';
import { Text } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import useInitialEffect from 'shared/lib/hooks/useInitialEffect';
import { useParams } from 'react-router-dom';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsComment.module.scss';
import { sendComment } from '../../model/services/sendComment/sendComment';
import { getArticleDetailCommentsIsLoading } from '../../model/selectors/comment';
import { getArticleComments } from '../../model/slice/ArticleDetailCommentsSlice';

interface ArticleDetailsCommentProps {}

export const ArticleDetailsComment : FC<ArticleDetailsCommentProps> = () => {
    const { t } = useTranslation();
    const params = useParams<{id: string}>();
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleDetailCommentsIsLoading);

    const fetchSendComment = useCallback((text :string) => {
        dispatch(sendComment(text));
    }, [dispatch]);

    useInitialEffect(() => {
        if (params.id) {
            dispatch(fetchCommentsByArticleId(params.id));
        }
    });

    return (
        <>
            <Text className={cls.commentTitle} title={t('Комментарии')} />
            <AddCommentForm onSendComment={fetchSendComment} />
            <CommentList isLoading={isLoading} comments={comments} />
        </>
    );
};
