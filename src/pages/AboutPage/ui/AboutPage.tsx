import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {

    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage('en');
    } , [])

    return (
        <div>
            ABOUT PAGE
            {t('title')}
        </div>
    );
};

export default AboutPage;
