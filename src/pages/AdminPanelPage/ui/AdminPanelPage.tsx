import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {}

const AdminPanelPage : FC<AdminPanelPageProps> = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('AdminPanel')}
        </Page>
    );
};

export default AdminPanelPage;
