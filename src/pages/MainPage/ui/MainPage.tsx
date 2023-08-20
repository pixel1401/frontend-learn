import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
    }, []);

    return (
        <div>
            {t('MainPage')}
        </div>
    );
};

export default MainPage;
