import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch } from 'react-redux';
import { UserActions } from 'entities/User';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(UserActions.initAuthData());
    }, [dispatch]);

    const { toggleTheme } = useTheme();

    useEffect(() => {
        toggleTheme(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
