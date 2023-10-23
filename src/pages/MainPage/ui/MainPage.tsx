import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { Page } from 'widgets/Page/Page';

const MainPage : FC = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Page>
            {t('Главная страница')}
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {t('Hello World')}
            </Modal>
            <Button onClick={() => setIsOpen(true)}>{t('show Modal') }</Button>
        </Page>
    );
};

export default MainPage;
