import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

const MainPage : FC = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            {t('Главная страница')}
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {t('Hello World')}
            </Modal>
            <Button onClick={() => setIsOpen(true)}>{t('show Modal') }</Button>
        </div>
    );
};

export default MainPage;
