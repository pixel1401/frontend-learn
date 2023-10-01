import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';

export interface SidebarItemType {
    path : string,
    text: string,
    icon : React.VFC<React.SVGProps<SVGSVGElement>>
    isAuth?: boolean
}

export const sidebarItemList : SidebarItemType[] = [
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
        path: RoutePath.profile,
        text: 'Профиль',
        icon: ProfileIcon,
        isAuth: true,
    },
    {
        path: RoutePath.article,
        text: 'Посты',
        icon: ArticleIcon,
        isAuth: true,
    },
    {
        path: `${RoutePath['article-details']}1`,
        text: 'Посты1',
        icon: ArticleIcon,
        isAuth: true,
    },
];
