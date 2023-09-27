import {useContext} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';

interface UseThemeResult {
    toggleTheme: (isInit? : boolean) => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (isInit: boolean = false) => {
        let newTheme : Theme ;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT
                break;
            case Theme.LIGHT:
                newTheme = Theme.ORANGE
                break
            case Theme.ORANGE:
                newTheme= Theme.DARK;
                break;
            default :
                newTheme= Theme.DARK;
        }
        if (isInit) {
            newTheme = theme ?? Theme.LIGHT;
        }
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
