import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { sidebarItemList } from 'widgets/Sidebar/model/items';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    collapsed: boolean
}

export const SidebarItem = memo<SidebarItemProps>(({ collapsed }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames('', { [cls.collapsed]: collapsed }, [])}>
            {
                sidebarItemList.map((link) => (
                    <AppLink
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
        </div>
    );
});
