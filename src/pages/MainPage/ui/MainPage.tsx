import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getFetch } from 'shared/lib/tests/fetch';

const MainPage = () => {
    const { t, i18n } = useTranslation();

    const start = async () => {
        console.log(await getFetch());
    };

    useEffect(() => {
        start();
    }, []);

    return (
        <div>
            {t('MainPage')}
            <button type="button">Hello..</button>
        </div>
    );
};

export default MainPage;
