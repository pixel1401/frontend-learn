import { getUserAuthData, getUserRoles, UserRole } from 'entities/User';
import {
    FC, ReactNode, useEffect, useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children : ReactNode,
    roles? : UserRole[],
}

export const RequireAuth : FC<RequireAuthProps> = ({ children, roles }) => {
    const location = useLocation();

    const userRoles = useSelector(getUserRoles);

    const isAuth = useSelector(getUserAuthData);

    const hasRoles = useMemo(() => {
        if (!roles) return true;
        if (userRoles) {
            return roles?.some((role) => userRoles?.includes(role));
        }

        return false;
    }, [roles, userRoles]);

    if (!isAuth || !hasRoles) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }
    return <>{children}</>;
};
