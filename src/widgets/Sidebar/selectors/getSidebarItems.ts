import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { SidebarItemType } from '../model/items';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemList : SidebarItemType[] = [
            {
                path: RoutePath.main,
                text: 'Главная',
                icon: MainIcon,
            },
            {
                path: RoutePath.about,
                text: 'О сайте',
                icon: AboutIcon,
            },
            {
                path: `${RoutePath.profile}${userData?.id}`,
                text: 'Профиль',
                icon: ProfileIcon,
                isAuth: true,
            },
            {
                path: RoutePath.articles,
                text: 'Посты',
                icon: ArticleIcon,
                isAuth: true,
            },

        ];

        return sidebarItemList;
    },
);
