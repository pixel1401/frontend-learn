import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
    ArticleDetails,
} from 'entities/Article';
import { useParams } from 'react-router-dom';
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
import { ArticleDetailCommentsReducer, getArticleComments } from '../../model/slice/ArticleDetailCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

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

    useInitialEffect(() => {
        if (params.id) {
            dispatch(fetchCommentsByArticleId(params.id));
        }
    });

    if (!params.id) {
        return <div>NOT ID</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>
                <ArticleDetails id={params.id} />
                <Text title="Коментарий" />
                <CommentList isLoading={isLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>

    );
};
