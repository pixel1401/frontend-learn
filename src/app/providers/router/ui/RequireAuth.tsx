import { getUserAuthData } from 'entities/User';
import { FC, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children : ReactNode
}

export const RequireAuth : FC<RequireAuthProps> = ({ children }) => {
    const location = useLocation();

    const isAuth = useSelector(getUserAuthData);

    if (!isAuth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }
    return <>{children}</>;
};
