/* eslint-disable no-use-before-define */
import {
    FC, ReactNode, useContext, useEffect,
} from 'react';
import { Story } from '@storybook/react';
import { Theme, ThemeProvider, useTheme } from 'app/providers/ThemeProvider';
import { ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (themeArg?: Theme) => (StoryComponent: Story) => (
    <ThemeProvider>
        <ChangeTheme themeArg={themeArg}>
            <StoryComponent />
        </ChangeTheme>
    </ThemeProvider>
);

interface ChangeThemeProps {
    themeArg : Theme
    children : ReactNode
}

const ChangeTheme : FC<ChangeThemeProps> = ({ themeArg, children }) => {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        toggleTheme();
    }, []);
    return (
        <div className={`app ${themeArg}`}>
            { children }
        </div>
    );
};
