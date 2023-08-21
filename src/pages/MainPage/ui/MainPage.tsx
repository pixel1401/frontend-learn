import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getData } from 'shared/lib/tests/fetch';

const MainPage = () => {
    const { t, i18n } = useTranslation();

    const start = async () => {
        console.log(await getData());
    };

    useEffect(() => {
        start();
    }, []);

    return (
        <div>
            {t('MainPage')}
        </div>
    );
};

export default MainPage;
