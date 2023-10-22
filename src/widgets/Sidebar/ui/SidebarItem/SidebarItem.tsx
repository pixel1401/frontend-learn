import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SidebarItem.module.scss';
import { getSidebarItems } from '../../selectors/getSidebarItems';

interface SidebarItemProps {
    collapsed: boolean
}

export const SidebarItem = memo<SidebarItemProps>(({ collapsed }) => {
    const { t } = useTranslation();

    const isAuth = Boolean(useSelector(getUserAuthData));

    const sidebarItemList = useSelector(getSidebarItems);

    const sidebarItems = useMemo(() => sidebarItemList.filter((item) => {
        if (isAuth === false && item.isAuth) return false;
        return true;
    }), [isAuth, sidebarItemList]);

    return (
        <nav className={classNames('', { [cls.collapsed]: collapsed }, [])}>
            {
                sidebarItems.map((link) => (
                    <AppLink
                        key={link.path}
                        theme={AppLinkTheme.SECONDARY}
                        to={link.path}
                        className={cls.item}
                    >
                        <link.icon className={cls.icon} />
                        <span className={cls.link}>
                            {t(link.text)}
                        </span>
                    </AppLink>
                ))
            }
        </nav>
    );
});
