import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

const AboutPage = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage('en');
    }, []);

    return (
        <div>
            ABOUT PAGE
            {t('title')}
            <Button>21</Button>
        </div>
    );
};

export default AboutPage;
