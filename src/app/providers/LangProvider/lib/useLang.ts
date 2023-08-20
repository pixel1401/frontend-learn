import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Lang, LangContext } from './LangContext';

export const useLang = () => {
    const { lang, setLang: setLangData } = useContext(LangContext);
    const { i18n } = useTranslation();
    const setLang = () => {
        let switchLang: Lang = lang;
        switch (lang) {
        case Lang.EN:
            switchLang = Lang.RU;
            break;
        default:
            switchLang = Lang.EN;
            break;
        }

        setLangData(switchLang);
        i18n.changeLanguage(switchLang);
    };

    return { lang, setLang };
};
