import { createContext } from 'react';

export enum Lang {
    EN = 'en',
    RU = 'ru'
}

export interface LangContextProps {
    lang? : Lang,
    setLang? : (lang : Lang) => void
}

export const LangContext = createContext<LangContextProps>({});
