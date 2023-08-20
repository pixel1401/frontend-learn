import { FC, useMemo, useState } from 'react';
import { Lang, LangContext } from '../lib/LangContext';

interface LangProviderProps {
    // eslint-disable-next-line no-undef
    children : React.ReactNode
}

export const LangProvider : FC<LangProviderProps> = ({ children }) => {
    const [lang, setLang] = useState<Lang>(Lang.EN);

    const defaultProps = useMemo(() => ({
        lang,
        setLang,
    }), [lang]);

    return (
        <LangContext.Provider value={defaultProps}>
            {children}
        </LangContext.Provider>
    );
};
