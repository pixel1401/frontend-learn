import {
    FC, MutableRefObject, ReactNode, memo, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import { useLocation } from 'react-router-dom';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ScrollSaveActions } from 'widgets/ScrollSave/model/slice/scrollSaveSlice';
import { useSelector } from 'react-redux';
import { getScroll } from 'widgets/ScrollSave/model/selectors/getScroll';
import cls from './Page.module.scss';

interface PageProps {
    className? :string,
    children: ReactNode,
    onScrollEnd?: () => void;
}

export const PAGE_ID = 'page-id';

export const Page : FC<PageProps> = memo(({ className, children, onScrollEnd }) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const location = useLocation().pathname;
    const dispatch = useAppDispatch();

    const scrollPosition = useSelector(getScroll);

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useEffect(() => {
        if (scrollPosition[`${location}`]) {
            wrapperRef.current.scrollTop = scrollPosition[`${location}`];
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onScrollSave = useThrottle((event: React.UIEvent<HTMLElement, UIEvent>) => {
        const scrollCount = event.currentTarget.scrollTop;
        const path = location;
        dispatch(ScrollSaveActions.setScrollPage({ [`${path}`]: scrollCount }));
    }, 800);

    return (
        <section
            ref={wrapperRef}
            onScroll={(event) => onScrollSave(event)}
            className={classNames(cls.Page, {}, [className])}
            id={PAGE_ID}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
