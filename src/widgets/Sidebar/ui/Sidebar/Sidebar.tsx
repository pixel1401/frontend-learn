import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useLang } from 'app/providers/ThemeProvider';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const { lang, setLang } = useLang();

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div>
                <button data-testid="sidebar-toggle" type="button" onClick={onToggle}>toggle</button>
                <button type="button" onClick={setLang}>Lang</button>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
