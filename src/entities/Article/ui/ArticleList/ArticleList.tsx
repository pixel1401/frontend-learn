import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import {
    AutoSizer,
    List,
    ListRowProps,
    WindowScroller,
} from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
    } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />
    );

    const isBig = view === ArticleView.BIG;
    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig
        ? articles.length
        : Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({
        index, isScrolling, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    target={target}
                    key={`str${i}`}
                    className={cls.card}
                />,
            );
        }

        return (
            <div key={key} style={style} className={cls.row}>
                {items}
            </div>
        );
    };

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>

    // <WindowScroller
    //     scrollElement={document.getElementById(PAGE_ID) as Element}
    // >
    //     {({
    //         height,
    //         width,
    //         registerChild,
    //         onChildScroll,
    //         isScrolling,
    //         scrollTop,
    //     }) => (
    //         <div
    //             ref={registerChild as any}
    //             className={classNames(cls.ArticleList, {}, [className, cls[view]])}
    //         >
    //             <List
    //                 height={700}
    //                 rowCount={rowCount}
    //                 rowHeight={isBig ? 700 : 330}
    //                 rowRenderer={rowRender}
    //                 width={width ? width - 80 : 700}
    //                 autoHeight
    //                 onScroll={onChildScroll}
    //                 isScrolling={isScrolling}
    //                 scrollTop={scrollTop}
    //             />
    //             {isLoading && getSkeletons(view)}
    //         </div>
    //     )}
    // </WindowScroller>
    );
});
